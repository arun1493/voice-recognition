// Original file: node_modules/protobufs/src/learningmotors/pb/appointments.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../learningmotors/pb/scope/Scope";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../google/protobuf/Timestamp";
import type { _learningmotors_pb_Appointment_AppointmentType } from "../../learningmotors/pb/Appointment";

export interface MoveCompositionToNewAppointmentRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  user_id?: string;
  appointment_id?: string;
  composition_id?: string;
  starts_at?: _google_protobuf_Timestamp | null;
  ends_at?: _google_protobuf_Timestamp | null;
  appointment_type?:
    | _learningmotors_pb_Appointment_AppointmentType
    | keyof typeof _learningmotors_pb_Appointment_AppointmentType;
}

export interface MoveCompositionToNewAppointmentRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  user_id: string;
  appointment_id: string;
  composition_id: string;
  starts_at: _google_protobuf_Timestamp__Output | null;
  ends_at: _google_protobuf_Timestamp__Output | null;
  appointment_type: keyof typeof _learningmotors_pb_Appointment_AppointmentType;
}
