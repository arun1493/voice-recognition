// Original file: node_modules/protobufs/src/learningmotors/pb/emraccounts/emraccounts.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface GetUsersRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  suki_user_ids?: string[];
  include_organization?: boolean;
  include_api_credentials?: boolean;
}

export interface GetUsersRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  suki_user_ids: string[];
  include_organization: boolean;
  include_api_credentials: boolean;
}
