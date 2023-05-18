// Original file: node_modules/protobufs/src/suki/pb/nvoqauth/nvoqauth.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface ForceCreateAndLoginRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  suki_user_id?: string;
}

export interface ForceCreateAndLoginRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  suki_user_id: string;
}
