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
  PasswordRecoveryQuestion as _suki_pb_accounts_PasswordRecoveryQuestion,
  PasswordRecoveryQuestion__Output as _suki_pb_accounts_PasswordRecoveryQuestion__Output
} from "../../../suki/pb/accounts/PasswordRecoveryQuestion";

export interface CreateAccountWithPasswordRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  user?: _learningmotors_pb_user_User | null;
  password?: string;
  recovery_questions?: _suki_pb_accounts_PasswordRecoveryQuestion[];
}

export interface CreateAccountWithPasswordRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  user: _learningmotors_pb_user_User__Output | null;
  password: string;
  recovery_questions: _suki_pb_accounts_PasswordRecoveryQuestion__Output[];
}
