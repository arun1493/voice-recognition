// Original file: node_modules/protobufs/src/suki/pb/voice/ms_voice_agent.proto

import type {
  ActionRequest as _suki_pb_voice_ActionRequest,
  ActionRequest__Output as _suki_pb_voice_ActionRequest__Output
} from "../../../suki/pb/voice/ActionRequest";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type {
  AudioEncoding as _learningmotors_pb_AudioEncoding,
  AudioEncoding__Output as _learningmotors_pb_AudioEncoding__Output
} from "../../../learningmotors/pb/AudioEncoding";
import type {
  TransferToCursor as _suki_pb_transfer_to_cursor_TransferToCursor,
  TransferToCursor__Output as _suki_pb_transfer_to_cursor_TransferToCursor__Output
} from "../../../suki/pb/transfer_to_cursor/TransferToCursor";

// Original file: node_modules/protobufs/src/suki/pb/voice/ms_voice_agent.proto

export enum _suki_pb_voice_DialogRequest_Event {
  UNKNOWN_EVENT = 0,
  AUDIO_START = 1,
  AUDIO_END = 2
}

export interface DialogRequest {
  action_request?: _suki_pb_voice_ActionRequest | null;
  request_timestamp?: _google_protobuf_Timestamp | null;
  audio_encoding?: _learningmotors_pb_AudioEncoding | null;
  audio_data?: Buffer | Uint8Array | string;
  packet_id?: number;
  transfer_to_cursor?: _suki_pb_transfer_to_cursor_TransferToCursor | null;
  event?: _suki_pb_voice_DialogRequest_Event | keyof typeof _suki_pb_voice_DialogRequest_Event;
  request?: "action_request" | "audio_encoding" | "audio_data" | "transfer_to_cursor" | "event";
}

export interface DialogRequest__Output {
  action_request?: _suki_pb_voice_ActionRequest__Output | null;
  request_timestamp: _google_protobuf_Timestamp__Output | null;
  audio_encoding?: _learningmotors_pb_AudioEncoding__Output | null;
  audio_data?: Buffer;
  packet_id: number;
  transfer_to_cursor?: _suki_pb_transfer_to_cursor_TransferToCursor__Output | null;
  event?: keyof typeof _suki_pb_voice_DialogRequest_Event;
  request: "action_request" | "audio_encoding" | "audio_data" | "transfer_to_cursor" | "event";
}
