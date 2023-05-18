// Original file: node_modules/protobufs/src/learningmotors/pb/macros/macros.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface CopyMacroRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  id?: string;
  user_id?: string;
}

export interface CopyMacroRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  id: string;
  user_id: string;
}
