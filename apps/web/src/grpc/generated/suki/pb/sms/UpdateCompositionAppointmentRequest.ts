// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

import type {
  Appointment as _learningmotors_pb_Appointment,
  Appointment__Output as _learningmotors_pb_Appointment__Output
} from "../../../learningmotors/pb/Appointment";

export interface UpdateCompositionAppointmentRequest {
  organization_id?: string;
  composition_id?: string;
  appointment?: _learningmotors_pb_Appointment | null;
}

export interface UpdateCompositionAppointmentRequest__Output {
  organization_id: string;
  composition_id: string;
  appointment: _learningmotors_pb_Appointment__Output | null;
}
