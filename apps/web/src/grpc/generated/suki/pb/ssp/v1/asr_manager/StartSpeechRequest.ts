// Original file: node_modules/protobufs/src/suki/pb/ssp/asr_manager/asr_manager.proto

import type {
  SpeechConfig as _suki_pb_ssp_v1_SpeechConfig,
  SpeechConfig__Output as _suki_pb_ssp_v1_SpeechConfig__Output
} from "../../../../../suki/pb/ssp/v1/SpeechConfig";

export interface StartSpeechRequest {
  session_id?: string;
  speech_config?: _suki_pb_ssp_v1_SpeechConfig | null;
}

export interface StartSpeechRequest__Output {
  session_id: string;
  speech_config: _suki_pb_ssp_v1_SpeechConfig__Output | null;
}
