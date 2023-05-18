// Original file: node_modules/protobufs/src/suki/pb/notifications/notifications.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface NotificationHistoryRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  user_id?: string;
  startsAtRangeBeginning?: _google_protobuf_Timestamp | null;
  startsAtRangeEnd?: _google_protobuf_Timestamp | null;
}

export interface NotificationHistoryRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  user_id: string;
  startsAtRangeBeginning: _google_protobuf_Timestamp__Output | null;
  startsAtRangeEnd: _google_protobuf_Timestamp__Output | null;
}
