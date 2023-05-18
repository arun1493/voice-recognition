// Original file: node_modules/protobufs/src/learningmotors/pb/closeencounters/closeencounters.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface TriggerRefreshRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  patient_id?: string;
  encounter_id?: string;
  starts_at?: _google_protobuf_Timestamp | null;
  ends_at?: _google_protobuf_Timestamp | null;
}

export interface TriggerRefreshRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  patient_id: string;
  encounter_id: string;
  starts_at: _google_protobuf_Timestamp__Output | null;
  ends_at: _google_protobuf_Timestamp__Output | null;
}
