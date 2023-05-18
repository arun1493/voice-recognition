// Original file: node_modules/protobufs/src/learningmotors/pb/patients/patients.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface GetPatientsRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  ids?: string[];
  emr_ids?: string[];
  mrns?: string[];
}

export interface GetPatientsRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  ids: string[];
  emr_ids: string[];
  mrns: string[];
}
