import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  MsNotificationsClient as _suki_pb_notifications_MsNotificationsClient,
  MsNotificationsDefinition as _suki_pb_notifications_MsNotificationsDefinition
} from "./suki/pb/notifications/MsNotifications";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition;
      Timestamp: MessageTypeDefinition;
    };
  };
  learningmotors: {
    pb: {
      scope: {
        Scope: MessageTypeDefinition;
      };
    };
  };
  suki: {
    pb: {
      notifications: {
        MsNotifications: SubtypeConstructor<typeof grpc.Client, _suki_pb_notifications_MsNotificationsClient> & {
          service: _suki_pb_notifications_MsNotificationsDefinition;
        };
        NotificationContent: MessageTypeDefinition;
        NotificationEvent: MessageTypeDefinition;
        NotificationHistoryRequest: MessageTypeDefinition;
        NotificationHistoryResponse: MessageTypeDefinition;
        NotificationKeyEntry: MessageTypeDefinition;
        SetNotificationKeyRequest: MessageTypeDefinition;
        SetNotificationKeyResponse: MessageTypeDefinition;
        TriggerNotificationRequest: MessageTypeDefinition;
      };
    };
  };
}
