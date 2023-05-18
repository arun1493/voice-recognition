// Original file: node_modules/protobufs/src/suki/pb/suki_internal/suki_server/server_request.proto

import type {
  SpeechRequest as _suki_pb_suki_internal_suki_server_SpeechRequest,
  SpeechRequest__Output as _suki_pb_suki_internal_suki_server_SpeechRequest__Output
} from "../../../../suki/pb/suki_internal/suki_server/SpeechRequest";
import type {
  EventRequest as _suki_pb_suki_internal_suki_server_EventRequest,
  EventRequest__Output as _suki_pb_suki_internal_suki_server_EventRequest__Output
} from "../../../../suki/pb/suki_internal/suki_server/EventRequest";
import type {
  TransferToCursor as _suki_pb_transfer_to_cursor_TransferToCursor,
  TransferToCursor__Output as _suki_pb_transfer_to_cursor_TransferToCursor__Output
} from "../../../../suki/pb/transfer_to_cursor/TransferToCursor";

export interface ServerRequest {
  speech?: _suki_pb_suki_internal_suki_server_SpeechRequest | null;
  event?: _suki_pb_suki_internal_suki_server_EventRequest | null;
  transfer_to_cursor?: _suki_pb_transfer_to_cursor_TransferToCursor | null;
  request?: "speech" | "event" | "transfer_to_cursor";
}

export interface ServerRequest__Output {
  speech?: _suki_pb_suki_internal_suki_server_SpeechRequest__Output | null;
  event?: _suki_pb_suki_internal_suki_server_EventRequest__Output | null;
  transfer_to_cursor?: _suki_pb_transfer_to_cursor_TransferToCursor__Output | null;
  request: "speech" | "event" | "transfer_to_cursor";
}
