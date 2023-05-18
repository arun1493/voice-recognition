// Original file: node_modules/protobufs/src/suki/pb/suki_internal/suki_server/server_response.proto

import type {
  Intent as _learningmotors_pb_idl_Intent,
  Intent__Output as _learningmotors_pb_idl_Intent__Output
} from "../../../../learningmotors/pb/idl/Intent";
import type { StateMutationResponse as _suki_pb_suki_internal_suki_server_StateMutationResponse } from "../../../../suki/pb/suki_internal/suki_server/StateMutationResponse";
import type {
  MicNotificationResponse as _suki_pb_suki_internal_suki_server_MicNotificationResponse,
  MicNotificationResponse__Output as _suki_pb_suki_internal_suki_server_MicNotificationResponse__Output
} from "../../../../suki/pb/suki_internal/suki_server/MicNotificationResponse";
import type {
  TransferToCursor as _suki_pb_transfer_to_cursor_TransferToCursor,
  TransferToCursor__Output as _suki_pb_transfer_to_cursor_TransferToCursor__Output
} from "../../../../suki/pb/transfer_to_cursor/TransferToCursor";

export interface ServerResponse {
  intent?: _learningmotors_pb_idl_Intent | null;
  state_mutation?:
    | _suki_pb_suki_internal_suki_server_StateMutationResponse
    | keyof typeof _suki_pb_suki_internal_suki_server_StateMutationResponse;
  mic_notification?: _suki_pb_suki_internal_suki_server_MicNotificationResponse | null;
  transfer_to_cursor?: _suki_pb_transfer_to_cursor_TransferToCursor | null;
  response?: "intent" | "state_mutation" | "mic_notification" | "transfer_to_cursor";
}

export interface ServerResponse__Output {
  intent?: _learningmotors_pb_idl_Intent__Output | null;
  state_mutation?: keyof typeof _suki_pb_suki_internal_suki_server_StateMutationResponse;
  mic_notification?: _suki_pb_suki_internal_suki_server_MicNotificationResponse__Output | null;
  transfer_to_cursor?: _suki_pb_transfer_to_cursor_TransferToCursor__Output | null;
  response: "intent" | "state_mutation" | "mic_notification" | "transfer_to_cursor";
}
