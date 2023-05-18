// Original file: node_modules/protobufs/src/suki/pb/ssp/asr/asr.proto

import type {
  SukiSpeechRecognizeAlternative as _suki_pb_ssp_asr_SukiSpeechRecognizeAlternative,
  SukiSpeechRecognizeAlternative__Output as _suki_pb_ssp_asr_SukiSpeechRecognizeAlternative__Output
} from "../../../../suki/pb/ssp/asr/SukiSpeechRecognizeAlternative";

export interface SukiSpeechRecognizeResult {
  alternatives?: _suki_pb_ssp_asr_SukiSpeechRecognizeAlternative[];
  is_final?: boolean;
}

export interface SukiSpeechRecognizeResult__Output {
  alternatives: _suki_pb_ssp_asr_SukiSpeechRecognizeAlternative__Output[];
  is_final: boolean;
}
