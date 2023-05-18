// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/ssp_speech.proto

import type {
  SpeechStartResult as _suki_pb_ssp_v1_SpeechStartResult,
  SpeechStartResult__Output as _suki_pb_ssp_v1_SpeechStartResult__Output
} from "../../../../suki/pb/ssp/v1/SpeechStartResult";
import type { ResponseSignals as _suki_pb_ssp_v1_ResponseSignals } from "../../../../suki/pb/ssp/v1/ResponseSignals";
import type { ErrorSignals as _suki_pb_ssp_v1_ErrorSignals } from "../../../../suki/pb/ssp/v1/ErrorSignals";

export interface SpeechStartResponse {
  result?: _suki_pb_ssp_v1_SpeechStartResult | null;
  response_signal?: _suki_pb_ssp_v1_ResponseSignals | keyof typeof _suki_pb_ssp_v1_ResponseSignals;
  error_signal?: _suki_pb_ssp_v1_ErrorSignals | keyof typeof _suki_pb_ssp_v1_ErrorSignals;
  response?: "result" | "response_signal" | "error_signal";
}

export interface SpeechStartResponse__Output {
  result?: _suki_pb_ssp_v1_SpeechStartResult__Output | null;
  response_signal?: keyof typeof _suki_pb_ssp_v1_ResponseSignals;
  error_signal?: keyof typeof _suki_pb_ssp_v1_ErrorSignals;
  response: "result" | "response_signal" | "error_signal";
}
