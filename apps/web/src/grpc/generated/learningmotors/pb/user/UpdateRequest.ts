// Original file: node_modules/protobufs/src/learningmotors/pb/user/user.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  User as _learningmotors_pb_user_User,
  User__Output as _learningmotors_pb_user_User__Output
} from "../../../learningmotors/pb/user/User";

export interface UpdateRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  user?: _learningmotors_pb_user_User | null;
}

export interface UpdateRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  user: _learningmotors_pb_user_User__Output | null;
}
