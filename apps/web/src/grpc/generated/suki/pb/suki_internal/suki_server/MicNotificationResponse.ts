// Original file: node_modules/protobufs/src/suki/pb/suki_internal/suki_server/server_response.proto

import type { NotificationForSender as _suki_pb_suki_internal_suki_server_NotificationForSender } from "../../../../suki/pb/suki_internal/suki_server/NotificationForSender";
import type { NotificationForReceiver as _suki_pb_suki_internal_suki_server_NotificationForReceiver } from "../../../../suki/pb/suki_internal/suki_server/NotificationForReceiver";

export interface MicNotificationResponse {
  notification_sender?:
    | _suki_pb_suki_internal_suki_server_NotificationForSender
    | keyof typeof _suki_pb_suki_internal_suki_server_NotificationForSender;
  notification_receiver?:
    | _suki_pb_suki_internal_suki_server_NotificationForReceiver
    | keyof typeof _suki_pb_suki_internal_suki_server_NotificationForReceiver;
  response?: "notification_sender" | "notification_receiver";
}

export interface MicNotificationResponse__Output {
  notification_sender?: keyof typeof _suki_pb_suki_internal_suki_server_NotificationForSender;
  notification_receiver?: keyof typeof _suki_pb_suki_internal_suki_server_NotificationForReceiver;
  response: "notification_sender" | "notification_receiver";
}
