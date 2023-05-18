// Original file: node_modules/protobufs/src/suki/pb/ssp/ce/ssp_commands_engine_v0_5.proto

import type {
  DetectIntentResult as _suki_pb_ssp_ce_DetectIntentResult,
  DetectIntentResult__Output as _suki_pb_ssp_ce_DetectIntentResult__Output
} from "../../../../suki/pb/ssp/ce/DetectIntentResult";
import type {
  Status as _suki_pb_ssp_ce_Status,
  Status__Output as _suki_pb_ssp_ce_Status__Output
} from "../../../../suki/pb/ssp/ce/Status";

// Original file: node_modules/protobufs/src/suki/pb/ssp/ce/ssp_commands_engine_v0_5.proto

export enum _suki_pb_ssp_ce_IntentResponse_SpeechEventType {
  SPEECH_EVENT_UNSPECIFIED = 0,
  AUDIO_START = 1,
  AUDIO_END = 2
}

export interface IntentResponse {
  intent_result?: _suki_pb_ssp_ce_DetectIntentResult | null;
  error?: _suki_pb_ssp_ce_Status | null;
  event_type?:
    | _suki_pb_ssp_ce_IntentResponse_SpeechEventType
    | keyof typeof _suki_pb_ssp_ce_IntentResponse_SpeechEventType;
  audio_data?: Buffer | Uint8Array | string;
  processing_complete?: boolean;
  request_uuid?: string;
  version?: string;
  iusf_json?: string;
  response?: "intent_result" | "error" | "event_type" | "audio_data" | "processing_complete";
}

export interface IntentResponse__Output {
  intent_result?: _suki_pb_ssp_ce_DetectIntentResult__Output | null;
  error?: _suki_pb_ssp_ce_Status__Output | null;
  event_type?: keyof typeof _suki_pb_ssp_ce_IntentResponse_SpeechEventType;
  audio_data?: Buffer;
  processing_complete?: boolean;
  request_uuid: string;
  version: string;
  iusf_json: string;
  response: "intent_result" | "error" | "event_type" | "audio_data" | "processing_complete";
}
