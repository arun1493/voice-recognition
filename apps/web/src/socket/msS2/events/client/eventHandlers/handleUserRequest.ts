import {
  convertAppointmentToProto,
  convertPatientToProto,
  convertSectionS2ToProto,
  convertToProtobufTimestamp
} from "../../../../../helpers";
import { RequestTypes } from "../requestType";

async function handleUserRequest(payload: any, { getS2Dialog }: any): Promise<void> {
  const s2Dialog = await getS2Dialog();
  // If s2 connection is not present, return
  if (!s2Dialog) {
    return;
  }

  const { data } = payload;

  const currentEpochTimeStampInMilliSeconds = new Date().getTime();
  const protobufTimeStamp = convertToProtobufTimestamp(currentEpochTimeStampInMilliSeconds);

  const {
    appointment,
    compositionId,
    sectionData,
    requestType,
    sectionId,
    noteTypeId,
    patient,
    patientId,
    appointmentId,
    fromPatientList = false,
    scriptId
  } = data;

  switch (requestType) {
    case RequestTypes.CREATE_NOTE:
      s2Dialog.write({
        user_request: {
          request_type: requestType,
          from_patient_list: fromPatientList
        },
        request_time: protobufTimeStamp
      });
      break;
    case RequestTypes.CANCEL_CREATE_NOTE:
      s2Dialog.write({
        user_request: {
          request_type: requestType,
          composition_id: compositionId
        },
        request_time: protobufTimeStamp
      });
      break;
    case RequestTypes.CREATE_NOTE_WITH_NOTETYPE:
      s2Dialog.write({
        user_request: {
          request_type: requestType,
          notetype_id: noteTypeId,
          composition_id: compositionId,
          appointment_id: appointmentId,
          from_patient_list: fromPatientList
        },
        request_time: protobufTimeStamp
      });
      break;
    case RequestTypes.CREATE_NOTE_WITH_NOTETYPE_PATIENT:
      s2Dialog.write({
        user_request: {
          request_type: requestType,
          notetype_id: noteTypeId,
          composition_id: compositionId,
          appointment_id: appointmentId,
          patient_id: patientId,
          from_patient_list: fromPatientList
        },
        request_time: protobufTimeStamp
      });
      break;
    case RequestTypes.UPDATE_SECTION:
      s2Dialog.write({
        user_request: {
          request_type: requestType,
          composition_id: compositionId,
          section_id: sectionId,
          notetype_id: noteTypeId,
          section_data: convertSectionS2ToProto(sectionData)
        },
        request_time: protobufTimeStamp
      });
      break;
    case RequestTypes.SAVE_COMPOSITION_TO_UNFINISHED:
      s2Dialog.write({
        user_request: {
          request_type: requestType,
          notetype_id: noteTypeId,
          composition_id: compositionId,
          patient_id: patientId,
          appointment_id: appointmentId
        },
        request_time: protobufTimeStamp
      });
      break;
    case RequestTypes.ADD_SECTION:
      s2Dialog.write({
        user_request: {
          request_type: requestType,
          notetype_id: noteTypeId,
          composition_id: compositionId,
          section_id: sectionId
        },
        request_time: protobufTimeStamp
      });
      break;
    case RequestTypes.CLICK_INSERT_SCRIPT:
      s2Dialog.write({
        user_request: {
          request_type: requestType,
          composition_id: compositionId,
          notetype_id: noteTypeId,
          script_id: scriptId,
          section_id: sectionId
        },
        request_time: protobufTimeStamp
      });
      break;
    case RequestTypes.CLICK_REFRESH_VITALS_ON_SCREEN:
      s2Dialog.write({
        user_request: {
          request_type: requestType,
          composition_id: compositionId,
          notetype_id: noteTypeId,
          patient_id: patientId,
          appointment_id: appointmentId
        },
        request_time: protobufTimeStamp
      });
      break;
    case RequestTypes.DELETE_SECTION:
      s2Dialog.write({
        user_request: {
          request_type: requestType,
          note_type_id: noteTypeId,
          composition_id: compositionId,
          section_id: sectionId,
          section_data: convertSectionS2ToProto(sectionData)
        },
        request_time: protobufTimeStamp
      });
      break;
    case RequestTypes.ATTACH_PATIENT:
      s2Dialog.write({
        user_request: {
          request_type: requestType,
          composition_id: compositionId,
          patient: convertPatientToProto(patient),
          patient_id: patientId,
          notetype_id: noteTypeId
        },
        request_time: protobufTimeStamp
      });
      break;

    case RequestTypes.CLICK_NOTES_PULL:
      s2Dialog.write({
        user_request: {
          request_type: requestType,
          appointment_id: appointmentId,
          composition_id: compositionId,
          notetype_id: noteTypeId,
          patient_id: patientId
        },
        request_time: protobufTimeStamp
      });
      break;
    case RequestTypes.COMPOSITION_SUBMISSION_SUCCESSFUL:
      s2Dialog.write({
        user_request: {
          request_type: requestType,
          appointment_id: appointmentId,
          composition_id: compositionId,
          notetype_id: noteTypeId,
          patient_id: patientId
        },
        request_time: protobufTimeStamp
      });
      break;
    case RequestTypes.UPDATE_APPOINTMENT:
      s2Dialog.write({
        user_request: {
          request_type: requestType,
          composition_id: compositionId,
          notetype_id: noteTypeId,
          appointment: convertAppointmentToProto(appointment)
        },
        request_time: protobufTimeStamp
      });
      break;
    case RequestTypes.UPDATE_PATIENT:
      s2Dialog.write({
        user_request: {
          request_type: requestType,
          composition_id: compositionId,
          notetype_id: noteTypeId,
          patient: convertPatientToProto(patient),
          patient_id: patientId
        },
        request_time: protobufTimeStamp
      });
      break;
  }
}

export default handleUserRequest;
