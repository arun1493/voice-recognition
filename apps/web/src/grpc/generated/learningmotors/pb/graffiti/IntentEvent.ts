// Original file: node_modules/protobufs/src/learningmotors/pb/graffiti/graffiti.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Intent as _learningmotors_pb_idl_Intent,
  Intent__Output as _learningmotors_pb_idl_Intent__Output
} from "../../../learningmotors/pb/idl/Intent";
import type {
  Context as _learningmotors_pb_Context,
  Context__Output as _learningmotors_pb_Context__Output
} from "../../../learningmotors/pb/Context";

export interface IntentEvent {
  scope?: _learningmotors_pb_scope_Scope | null;
  intents?: _learningmotors_pb_idl_Intent[];
  context?: _learningmotors_pb_Context | null;
}

export interface IntentEvent__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  intents: _learningmotors_pb_idl_Intent__Output[];
  context: _learningmotors_pb_Context__Output | null;
}
