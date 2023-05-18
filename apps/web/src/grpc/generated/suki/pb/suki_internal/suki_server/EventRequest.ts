// Original file: node_modules/protobufs/src/suki/pb/suki_internal/suki_server/event.proto

import type { StateMutationEvent as _suki_pb_suki_internal_suki_server_StateMutationEvent } from "../../../../suki/pb/suki_internal/suki_server/StateMutationEvent";
import type { MicNotificationEvent as _suki_pb_suki_internal_suki_server_MicNotificationEvent } from "../../../../suki/pb/suki_internal/suki_server/MicNotificationEvent";

export interface EventRequest {
  state_mutation?:
    | _suki_pb_suki_internal_suki_server_StateMutationEvent
    | keyof typeof _suki_pb_suki_internal_suki_server_StateMutationEvent;
  mic_notification?:
    | _suki_pb_suki_internal_suki_server_MicNotificationEvent
    | keyof typeof _suki_pb_suki_internal_suki_server_MicNotificationEvent;
  request?: "state_mutation" | "mic_notification";
}

export interface EventRequest__Output {
  state_mutation?: keyof typeof _suki_pb_suki_internal_suki_server_StateMutationEvent;
  mic_notification?: keyof typeof _suki_pb_suki_internal_suki_server_MicNotificationEvent;
  request: "state_mutation" | "mic_notification";
}
