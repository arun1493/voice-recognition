// Original file: node_modules/protobufs/src/learningmotors/pb/speechproxy.proto

import type {
  Intent as _learningmotors_pb_idl_Intent,
  Intent__Output as _learningmotors_pb_idl_Intent__Output
} from "../../learningmotors/pb/idl/Intent";
import type {
  DebugResponse as _learningmotors_pb_DebugResponse,
  DebugResponse__Output as _learningmotors_pb_DebugResponse__Output
} from "../../learningmotors/pb/DebugResponse";

export interface StreamingRecognizeResponse {
  intents?: _learningmotors_pb_idl_Intent[];
  debug?: _learningmotors_pb_DebugResponse | null;
}

export interface StreamingRecognizeResponse__Output {
  intents: _learningmotors_pb_idl_Intent__Output[];
  debug: _learningmotors_pb_DebugResponse__Output | null;
}
