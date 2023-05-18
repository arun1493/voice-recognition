// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/ssp_speech.proto

import type {
  SpeechAdaptation as _suki_pb_ssp_v1_SpeechAdaptation,
  SpeechAdaptation__Output as _suki_pb_ssp_v1_SpeechAdaptation__Output
} from "../../../../suki/pb/ssp/v1/SpeechAdaptation";
import type {
  SpeechContent as _suki_pb_ssp_v1_SpeechContent,
  SpeechContent__Output as _suki_pb_ssp_v1_SpeechContent__Output
} from "../../../../suki/pb/ssp/v1/SpeechContent";
import type { RequestSignals as _suki_pb_ssp_v1_RequestSignals } from "../../../../suki/pb/ssp/v1/RequestSignals";

export interface RecognizeDictationRequest {
  speech_adaptation?: _suki_pb_ssp_v1_SpeechAdaptation | null;
  audio_content?: _suki_pb_ssp_v1_SpeechContent | null;
  request_signal?: _suki_pb_ssp_v1_RequestSignals | keyof typeof _suki_pb_ssp_v1_RequestSignals;
  request?: "speech_adaptation" | "audio_content" | "request_signal";
}

export interface RecognizeDictationRequest__Output {
  speech_adaptation?: _suki_pb_ssp_v1_SpeechAdaptation__Output | null;
  audio_content?: _suki_pb_ssp_v1_SpeechContent__Output | null;
  request_signal?: keyof typeof _suki_pb_ssp_v1_RequestSignals;
  request: "speech_adaptation" | "audio_content" | "request_signal";
}
