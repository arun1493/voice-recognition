// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

import type {
  SubmitCompositionResponse as _suki_pb_sms_SubmitCompositionResponse,
  SubmitCompositionResponse__Output as _suki_pb_sms_SubmitCompositionResponse__Output
} from "../../../suki/pb/sms/SubmitCompositionResponse";
import type {
  Appointment as _learningmotors_pb_Appointment,
  Appointment__Output as _learningmotors_pb_Appointment__Output
} from "../../../learningmotors/pb/Appointment";

export interface _suki_pb_s2_ServerSubmissionResponse_Appointments {
  appointments?: _learningmotors_pb_Appointment[];
}

export interface _suki_pb_s2_ServerSubmissionResponse_Appointments__Output {
  appointments: _learningmotors_pb_Appointment__Output[];
}

// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

export enum _suki_pb_s2_ServerSubmissionResponse_ResponseType {
  SUCCESS = 0,
  ERROR = 1,
  DISAMBIGUATION_NEEDED = 3
}

export interface ServerSubmissionResponse {
  submit_composition_response_type?:
    | _suki_pb_s2_ServerSubmissionResponse_ResponseType
    | keyof typeof _suki_pb_s2_ServerSubmissionResponse_ResponseType;
  submit_composition_response?: _suki_pb_sms_SubmitCompositionResponse | null;
  submit_composition_response_error_message?: string;
  appointments_with_open_encounters?: _suki_pb_s2_ServerSubmissionResponse_Appointments | null;
  submit_response?:
    | "submit_composition_response"
    | "submit_composition_response_error_message"
    | "appointments_with_open_encounters";
}

export interface ServerSubmissionResponse__Output {
  submit_composition_response_type: keyof typeof _suki_pb_s2_ServerSubmissionResponse_ResponseType;
  submit_composition_response?: _suki_pb_sms_SubmitCompositionResponse__Output | null;
  submit_composition_response_error_message?: string;
  appointments_with_open_encounters?: _suki_pb_s2_ServerSubmissionResponse_Appointments__Output | null;
  submit_response:
    | "submit_composition_response"
    | "submit_composition_response_error_message"
    | "appointments_with_open_encounters";
}
