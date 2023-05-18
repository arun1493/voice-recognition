// Original file: node_modules/protobufs/src/learningmotors/pb/transcript/transcript.proto

import type {
  AudioEncoding as _learningmotors_pb_AudioEncoding,
  AudioEncoding__Output as _learningmotors_pb_AudioEncoding__Output
} from "../../../learningmotors/pb/AudioEncoding";
import type {
  TranscriptResponse as _learningmotors_pb_transcript_TranscriptResponse,
  TranscriptResponse__Output as _learningmotors_pb_transcript_TranscriptResponse__Output
} from "../../../learningmotors/pb/transcript/TranscriptResponse";
import type { Long } from "@grpc/proto-loader";

export interface Event {
  audio_uri?: string;
  audio_length_in_msec?: number | string | Long;
  audio_enc?: _learningmotors_pb_AudioEncoding | null;
  transcript_uris?: _learningmotors_pb_transcript_TranscriptResponse[];
  intent_uris?: string[];
}

export interface Event__Output {
  audio_uri: string;
  audio_length_in_msec: string;
  audio_enc: _learningmotors_pb_AudioEncoding__Output | null;
  transcript_uris: _learningmotors_pb_transcript_TranscriptResponse__Output[];
  intent_uris: string[];
}
