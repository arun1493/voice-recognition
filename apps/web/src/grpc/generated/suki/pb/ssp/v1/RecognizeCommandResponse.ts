// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/ssp_speech.proto

import type {
  IntentResult as _suki_pb_ssp_v1_IntentResult,
  IntentResult__Output as _suki_pb_ssp_v1_IntentResult__Output
} from "../../../../suki/pb/ssp/v1/IntentResult";
import type { ResponseSignals as _suki_pb_ssp_v1_ResponseSignals } from "../../../../suki/pb/ssp/v1/ResponseSignals";
import type { ErrorSignals as _suki_pb_ssp_v1_ErrorSignals } from "../../../../suki/pb/ssp/v1/ErrorSignals";

export interface RecognizeCommandResponse {
  result?: _suki_pb_ssp_v1_IntentResult | null;
  response_signal?: _suki_pb_ssp_v1_ResponseSignals | keyof typeof _suki_pb_ssp_v1_ResponseSignals;
  error_signal?: _suki_pb_ssp_v1_ErrorSignals | keyof typeof _suki_pb_ssp_v1_ErrorSignals;
  response?: "result" | "response_signal" | "error_signal";
}

export interface RecognizeCommandResponse__Output {
  result?: _suki_pb_ssp_v1_IntentResult__Output | null;
  response_signal?: keyof typeof _suki_pb_ssp_v1_ResponseSignals;
  error_signal?: keyof typeof _suki_pb_ssp_v1_ErrorSignals;
  response: "result" | "response_signal" | "error_signal";
}
