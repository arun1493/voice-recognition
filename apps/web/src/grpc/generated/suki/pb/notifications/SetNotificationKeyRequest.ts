// Original file: node_modules/protobufs/src/suki/pb/notifications/notifications.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  NotificationKeyEntry as _suki_pb_notifications_NotificationKeyEntry,
  NotificationKeyEntry__Output as _suki_pb_notifications_NotificationKeyEntry__Output
} from "../../../suki/pb/notifications/NotificationKeyEntry";

export interface SetNotificationKeyRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  entry?: _suki_pb_notifications_NotificationKeyEntry | null;
}

export interface SetNotificationKeyRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  entry: _suki_pb_notifications_NotificationKeyEntry__Output | null;
}
