// Original file: node_modules/protobufs/src/suki/pb/ssp/asr/asr.proto

import type {
  Status as _suki_pb_ssp_asr_Status,
  Status__Output as _suki_pb_ssp_asr_Status__Output
} from "../../../../suki/pb/ssp/asr/Status";
import type {
  SukiSpeechRecognizeResult as _suki_pb_ssp_asr_SukiSpeechRecognizeResult,
  SukiSpeechRecognizeResult__Output as _suki_pb_ssp_asr_SukiSpeechRecognizeResult__Output
} from "../../../../suki/pb/ssp/asr/SukiSpeechRecognizeResult";

export interface SukiSpeechRecognizeResponse {
  error?: _suki_pb_ssp_asr_Status | null;
  results?: _suki_pb_ssp_asr_SukiSpeechRecognizeResult[];
}

export interface SukiSpeechRecognizeResponse__Output {
  error: _suki_pb_ssp_asr_Status__Output | null;
  results: _suki_pb_ssp_asr_SukiSpeechRecognizeResult__Output[];
}
