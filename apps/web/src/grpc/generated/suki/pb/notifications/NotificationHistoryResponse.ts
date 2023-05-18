// Original file: node_modules/protobufs/src/suki/pb/notifications/notifications.proto

import type {
  NotificationEvent as _suki_pb_notifications_NotificationEvent,
  NotificationEvent__Output as _suki_pb_notifications_NotificationEvent__Output
} from "../../../suki/pb/notifications/NotificationEvent";

export interface NotificationHistoryResponse {
  history?: _suki_pb_notifications_NotificationEvent[];
}

export interface NotificationHistoryResponse__Output {
  history: _suki_pb_notifications_NotificationEvent__Output[];
}
