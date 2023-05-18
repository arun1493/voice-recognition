import _get from "lodash/get";
import _sortBy from "lodash/sortBy";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { EMPTY_ARRAY } from "@suki-web/suki-business";

import {
  buildScope,
  cloudLogger,
  convertPatientFromProto,
  convertPatientListFromProto,
  convertPatientToProto,
  getContext,
  getIds
} from "../../helpers";
import { ERROR_STATEMENTS } from "../../constants";
import PatientsService from "../../services/PatientsService";

class PatientsController {
  searchPatients = async (req: Request, res: Response) => {
    const name = _get(req, "query.name");
    const limit = _get(req, "query.limit");

    const ctx = getContext(req);

    const rpcInput = {
      scope: buildScope(ctx),
      name,
      limit
    };

    try {
      cloudLogger.info("Searching patient");
      const response = await PatientsService.searchPatients(rpcInput, ctx);
      const patientsResponse = _get(response, "patients", EMPTY_ARRAY);
      const patients = patientsResponse.map(convertPatientFromProto);
      cloudLogger.info("Completed searching patients", req, { rpcInput });
      res.status(StatusCodes.OK).json({
        count: patients.length,
        results: patients
      });
    } catch (error) {
      cloudLogger.error("Error in searching patients", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  getPatientById = async (req: Request, res: Response) => {
    const id = _get(req, "params.patientId");
    const ctx = getContext(req);

    try {
      cloudLogger.info("Getting patients by id");
      const rpcInput = {
        scope: buildScope(ctx),
        ids: [id]
      };
      const response = await PatientsService.getPatients(rpcInput, ctx);
      let patients = _get(response, "patients", EMPTY_ARRAY);
      patients = patients.map(convertPatientFromProto);
      patients = _sortBy(patients, (patient) => patient.person.lastName);
      cloudLogger.info("Completed getting patients by id");
      res.status(StatusCodes.OK).json(patients[0]);
    } catch (error) {
      cloudLogger.error("Error in getting patients by id", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  getPatientList = async (req: Request, res: Response) => {
    const { userId } = getIds(req);
    const ctx = getContext(req);

    const rpcInput = {
      scope: buildScope(ctx),
      user_id: userId
    };

    try {
      cloudLogger.info("Getting patient list");
      const response = await PatientsService.getPatientList(rpcInput, ctx);
      const patientList = convertPatientListFromProto(response.patient_list);
      cloudLogger.info("Completed getting patients list");
      res.status(StatusCodes.OK).json({
        patientList
      });
    } catch (error) {
      cloudLogger.error("Error in getting patients list", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  // TODO: ingestEMRNotes was deleted as it is not used in the app
  // For implementation details see https://github.com/LearningMotors/web/blob/964afd45f7906192f423dec76ed75ba6512d84c0/server/lib/graphql/patients/index.js#L126
  addToPatientList = async (req: Request, res: Response) => {
    const patients = _get(req, "body.patients");
    const { userId } = getIds(req);

    const ctx = getContext(req);

    const rpcInput = {
      scope: buildScope(ctx),
      user_id: userId,
      patients: patients?.map(convertPatientToProto)
    };

    try {
      cloudLogger.info("Adding to patients list");
      await PatientsService.addToPatientList(rpcInput, ctx);
      cloudLogger.info("Completed adding to patients list");
      res.status(StatusCodes.OK).json({
        success: true
      });
    } catch (error) {
      cloudLogger.error("Error in adding to patients list", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  removeFromPatientList = async (req: Request, res: Response) => {
    const patientId = _get(req, "params.patientId");
    const { userId } = getIds(req);

    const ctx = getContext(req);

    const rpcInput = {
      scope: buildScope(ctx),
      user_id: userId,
      patient_ids: [patientId]
    };

    try {
      cloudLogger.info("Removing from patient list");
      await PatientsService.removeFromPatientList(rpcInput, ctx);
      cloudLogger.info("Completed removing from patient list", req, { patientId });
      res.status(StatusCodes.OK).json({
        success: true
      });
    } catch (error) {
      cloudLogger.error("Error in removing from patient list", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  createOrUpdatePatients = async (req: Request, res: Response) => {
    const patients = _get(req, "body.patients");

    const ctx = getContext(req);
    const rpcInput = {
      scope: buildScope(ctx),
      patients: patients?.map(convertPatientToProto)
    };

    try {
      cloudLogger.info("Creating/updating patients");
      const response = await PatientsService.createOrUpdatePatients(rpcInput, ctx);
      cloudLogger.info("Getting patients details");
      const patientsDetails = _get(response, "patients", []);

      cloudLogger.info("Completed creating/updating patients list", req);
      res.status(StatusCodes.OK).json({
        code: StatusCodes.OK,
        data: patientsDetails.map(convertPatientFromProto)
      });
    } catch (error) {
      cloudLogger.error("Error in creating or updating patients", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR] + "Unable to update patient"
      });
    }
  };
}

export default new PatientsController();
