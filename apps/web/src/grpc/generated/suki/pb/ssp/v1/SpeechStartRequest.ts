// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/ssp_speech.proto

import type {
  SpeechConfig as _suki_pb_ssp_v1_SpeechConfig,
  SpeechConfig__Output as _suki_pb_ssp_v1_SpeechConfig__Output
} from "../../../../suki/pb/ssp/v1/SpeechConfig";

export interface SpeechStartRequest {
  speech_config?: _suki_pb_ssp_v1_SpeechConfig | null;
}

export interface SpeechStartRequest__Output {
  speech_config: _suki_pb_ssp_v1_SpeechConfig__Output | null;
}
