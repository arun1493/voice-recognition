// Original file: node_modules/protobufs/src/suki/pb/voice/mic.proto

import type {
  Intent as _learningmotors_pb_idl_Intent,
  Intent__Output as _learningmotors_pb_idl_Intent__Output
} from "../../../learningmotors/pb/idl/Intent";

// Original file: node_modules/protobufs/src/suki/pb/voice/mic.proto

export enum _suki_pb_voice_MicResponse_Notification {
  RECEIVER_UNAVAILABLE = 0,
  RECEIVER_READY = 1,
  TERMINATED_DUE_TO_NEW_CONNECTION = 2,
  NOTE_TRANSFERRED = 3
}

export interface MicResponse {
  notification?: _suki_pb_voice_MicResponse_Notification | keyof typeof _suki_pb_voice_MicResponse_Notification;
  intent?: _learningmotors_pb_idl_Intent | null;
  response?: "notification" | "intent";
}

export interface MicResponse__Output {
  notification?: keyof typeof _suki_pb_voice_MicResponse_Notification;
  intent?: _learningmotors_pb_idl_Intent__Output | null;
  response: "notification" | "intent";
}
