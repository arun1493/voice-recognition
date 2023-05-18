// Original file: node_modules/protobufs/src/suki/pb/ssp/asr/asr.proto

import type {
  WordMetaData as _suki_pb_ssp_asr_WordMetaData,
  WordMetaData__Output as _suki_pb_ssp_asr_WordMetaData__Output
} from "../../../../suki/pb/ssp/asr/WordMetaData";

export interface SukiSpeechRecognizeAlternative {
  transcript?: string;
  confidence?: number | string;
  words?: _suki_pb_ssp_asr_WordMetaData[];
}

export interface SukiSpeechRecognizeAlternative__Output {
  transcript: string;
  confidence: number;
  words: _suki_pb_ssp_asr_WordMetaData__Output[];
}
