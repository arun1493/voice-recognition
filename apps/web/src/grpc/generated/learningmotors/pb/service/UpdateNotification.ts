// Original file: node_modules/protobufs/src/learningmotors/pb/service/update_notification.proto

import type { ServiceName as _learningmotors_pb_service_ServiceName } from "../../../learningmotors/pb/service/ServiceName";
import type {
  Any as _google_protobuf_Any,
  Any__Output as _google_protobuf_Any__Output
} from "../../../google/protobuf/Any";

// Original file: node_modules/protobufs/src/learningmotors/pb/service/update_notification.proto

export enum _learningmotors_pb_service_UpdateNotification_Type {
  ADDED = 0,
  DELETED = 1,
  UPDATED = 2
}

export interface UpdateNotification {
  service_name?: _learningmotors_pb_service_ServiceName | keyof typeof _learningmotors_pb_service_ServiceName;
  organization_id?: string;
  user_id?: string;
  ids?: string[];
  type?:
    | _learningmotors_pb_service_UpdateNotification_Type
    | keyof typeof _learningmotors_pb_service_UpdateNotification_Type;
  details?: _google_protobuf_Any | null;
}

export interface UpdateNotification__Output {
  service_name: keyof typeof _learningmotors_pb_service_ServiceName;
  organization_id: string;
  user_id: string;
  ids: string[];
  type: keyof typeof _learningmotors_pb_service_UpdateNotification_Type;
  details: _google_protobuf_Any__Output | null;
}
