// Original file: node_modules/protobufs/src/learningmotors/pb/emr_scheduler/emr_scheduler.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface SearchPatientsRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  mrn?: string;
  name?: string;
}

export interface SearchPatientsRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  mrn: string;
  name: string;
}
