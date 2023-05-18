// Original file: node_modules/protobufs/src/learningmotors/pb/regression/regression.proto

import type {
  AudioFile as _learningmotors_pb_AudioFile,
  AudioFile__Output as _learningmotors_pb_AudioFile__Output
} from "../../../learningmotors/pb/AudioFile";
import type {
  Intent as _learningmotors_pb_idl_Intent,
  Intent__Output as _learningmotors_pb_idl_Intent__Output
} from "../../../learningmotors/pb/idl/Intent";

export interface DataPoint {
  audio_file?: _learningmotors_pb_AudioFile | null;
  intents?: _learningmotors_pb_idl_Intent[];
}

export interface DataPoint__Output {
  audio_file: _learningmotors_pb_AudioFile__Output | null;
  intents: _learningmotors_pb_idl_Intent__Output[];
}
