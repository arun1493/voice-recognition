// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/resource.proto

import type {
  SpeechResult as _suki_pb_ssp_v1_SpeechResult,
  SpeechResult__Output as _suki_pb_ssp_v1_SpeechResult__Output
} from "../../../../suki/pb/ssp/v1/SpeechResult";
import type { ASR as _suki_pb_ssp_v1_ASR } from "../../../../suki/pb/ssp/v1/ASR";

export interface TranscriptResult {
  transcript?: _suki_pb_ssp_v1_SpeechResult | null;
  is_final?: boolean;
  transcript_alternates?: _suki_pb_ssp_v1_SpeechResult[];
  asr_used?: _suki_pb_ssp_v1_ASR | keyof typeof _suki_pb_ssp_v1_ASR;
}

export interface TranscriptResult__Output {
  transcript: _suki_pb_ssp_v1_SpeechResult__Output | null;
  is_final: boolean;
  transcript_alternates: _suki_pb_ssp_v1_SpeechResult__Output[];
  asr_used: keyof typeof _suki_pb_ssp_v1_ASR;
}
