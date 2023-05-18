// Original file: node_modules/protobufs/src/learningmotors/pb/userhints/userhints.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  UserHint as _learningmotors_pb_userhints_UserHint,
  UserHint__Output as _learningmotors_pb_userhints_UserHint__Output
} from "../../../learningmotors/pb/userhints/UserHint";

export interface UpdateUserHintsRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  user_hint?: _learningmotors_pb_userhints_UserHint | null;
}

export interface UpdateUserHintsRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  user_hint: _learningmotors_pb_userhints_UserHint__Output | null;
}
