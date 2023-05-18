// Original file: node_modules/protobufs/src/suki/pb/notifications/notifications.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  Empty as _google_protobuf_Empty,
  Empty__Output as _google_protobuf_Empty__Output
} from "../../../google/protobuf/Empty";
import type {
  NotificationHistoryRequest as _suki_pb_notifications_NotificationHistoryRequest,
  NotificationHistoryRequest__Output as _suki_pb_notifications_NotificationHistoryRequest__Output
} from "../../../suki/pb/notifications/NotificationHistoryRequest";
import type {
  NotificationHistoryResponse as _suki_pb_notifications_NotificationHistoryResponse,
  NotificationHistoryResponse__Output as _suki_pb_notifications_NotificationHistoryResponse__Output
} from "../../../suki/pb/notifications/NotificationHistoryResponse";
import type {
  SetNotificationKeyRequest as _suki_pb_notifications_SetNotificationKeyRequest,
  SetNotificationKeyRequest__Output as _suki_pb_notifications_SetNotificationKeyRequest__Output
} from "../../../suki/pb/notifications/SetNotificationKeyRequest";
import type {
  SetNotificationKeyResponse as _suki_pb_notifications_SetNotificationKeyResponse,
  SetNotificationKeyResponse__Output as _suki_pb_notifications_SetNotificationKeyResponse__Output
} from "../../../suki/pb/notifications/SetNotificationKeyResponse";
import type {
  TriggerNotificationRequest as _suki_pb_notifications_TriggerNotificationRequest,
  TriggerNotificationRequest__Output as _suki_pb_notifications_TriggerNotificationRequest__Output
} from "../../../suki/pb/notifications/TriggerNotificationRequest";

export interface MsNotificationsClient extends grpc.Client {
  GetNotificationHistory(
    argument: _suki_pb_notifications_NotificationHistoryRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_notifications_NotificationHistoryResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNotificationHistory(
    argument: _suki_pb_notifications_NotificationHistoryRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_notifications_NotificationHistoryResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNotificationHistory(
    argument: _suki_pb_notifications_NotificationHistoryRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_notifications_NotificationHistoryResponse__Output>
  ): grpc.ClientUnaryCall;
  GetNotificationHistory(
    argument: _suki_pb_notifications_NotificationHistoryRequest,
    callback: grpc.requestCallback<_suki_pb_notifications_NotificationHistoryResponse__Output>
  ): grpc.ClientUnaryCall;
  getNotificationHistory(
    argument: _suki_pb_notifications_NotificationHistoryRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_notifications_NotificationHistoryResponse__Output>
  ): grpc.ClientUnaryCall;
  getNotificationHistory(
    argument: _suki_pb_notifications_NotificationHistoryRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_notifications_NotificationHistoryResponse__Output>
  ): grpc.ClientUnaryCall;
  getNotificationHistory(
    argument: _suki_pb_notifications_NotificationHistoryRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_notifications_NotificationHistoryResponse__Output>
  ): grpc.ClientUnaryCall;
  getNotificationHistory(
    argument: _suki_pb_notifications_NotificationHistoryRequest,
    callback: grpc.requestCallback<_suki_pb_notifications_NotificationHistoryResponse__Output>
  ): grpc.ClientUnaryCall;

  SetNotificationKey(
    argument: _suki_pb_notifications_SetNotificationKeyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_notifications_SetNotificationKeyResponse__Output>
  ): grpc.ClientUnaryCall;
  SetNotificationKey(
    argument: _suki_pb_notifications_SetNotificationKeyRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_notifications_SetNotificationKeyResponse__Output>
  ): grpc.ClientUnaryCall;
  SetNotificationKey(
    argument: _suki_pb_notifications_SetNotificationKeyRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_notifications_SetNotificationKeyResponse__Output>
  ): grpc.ClientUnaryCall;
  SetNotificationKey(
    argument: _suki_pb_notifications_SetNotificationKeyRequest,
    callback: grpc.requestCallback<_suki_pb_notifications_SetNotificationKeyResponse__Output>
  ): grpc.ClientUnaryCall;
  setNotificationKey(
    argument: _suki_pb_notifications_SetNotificationKeyRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_notifications_SetNotificationKeyResponse__Output>
  ): grpc.ClientUnaryCall;
  setNotificationKey(
    argument: _suki_pb_notifications_SetNotificationKeyRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_suki_pb_notifications_SetNotificationKeyResponse__Output>
  ): grpc.ClientUnaryCall;
  setNotificationKey(
    argument: _suki_pb_notifications_SetNotificationKeyRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_suki_pb_notifications_SetNotificationKeyResponse__Output>
  ): grpc.ClientUnaryCall;
  setNotificationKey(
    argument: _suki_pb_notifications_SetNotificationKeyRequest,
    callback: grpc.requestCallback<_suki_pb_notifications_SetNotificationKeyResponse__Output>
  ): grpc.ClientUnaryCall;

  TriggerNotification(
    argument: _suki_pb_notifications_TriggerNotificationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  TriggerNotification(
    argument: _suki_pb_notifications_TriggerNotificationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  TriggerNotification(
    argument: _suki_pb_notifications_TriggerNotificationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  TriggerNotification(
    argument: _suki_pb_notifications_TriggerNotificationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  triggerNotification(
    argument: _suki_pb_notifications_TriggerNotificationRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  triggerNotification(
    argument: _suki_pb_notifications_TriggerNotificationRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  triggerNotification(
    argument: _suki_pb_notifications_TriggerNotificationRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
  triggerNotification(
    argument: _suki_pb_notifications_TriggerNotificationRequest,
    callback: grpc.requestCallback<_google_protobuf_Empty__Output>
  ): grpc.ClientUnaryCall;
}

export interface MsNotificationsHandlers extends grpc.UntypedServiceImplementation {
  GetNotificationHistory: grpc.handleUnaryCall<
    _suki_pb_notifications_NotificationHistoryRequest__Output,
    _suki_pb_notifications_NotificationHistoryResponse
  >;

  SetNotificationKey: grpc.handleUnaryCall<
    _suki_pb_notifications_SetNotificationKeyRequest__Output,
    _suki_pb_notifications_SetNotificationKeyResponse
  >;

  TriggerNotification: grpc.handleUnaryCall<
    _suki_pb_notifications_TriggerNotificationRequest__Output,
    _google_protobuf_Empty
  >;
}

export interface MsNotificationsDefinition extends grpc.ServiceDefinition {
  GetNotificationHistory: MethodDefinition<
    _suki_pb_notifications_NotificationHistoryRequest,
    _suki_pb_notifications_NotificationHistoryResponse,
    _suki_pb_notifications_NotificationHistoryRequest__Output,
    _suki_pb_notifications_NotificationHistoryResponse__Output
  >;
  SetNotificationKey: MethodDefinition<
    _suki_pb_notifications_SetNotificationKeyRequest,
    _suki_pb_notifications_SetNotificationKeyResponse,
    _suki_pb_notifications_SetNotificationKeyRequest__Output,
    _suki_pb_notifications_SetNotificationKeyResponse__Output
  >;
  TriggerNotification: MethodDefinition<
    _suki_pb_notifications_TriggerNotificationRequest,
    _google_protobuf_Empty,
    _suki_pb_notifications_TriggerNotificationRequest__Output,
    _google_protobuf_Empty__Output
  >;
}
