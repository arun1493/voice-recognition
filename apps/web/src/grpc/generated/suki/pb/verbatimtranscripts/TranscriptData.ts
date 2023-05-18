// Original file: node_modules/protobufs/src/suki/pb/verbatimtranscripts/verbatimtranscripts.proto

import type { Long } from "@grpc/proto-loader";

export interface TranscriptData {
  section_id?: string;
  session_id?: string;
  audio_uri?: string;
  audio_length_ms?: number | string | Long;
  transcript?: string;
  contains_phi?: boolean;
  cannot_transcribe?: boolean;
}

export interface TranscriptData__Output {
  section_id: string;
  session_id: string;
  audio_uri: string;
  audio_length_ms: string;
  transcript: string;
  contains_phi: boolean;
  cannot_transcribe: boolean;
}
