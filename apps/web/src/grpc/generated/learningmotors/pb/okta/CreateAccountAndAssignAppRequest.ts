// Original file: node_modules/protobufs/src/learningmotors/pb/okta/okta.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  User as _learningmotors_pb_user_User,
  User__Output as _learningmotors_pb_user_User__Output
} from "../../../learningmotors/pb/user/User";
import type {
  ProfileAttribute as _learningmotors_pb_okta_ProfileAttribute,
  ProfileAttribute__Output as _learningmotors_pb_okta_ProfileAttribute__Output
} from "../../../learningmotors/pb/okta/ProfileAttribute";

export interface CreateAccountAndAssignAppRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  user?: _learningmotors_pb_user_User | null;
  password?: string;
  okta_application_id?: string;
  custom_profile_attributes?: _learningmotors_pb_okta_ProfileAttribute[];
}

export interface CreateAccountAndAssignAppRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  user: _learningmotors_pb_user_User__Output | null;
  password: string;
  okta_application_id: string;
  custom_profile_attributes: _learningmotors_pb_okta_ProfileAttribute__Output[];
}
