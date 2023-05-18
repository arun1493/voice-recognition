// Original file: node_modules/protobufs/src/learningmotors/pb/user/user.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  User as _learningmotors_pb_user_User,
  User__Output as _learningmotors_pb_user_User__Output
} from "../../../learningmotors/pb/user/User";
import type { EMRSecondaryType as _learningmotors_pb_emrtypes_EMRSecondaryType } from "../../../learningmotors/pb/emrtypes/EMRSecondaryType";

export interface CreateRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  user?: _learningmotors_pb_user_User | null;
  emr?: _learningmotors_pb_emrtypes_EMRSecondaryType | keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
  affiliated_emr?: string;
}

export interface CreateRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  user: _learningmotors_pb_user_User__Output | null;
  emr: keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
  affiliated_emr: string;
}
