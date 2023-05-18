// Original file: node_modules/protobufs/src/learningmotors/pb/audio.proto

import type {
  AudioEncoding as _learningmotors_pb_AudioEncoding,
  AudioEncoding__Output as _learningmotors_pb_AudioEncoding__Output
} from "../../learningmotors/pb/AudioEncoding";

export interface AudioFile {
  audio_enc?: _learningmotors_pb_AudioEncoding | null;
  audio_uri?: string;
  is_signed?: boolean;
}

export interface AudioFile__Output {
  audio_enc: _learningmotors_pb_AudioEncoding__Output | null;
  audio_uri: string;
  is_signed: boolean;
}
