// Original file: node_modules/protobufs/src/suki/pb/ssp/ce/ssp_commands_engine_v0_5.proto

import type {
  ClientContext as _suki_pb_ssp_ce_ClientContext,
  ClientContext__Output as _suki_pb_ssp_ce_ClientContext__Output
} from "../../../../suki/pb/ssp/ce/ClientContext";
import type {
  IntentContext as _suki_pb_ssp_ce_IntentContext,
  IntentContext__Output as _suki_pb_ssp_ce_IntentContext__Output
} from "../../../../suki/pb/ssp/ce/IntentContext";
import type {
  AudioInfo as _suki_pb_ssp_ce_AudioInfo,
  AudioInfo__Output as _suki_pb_ssp_ce_AudioInfo__Output
} from "../../../../suki/pb/ssp/ce/AudioInfo";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../../google/protobuf/Timestamp";

// Original file: node_modules/protobufs/src/suki/pb/ssp/ce/ssp_commands_engine_v0_5.proto

export enum _suki_pb_ssp_ce_IntentRequest_Event {
  COMMAND_START = 0,
  COMMAND_END = 1,
  AUDIO_START = 2,
  AUDIO_END = 3
}

export interface IntentRequest {
  client_context?: _suki_pb_ssp_ce_ClientContext | null;
  intent_context?: _suki_pb_ssp_ce_IntentContext | null;
  event?: _suki_pb_ssp_ce_IntentRequest_Event | keyof typeof _suki_pb_ssp_ce_IntentRequest_Event;
  audio_info?: _suki_pb_ssp_ce_AudioInfo | null;
  audio_data?: Buffer | Uint8Array | string;
  input_intent_text?: string;
  request_time?: _google_protobuf_Timestamp | null;
  request?: "client_context" | "intent_context" | "event" | "audio_info" | "audio_data" | "input_intent_text";
}

export interface IntentRequest__Output {
  client_context?: _suki_pb_ssp_ce_ClientContext__Output | null;
  intent_context?: _suki_pb_ssp_ce_IntentContext__Output | null;
  event?: keyof typeof _suki_pb_ssp_ce_IntentRequest_Event;
  audio_info?: _suki_pb_ssp_ce_AudioInfo__Output | null;
  audio_data?: Buffer;
  input_intent_text?: string;
  request_time: _google_protobuf_Timestamp__Output | null;
  request: "client_context" | "intent_context" | "event" | "audio_info" | "audio_data" | "input_intent_text";
}
