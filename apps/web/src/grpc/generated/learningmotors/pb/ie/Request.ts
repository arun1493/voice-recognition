// Original file: node_modules/protobufs/src/learningmotors/pb/ie/def.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Context as _learningmotors_pb_Context,
  Context__Output as _learningmotors_pb_Context__Output
} from "../../../learningmotors/pb/Context";

export interface Request {
  scope?: _learningmotors_pb_scope_Scope | null;
  input?: string;
  ui_context?: _learningmotors_pb_Context | null;
}

export interface Request__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  input: string;
  ui_context: _learningmotors_pb_Context__Output | null;
}
