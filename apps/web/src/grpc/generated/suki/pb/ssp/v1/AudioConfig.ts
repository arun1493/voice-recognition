// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/resource.proto

import type { AudioEncoding as _suki_pb_ssp_v1_AudioEncoding } from "../../../../suki/pb/ssp/v1/AudioEncoding";

export interface AudioConfig {
  audio_encoding?: _suki_pb_ssp_v1_AudioEncoding | keyof typeof _suki_pb_ssp_v1_AudioEncoding;
  sample_rate_hertz?: number;
  enable_compression?: boolean;
  audio_language?: string;
}

export interface AudioConfig__Output {
  audio_encoding: keyof typeof _suki_pb_ssp_v1_AudioEncoding;
  sample_rate_hertz: number;
  enable_compression: boolean;
  audio_language: string;
}
