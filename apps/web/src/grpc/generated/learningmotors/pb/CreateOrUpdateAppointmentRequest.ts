// Original file: node_modules/protobufs/src/learningmotors/pb/appointments.proto

import type {
  Appointment as _learningmotors_pb_Appointment,
  Appointment__Output as _learningmotors_pb_Appointment__Output
} from "../../learningmotors/pb/Appointment";
import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../learningmotors/pb/scope/Scope";

export interface CreateOrUpdateAppointmentRequest {
  appointment?: _learningmotors_pb_Appointment | null;
  scope?: _learningmotors_pb_scope_Scope | null;
  attempt_idempotency?: boolean;
}

export interface CreateOrUpdateAppointmentRequest__Output {
  appointment: _learningmotors_pb_Appointment__Output | null;
  scope: _learningmotors_pb_scope_Scope__Output | null;
  attempt_idempotency: boolean;
}
