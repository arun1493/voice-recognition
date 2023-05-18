// Original file: node_modules/protobufs/src/learningmotors/pb/lighthouse.proto

import type {
  UISessionHeader as _learningmotors_pb_transcript_UISessionHeader,
  UISessionHeader__Output as _learningmotors_pb_transcript_UISessionHeader__Output
} from "../../learningmotors/pb/transcript/UISessionHeader";
import type {
  Intent as _learningmotors_pb_idl_Intent,
  Intent__Output as _learningmotors_pb_idl_Intent__Output
} from "../../learningmotors/pb/idl/Intent";
import type {
  AudioEncoding as _learningmotors_pb_AudioEncoding,
  AudioEncoding__Output as _learningmotors_pb_AudioEncoding__Output
} from "../../learningmotors/pb/AudioEncoding";

export interface LighthouseEvent {
  header?: _learningmotors_pb_transcript_UISessionHeader | null;
  intent?: _learningmotors_pb_idl_Intent[];
  audio_uri?: string;
  audio_enc?: _learningmotors_pb_AudioEncoding | null;
  raw_transcript?: _learningmotors_pb_idl_Intent | null;
}

export interface LighthouseEvent__Output {
  header: _learningmotors_pb_transcript_UISessionHeader__Output | null;
  intent: _learningmotors_pb_idl_Intent__Output[];
  audio_uri: string;
  audio_enc: _learningmotors_pb_AudioEncoding__Output | null;
  raw_transcript: _learningmotors_pb_idl_Intent__Output | null;
}
