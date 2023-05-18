// Original file: node_modules/protobufs/src/learningmotors/pb/graffiti/graffiti.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface CreateRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  notetype_id?: string;
  patient_id?: string;
  appointment_id?: string;
}

export interface CreateRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  notetype_id: string;
  patient_id: string;
  appointment_id: string;
}
