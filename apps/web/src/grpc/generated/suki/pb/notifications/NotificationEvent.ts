// Original file: node_modules/protobufs/src/suki/pb/notifications/notifications.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type {
  NotificationContent as _suki_pb_notifications_NotificationContent,
  NotificationContent__Output as _suki_pb_notifications_NotificationContent__Output
} from "../../../suki/pb/notifications/NotificationContent";
import type {
  NotificationKeyEntry as _suki_pb_notifications_NotificationKeyEntry,
  NotificationKeyEntry__Output as _suki_pb_notifications_NotificationKeyEntry__Output
} from "../../../suki/pb/notifications/NotificationKeyEntry";

export interface NotificationEvent {
  sent_at?: _google_protobuf_Timestamp | null;
  content?: _suki_pb_notifications_NotificationContent | null;
  notification_key_entry?: _suki_pb_notifications_NotificationKeyEntry | null;
}

export interface NotificationEvent__Output {
  sent_at: _google_protobuf_Timestamp__Output | null;
  content: _suki_pb_notifications_NotificationContent__Output | null;
  notification_key_entry: _suki_pb_notifications_NotificationKeyEntry__Output | null;
}
