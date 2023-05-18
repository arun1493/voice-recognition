// Original file: node_modules/protobufs/src/learningmotors/pb/transcript/pubsub.proto

import type {
  UISessionHeader as _learningmotors_pb_transcript_UISessionHeader,
  UISessionHeader__Output as _learningmotors_pb_transcript_UISessionHeader__Output
} from "../../../learningmotors/pb/transcript/UISessionHeader";
import type {
  Intent as _learningmotors_pb_idl_Intent,
  Intent__Output as _learningmotors_pb_idl_Intent__Output
} from "../../../learningmotors/pb/idl/Intent";

export interface Intents {
  header?: _learningmotors_pb_transcript_UISessionHeader | null;
  intents?: _learningmotors_pb_idl_Intent[];
}

export interface Intents__Output {
  header: _learningmotors_pb_transcript_UISessionHeader__Output | null;
  intents: _learningmotors_pb_idl_Intent__Output[];
}
