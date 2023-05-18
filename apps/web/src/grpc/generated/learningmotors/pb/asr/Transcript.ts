// Original file: node_modules/protobufs/src/learningmotors/pb/asr/transcript.proto

import type {
  CursorPosition as _learningmotors_pb_common_CursorPosition,
  CursorPosition__Output as _learningmotors_pb_common_CursorPosition__Output
} from "../../../learningmotors/pb/common/CursorPosition";

export interface Transcript {
  text?: string;
  final?: boolean;
  cursorPosition?: _learningmotors_pb_common_CursorPosition | null;
}

export interface Transcript__Output {
  text: string;
  final: boolean;
  cursorPosition: _learningmotors_pb_common_CursorPosition__Output | null;
}
