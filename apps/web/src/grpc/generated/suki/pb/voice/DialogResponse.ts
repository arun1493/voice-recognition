// Original file: node_modules/protobufs/src/suki/pb/voice/ms_voice_agent.proto

import type {
  Intent as _learningmotors_pb_idl_Intent,
  Intent__Output as _learningmotors_pb_idl_Intent__Output
} from "../../../learningmotors/pb/idl/Intent";
import type {
  ActionResponse as _suki_pb_voice_ActionResponse,
  ActionResponse__Output as _suki_pb_voice_ActionResponse__Output
} from "../../../suki/pb/voice/ActionResponse";
import type {
  TransferToCursor as _suki_pb_transfer_to_cursor_TransferToCursor,
  TransferToCursor__Output as _suki_pb_transfer_to_cursor_TransferToCursor__Output
} from "../../../suki/pb/transfer_to_cursor/TransferToCursor";
import type {
  Status as _suki_pb_status_Status,
  Status__Output as _suki_pb_status_Status__Output
} from "../../../suki/pb/status/Status";

// Original file: node_modules/protobufs/src/suki/pb/voice/ms_voice_agent.proto

export enum _suki_pb_voice_DialogResponse_MaMNotification {
  SENDER_UNAVAILABLE = 0,
  SENDER_READY = 1,
  ALREADY_EXISTS = 2
}

export interface DialogResponse {
  intent?: _learningmotors_pb_idl_Intent | null;
  action_response?: _suki_pb_voice_ActionResponse | null;
  notification?:
    | _suki_pb_voice_DialogResponse_MaMNotification
    | keyof typeof _suki_pb_voice_DialogResponse_MaMNotification;
  transfer_to_cursor?: _suki_pb_transfer_to_cursor_TransferToCursor | null;
  status?: _suki_pb_status_Status | null;
  response?: "intent" | "action_response" | "notification" | "transfer_to_cursor";
}

export interface DialogResponse__Output {
  intent?: _learningmotors_pb_idl_Intent__Output | null;
  action_response?: _suki_pb_voice_ActionResponse__Output | null;
  notification?: keyof typeof _suki_pb_voice_DialogResponse_MaMNotification;
  transfer_to_cursor?: _suki_pb_transfer_to_cursor_TransferToCursor__Output | null;
  status: _suki_pb_status_Status__Output | null;
  response: "intent" | "action_response" | "notification" | "transfer_to_cursor";
}
