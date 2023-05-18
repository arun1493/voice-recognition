// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/resource.proto

import type {
  WordMetadata as _suki_pb_ssp_v1_WordMetadata,
  WordMetadata__Output as _suki_pb_ssp_v1_WordMetadata__Output
} from "../../../../suki/pb/ssp/v1/WordMetadata";

export interface SpeechResult {
  transcript_or_intent?: string;
  confidence?: number | string;
  words?: _suki_pb_ssp_v1_WordMetadata[];
}

export interface SpeechResult__Output {
  transcript_or_intent: string;
  confidence: number;
  words: _suki_pb_ssp_v1_WordMetadata__Output[];
}
