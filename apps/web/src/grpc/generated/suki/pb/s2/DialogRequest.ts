// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

import type {
  UIContext as _suki_pb_s2_UIContext,
  UIContext__Output as _suki_pb_s2_UIContext__Output
} from "../../../suki/pb/s2/UIContext";
import type {
  AudioInfo as _suki_pb_s2_AudioInfo,
  AudioInfo__Output as _suki_pb_s2_AudioInfo__Output
} from "../../../suki/pb/s2/AudioInfo";
import type {
  CursorPosition as _suki_pb_s2_CursorPosition,
  CursorPosition__Output as _suki_pb_s2_CursorPosition__Output
} from "../../../suki/pb/s2/CursorPosition";
import type {
  Request as _suki_pb_s2_Request,
  Request__Output as _suki_pb_s2_Request__Output
} from "../../../suki/pb/s2/Request";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type {
  SubmitCompositionRequest as _suki_pb_sms_SubmitCompositionRequest,
  SubmitCompositionRequest__Output as _suki_pb_sms_SubmitCompositionRequest__Output
} from "../../../suki/pb/sms/SubmitCompositionRequest";
import type {
  DeleteCompositionRequest as _suki_pb_s2_DeleteCompositionRequest,
  DeleteCompositionRequest__Output as _suki_pb_s2_DeleteCompositionRequest__Output
} from "../../../suki/pb/s2/DeleteCompositionRequest";
import type {
  GetCompositionOrNoteRequest as _suki_pb_s2_GetCompositionOrNoteRequest,
  GetCompositionOrNoteRequest__Output as _suki_pb_s2_GetCompositionOrNoteRequest__Output
} from "../../../suki/pb/s2/GetCompositionOrNoteRequest";

// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

export enum _suki_pb_s2_DialogRequest_Event {
  AUDIO_START = 0,
  AUDIO_END = 1,
  KEYBOARD_ON = 2,
  KEYBOARD_OFF = 3
}

export interface DialogRequest {
  event?: _suki_pb_s2_DialogRequest_Event | keyof typeof _suki_pb_s2_DialogRequest_Event;
  ui_context?: _suki_pb_s2_UIContext | null;
  audio_info?: _suki_pb_s2_AudioInfo | null;
  audio_data?: Buffer | Uint8Array | string;
  cursor_position?: _suki_pb_s2_CursorPosition | null;
  user_request?: _suki_pb_s2_Request | null;
  jwt_token?: string;
  request_time?: _google_protobuf_Timestamp | null;
  submit_composition_request?: _suki_pb_sms_SubmitCompositionRequest | null;
  delete_composition_request?: _suki_pb_s2_DeleteCompositionRequest | null;
  get_composition_or_note_request?: _suki_pb_s2_GetCompositionOrNoteRequest | null;
  request?:
    | "event"
    | "ui_context"
    | "audio_info"
    | "audio_data"
    | "cursor_position"
    | "user_request"
    | "jwt_token"
    | "submit_composition_request"
    | "delete_composition_request"
    | "get_composition_or_note_request";
}

export interface DialogRequest__Output {
  event?: keyof typeof _suki_pb_s2_DialogRequest_Event;
  ui_context?: _suki_pb_s2_UIContext__Output | null;
  audio_info?: _suki_pb_s2_AudioInfo__Output | null;
  audio_data?: Buffer;
  cursor_position?: _suki_pb_s2_CursorPosition__Output | null;
  user_request?: _suki_pb_s2_Request__Output | null;
  jwt_token?: string;
  request_time: _google_protobuf_Timestamp__Output | null;
  submit_composition_request?: _suki_pb_sms_SubmitCompositionRequest__Output | null;
  delete_composition_request?: _suki_pb_s2_DeleteCompositionRequest__Output | null;
  get_composition_or_note_request?: _suki_pb_s2_GetCompositionOrNoteRequest__Output | null;
  request:
    | "event"
    | "ui_context"
    | "audio_info"
    | "audio_data"
    | "cursor_position"
    | "user_request"
    | "jwt_token"
    | "submit_composition_request"
    | "delete_composition_request"
    | "get_composition_or_note_request";
}
