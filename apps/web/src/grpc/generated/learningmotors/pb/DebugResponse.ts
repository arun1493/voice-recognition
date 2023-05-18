// Original file: node_modules/protobufs/src/learningmotors/pb/speechproxy.proto

import type {
  TextResponse as _learningmotors_pb_TextResponse,
  TextResponse__Output as _learningmotors_pb_TextResponse__Output
} from "../../learningmotors/pb/TextResponse";

export interface DebugResponse {
  raw_transcript?: _learningmotors_pb_TextResponse[];
}

export interface DebugResponse__Output {
  raw_transcript: _learningmotors_pb_TextResponse__Output[];
}
