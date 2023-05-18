// Original file: node_modules/protobufs/src/learningmotors/pb/emr_scheduler/emr_scheduler.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface RefreshAppointmentsRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  from_date?: _google_protobuf_Timestamp | null;
  to_date?: _google_protobuf_Timestamp | null;
  user_id?: string;
}

export interface RefreshAppointmentsRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  from_date: _google_protobuf_Timestamp__Output | null;
  to_date: _google_protobuf_Timestamp__Output | null;
  user_id: string;
}
