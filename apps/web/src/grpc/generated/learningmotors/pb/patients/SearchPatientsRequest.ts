// Original file: node_modules/protobufs/src/learningmotors/pb/patients/patients.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface SearchPatientsRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  name?: string;
  limit?: number;
}

export interface SearchPatientsRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  name: string;
  limit: number;
}
