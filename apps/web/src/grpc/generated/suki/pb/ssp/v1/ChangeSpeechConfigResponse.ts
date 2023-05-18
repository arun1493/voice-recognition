// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/ssp_speech.proto

import type { ResponseSignals as _suki_pb_ssp_v1_ResponseSignals } from "../../../../suki/pb/ssp/v1/ResponseSignals";
import type { ErrorSignals as _suki_pb_ssp_v1_ErrorSignals } from "../../../../suki/pb/ssp/v1/ErrorSignals";

export interface ChangeSpeechConfigResponse {
  response_signal?: _suki_pb_ssp_v1_ResponseSignals | keyof typeof _suki_pb_ssp_v1_ResponseSignals;
  error_signal?: _suki_pb_ssp_v1_ErrorSignals | keyof typeof _suki_pb_ssp_v1_ErrorSignals;
  response?: "response_signal" | "error_signal";
}

export interface ChangeSpeechConfigResponse__Output {
  response_signal?: keyof typeof _suki_pb_ssp_v1_ResponseSignals;
  error_signal?: keyof typeof _suki_pb_ssp_v1_ErrorSignals;
  response: "response_signal" | "error_signal";
}
