// Original file: node_modules/protobufs/src/learningmotors/pb/appointments.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../learningmotors/pb/scope/Scope";

export interface DeleteAppointmentsRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  suki_ids?: string[];
  emr_ids?: string[];
}

export interface DeleteAppointmentsRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  suki_ids: string[];
  emr_ids: string[];
}
