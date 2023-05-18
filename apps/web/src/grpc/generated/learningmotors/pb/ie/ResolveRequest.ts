// Original file: node_modules/protobufs/src/learningmotors/pb/ie/slotmachine.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Context as _learningmotors_pb_Context,
  Context__Output as _learningmotors_pb_Context__Output
} from "../../../learningmotors/pb/Context";
import type {
  Intent as _learningmotors_pb_idl_Intent,
  Intent__Output as _learningmotors_pb_idl_Intent__Output
} from "../../../learningmotors/pb/idl/Intent";

export interface ResolveRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  user_id?: string;
  context?: _learningmotors_pb_Context | null;
  intents?: _learningmotors_pb_idl_Intent[];
}

export interface ResolveRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  user_id: string;
  context: _learningmotors_pb_Context__Output | null;
  intents: _learningmotors_pb_idl_Intent__Output[];
}
