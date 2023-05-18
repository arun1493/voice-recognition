// Original file: node_modules/protobufs/src/suki/pb/notifications/notifications.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  NotificationContent as _suki_pb_notifications_NotificationContent,
  NotificationContent__Output as _suki_pb_notifications_NotificationContent__Output
} from "../../../suki/pb/notifications/NotificationContent";

export interface TriggerNotificationRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  user_id?: string;
  content?: _suki_pb_notifications_NotificationContent | null;
}

export interface TriggerNotificationRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  user_id: string;
  content: _suki_pb_notifications_NotificationContent__Output | null;
}
