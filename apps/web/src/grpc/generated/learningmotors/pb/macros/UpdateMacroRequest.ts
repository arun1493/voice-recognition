// Original file: node_modules/protobufs/src/learningmotors/pb/macros/macros.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Macro as _learningmotors_pb_macros_Macro,
  Macro__Output as _learningmotors_pb_macros_Macro__Output
} from "../../../learningmotors/pb/macros/Macro";

export interface UpdateMacroRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  macro?: _learningmotors_pb_macros_Macro | null;
}

export interface UpdateMacroRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  macro: _learningmotors_pb_macros_Macro__Output | null;
}
