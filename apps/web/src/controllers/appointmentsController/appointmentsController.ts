import _get from "lodash/get";
import _uniq from "lodash/uniq";
import _sortBy from "lodash/sortBy";
import _isEmpty from "lodash/isEmpty";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { EMPTY_ARRAY, NoteSources } from "@suki-web/suki-business";

import {
  buildScope,
  cloudLogger,
  convertAppointmentFromProto,
  convertAppointmentToProto,
  convertCompositionFromProtoForAppointmentStatus,
  convertNoteFromProtoForAppointmentStatus,
  convertPatientFromProto,
  getContext,
  getDateFromString,
  getIds,
  getMultipleNotesStatus
} from "../../helpers";
import SMSService from "../../services/SMSService";
import UserService from "../../services/UserService";
import PatientsService from "../../services/PatientsService";
import { appointmentReader, patientReader } from "../../readers";
import { DEFAULT_PAGE_LIMIT, ERROR_STATEMENTS, NOTE_STATUS } from "../../constants";
import AppointmentsService from "../../services/AppointmentsService";
import { Patient } from "../../grpc/generated/learningmotors/pb/patients/Patient";

class AppointmentsController {
  getAppointments = async (req: Request, res: Response) => {
    const startsAtRangeBeginning = _get(req, "query.startsAtRangeBeginning");
    const startsAtRangeEnd = _get(req, "query.startsAtRangeEnd");
    const includeStatuses = _get(req, "query.includeStatuses");
    const filterInternalAppointments = _get(req, "query.filterInternalAppointments");
    const appointmentId = _get(req, "query.appointmentId");
    const { organizationId, userId } = getIds(req);

    const ctx = getContext(req);

    const appointmentsInput: any = {
      scope: buildScope(ctx),
      owner_id: userId,
      starts_at_range_beginning: getDateFromString(startsAtRangeBeginning),
      starts_at_range_end: getDateFromString(startsAtRangeEnd),
      filter_internal_appointments: Boolean(filterInternalAppointments)
    };

    // Return single appointment if appointmentId is given
    if (!_isEmpty(appointmentId)) {
      appointmentsInput.ids = [appointmentId];
      const appointmentsResponse = await AppointmentsService.getAppointments(appointmentsInput, ctx);
      const appointment = _get(appointmentsResponse, "appointments.0", EMPTY_ARRAY);
      return res.status(StatusCodes.OK).json({ appointment: convertAppointmentFromProto(appointment) });
    }

    const userInput = {
      ids: [userId]
    };

    try {
      cloudLogger.info("Initialized getting appointments");
      const appointmentsResponse = await AppointmentsService.getAppointments(appointmentsInput, ctx);
      const appointments = _get(appointmentsResponse, "appointments", EMPTY_ARRAY);
      const ownerResponse = await UserService.getAllUsers(userInput, ctx);
      const owner = _get(ownerResponse, "results[0]", null);

      if (!appointments.length) {
        return res.status(StatusCodes.OK).json({ count: 0, results: [] });
      }

      let appointmentIds = [];
      let patientIds = [];

      appointments.forEach((appt) => {
        appointmentIds.push(appointmentReader.id(appt));
        patientIds.push(appointmentReader.patientId(appt));
      });

      appointmentIds = _uniq(appointmentIds);
      patientIds = _uniq(patientIds);

      const rpcInput = {
        scope: buildScope(ctx),
        ids: patientIds
      };

      cloudLogger.info("Getting Patients");
      const response = await PatientsService.getPatients(rpcInput, ctx);
      let patients = _get(response, "patients", EMPTY_ARRAY);
      patients = patients.map(convertPatientFromProto);
      patients = _sortBy(patients, (patient) => patient.person.lastName) as Patient[];

      // Converts to patients map of id:patient pair to retrieve in O(1)
      const patientsMap = patients.reduce((map, patient) => map.set(patientReader.id(patient), patient), new Map());

      let compositionsMap;
      let patientNotesMap;

      if (includeStatuses) {
        const rpcInput = {
          appointment_ids: appointmentIds,
          include_metadata: true,
          include_pd_read_only: true,
          include_sections: false,
          organization_id: organizationId,
          source: {
            source_type: NoteSources.USER
          },
          user_id: userId
        };

        cloudLogger.info("Getting compositions");
        const response = await SMSService.getComposition(rpcInput, ctx);
        let compositions = _get(response, "compositions", EMPTY_ARRAY);
        compositions = compositions.map(convertCompositionFromProtoForAppointmentStatus);

        compositionsMap = compositions.reduce((filteredCompositions, composition) => {
          filteredCompositions[composition.apptId] ??= { compositions: [] };
          filteredCompositions[composition.apptId].compositions.push(composition);
          return filteredCompositions;
        }, {});

        const noteInput = {
          organization_id: organizationId,
          page_request: {
            type: "CURSOR",
            cursors: {
              limit: DEFAULT_PAGE_LIMIT,
              offset: 0
            }
          },
          user_id: userId,
          appointment_ids: appointmentIds,
          include_sections: false
        };

        cloudLogger.info("Getting patient notes response");
        const patientNotesResponse = await SMSService.getNote(noteInput, ctx);
        const notes = _get(patientNotesResponse, "notes", EMPTY_ARRAY);
        const patientNotes = notes.map((note) => {
          const convertedNote = convertNoteFromProtoForAppointmentStatus(note);
          if (!note.composition_id && convertedNote.metadata) {
            convertedNote.metadata.status = NOTE_STATUS.IMPORTED_FROM_EMR as any;
          }
          return convertedNote;
        });

        patientNotesMap = patientNotes.reduce((filteredNotes, note) => {
          filteredNotes[note.apptId] ??= { notes: [] };
          filteredNotes[note.apptId].notes.push(note);
          return filteredNotes;
        }, {});
      }

      cloudLogger.info("Getting converted appointments");
      const convertedAppts = appointments.map((appointment) => {
        if (includeStatuses) {
          const id = appointmentReader.id(appointment) as string;
          const matchingCompositions = compositionsMap[id]?.compositions;
          const matchingNotes = patientNotesMap[id]?.notes;
          const notes = !_isEmpty(matchingCompositions)
            ? matchingCompositions
            : !_isEmpty(matchingNotes)
            ? matchingNotes
            : null;
          appointment.noteStatus = notes && getMultipleNotesStatus(notes);
        }

        // Add relevant patient and owner and convert appointments
        appointment.patient = patientsMap.get(appointmentReader.patientId(appointment));
        appointment.owner = owner;
        return convertAppointmentFromProto(appointment);
      });

      cloudLogger.info("Completed getting provider note", req);
      return res.status(StatusCodes.OK).json({ count: convertedAppts.length, results: convertedAppts });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  createOrUpdateAppointment = async (req: Request, res: Response) => {
    const ctx = getContext(req, true);
    const appointment = _get(req, "body.appointment");
    const patientId = _get(req, "body.appointment.patientId");

    // PatientID is required for an appointment to be created/updated
    if (_isEmpty(patientId)) {
      cloudLogger.error("Missing patient ID set for this appointment.", req);
      res.status(StatusCodes.BAD_REQUEST).json({ error: "Missing patient ID set for this appointment." });
    }

    const rpcInput = {
      scope: buildScope(ctx),
      appointment: convertAppointmentToProto(appointment)
    };

    try {
      cloudLogger.info("Creating/updating appointment");
      const response = await AppointmentsService.createOrUpdateAppointment(rpcInput, ctx);
      res.status(StatusCodes.OK).json({ appointment: convertAppointmentFromProto(response?.appointment) });
      cloudLogger.info("Successfully completed creating/updating appointment", req);
    } catch (error) {
      cloudLogger.error("Error creating or updating appointment", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };
}

export default new AppointmentsController();
