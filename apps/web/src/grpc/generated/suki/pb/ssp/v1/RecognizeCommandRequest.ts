// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/ssp_speech.proto

import type {
  SpeechContent as _suki_pb_ssp_v1_SpeechContent,
  SpeechContent__Output as _suki_pb_ssp_v1_SpeechContent__Output
} from "../../../../suki/pb/ssp/v1/SpeechContent";
import type { RequestSignals as _suki_pb_ssp_v1_RequestSignals } from "../../../../suki/pb/ssp/v1/RequestSignals";
import type {
  CustomData as _suki_pb_ssp_v1_CustomData,
  CustomData__Output as _suki_pb_ssp_v1_CustomData__Output
} from "../../../../suki/pb/ssp/v1/CustomData";

export interface RecognizeCommandRequest {
  audio_content?: _suki_pb_ssp_v1_SpeechContent | null;
  request_signal?: _suki_pb_ssp_v1_RequestSignals | keyof typeof _suki_pb_ssp_v1_RequestSignals;
  text_content?: string;
  custom_data?: _suki_pb_ssp_v1_CustomData | null;
  request?: "audio_content" | "request_signal" | "text_content";
}

export interface RecognizeCommandRequest__Output {
  audio_content?: _suki_pb_ssp_v1_SpeechContent__Output | null;
  request_signal?: keyof typeof _suki_pb_ssp_v1_RequestSignals;
  text_content?: string;
  custom_data: _suki_pb_ssp_v1_CustomData__Output | null;
  request: "audio_content" | "request_signal" | "text_content";
}
