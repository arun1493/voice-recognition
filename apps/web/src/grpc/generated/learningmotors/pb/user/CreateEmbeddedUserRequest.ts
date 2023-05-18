// Original file: node_modules/protobufs/src/learningmotors/pb/user/embedded_user.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  TenantDetails as _learningmotors_pb_user_TenantDetails,
  TenantDetails__Output as _learningmotors_pb_user_TenantDetails__Output
} from "../../../learningmotors/pb/user/TenantDetails";
import type {
  User as _learningmotors_pb_user_User,
  User__Output as _learningmotors_pb_user_User__Output
} from "../../../learningmotors/pb/user/User";

export interface CreateEmbeddedUserRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  tenant_details?: _learningmotors_pb_user_TenantDetails | null;
  user?: _learningmotors_pb_user_User | null;
  partner_id?: string;
}

export interface CreateEmbeddedUserRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  tenant_details: _learningmotors_pb_user_TenantDetails__Output | null;
  user: _learningmotors_pb_user_User__Output | null;
  partner_id: string;
}
