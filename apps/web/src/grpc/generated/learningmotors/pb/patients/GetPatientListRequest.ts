// Original file: node_modules/protobufs/src/learningmotors/pb/patients/patients.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface GetPatientListRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  user_id?: string;
}

export interface GetPatientListRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  user_id: string;
}
