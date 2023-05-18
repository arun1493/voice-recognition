// Original file: node_modules/protobufs/src/suki/pb/voice/mic.proto

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

// Original file: node_modules/protobufs/src/suki/pb/voice/mic.proto

export enum _suki_pb_voice_MicRequest_Event {
  SENDER_READY = 0,
  PAY_ATTENTION_START = 1,
  PAY_ATTENTION_END = 2,
  PAY_ATTENTION_PAUSE = 3,
  PAY_ATTENTION_RESUME = 4,
  PAY_ATTENTION_CANCEL = 5
}

export interface MicRequest {
  request_timestamp?: _google_protobuf_Timestamp | null;
  event?: _suki_pb_voice_MicRequest_Event | keyof typeof _suki_pb_voice_MicRequest_Event;
  audio_encoding?: _learningmotors_pb_AudioEncoding | null;
  audio_data?: Buffer | Uint8Array | string;
  transfer_to_cursor?: _suki_pb_transfer_to_cursor_TransferToCursor | null;
  request?: "event" | "audio_encoding" | "audio_data" | "transfer_to_cursor";
}

export interface MicRequest__Output {
  request_timestamp: _google_protobuf_Timestamp__Output | null;
  event?: keyof typeof _suki_pb_voice_MicRequest_Event;
  audio_encoding?: _learningmotors_pb_AudioEncoding__Output | null;
  audio_data?: Buffer;
  transfer_to_cursor?: _suki_pb_transfer_to_cursor_TransferToCursor__Output | null;
  request: "event" | "audio_encoding" | "audio_data" | "transfer_to_cursor";
}
