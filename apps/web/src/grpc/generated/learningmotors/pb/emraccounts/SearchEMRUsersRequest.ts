// Original file: node_modules/protobufs/src/learningmotors/pb/emraccounts/emraccounts.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface SearchEMRUsersRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  query?: string;
  emr_org_id?: string;
  suki_user_id?: string;
}

export interface SearchEMRUsersRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  query: string;
  emr_org_id: string;
  suki_user_id: string;
}
