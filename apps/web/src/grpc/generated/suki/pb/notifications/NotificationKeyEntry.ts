// Original file: node_modules/protobufs/src/suki/pb/notifications/notifications.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

// Original file: node_modules/protobufs/src/suki/pb/notifications/notifications.proto

export enum _suki_pb_notifications_NotificationKeyEntry_DeviceType {
  UNKNOWN = 0,
  IOS_MOBILE = 1,
  IOS_TABLET = 2,
  ANDROID_MOBILE = 3,
  ANDROID_TABLET = 4,
  CHROME = 5
}

export interface NotificationKeyEntry {
  user_id?: string;
  device_id?: string;
  notification_key?: string;
  device_type?:
    | _suki_pb_notifications_NotificationKeyEntry_DeviceType
    | keyof typeof _suki_pb_notifications_NotificationKeyEntry_DeviceType;
  device_info?: string;
  public_token?: string;
  created_at?: _google_protobuf_Timestamp | null;
  updated_at?: _google_protobuf_Timestamp | null;
  deleted_at?: _google_protobuf_Timestamp | null;
}

export interface NotificationKeyEntry__Output {
  user_id: string;
  device_id: string;
  notification_key: string;
  device_type: keyof typeof _suki_pb_notifications_NotificationKeyEntry_DeviceType;
  device_info: string;
  public_token: string;
  created_at: _google_protobuf_Timestamp__Output | null;
  updated_at: _google_protobuf_Timestamp__Output | null;
  deleted_at: _google_protobuf_Timestamp__Output | null;
}
