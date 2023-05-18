// Original file: node_modules/protobufs/src/learningmotors/pb/emr_scheduler/emr_scheduler.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Appointment as _learningmotors_pb_Appointment,
  Appointment__Output as _learningmotors_pb_Appointment__Output
} from "../../../learningmotors/pb/Appointment";

export interface RefreshEncounterFieldsRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  appointment?: _learningmotors_pb_Appointment | null;
}

export interface RefreshEncounterFieldsRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  appointment: _learningmotors_pb_Appointment__Output | null;
}
