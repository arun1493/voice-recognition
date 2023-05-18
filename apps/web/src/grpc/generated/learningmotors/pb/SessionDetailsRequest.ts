// Original file: node_modules/protobufs/src/learningmotors/pb/lighthouse.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../learningmotors/pb/scope/Scope";
import type {
  PageRequest as _learningmotors_pb_PageRequest,
  PageRequest__Output as _learningmotors_pb_PageRequest__Output
} from "../../learningmotors/pb/PageRequest";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../google/protobuf/Timestamp";
import type { _learningmotors_pb_idl_Intent_Type } from "../../learningmotors/pb/idl/Intent";

export interface SessionDetailsRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  page_req?: _learningmotors_pb_PageRequest | null;
  session_id?: string;
  note_id?: string;
  section_id?: string;
  user_id?: string;
  starts_at?: _google_protobuf_Timestamp | null;
  ends_at?: _google_protobuf_Timestamp | null;
  intent_type?: _learningmotors_pb_idl_Intent_Type | keyof typeof _learningmotors_pb_idl_Intent_Type;
  is_finalized?: boolean;
  retrieve_events?: boolean;
  retrieve_metrics?: boolean;
}

export interface SessionDetailsRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  page_req: _learningmotors_pb_PageRequest__Output | null;
  session_id: string;
  note_id: string;
  section_id: string;
  user_id: string;
  starts_at: _google_protobuf_Timestamp__Output | null;
  ends_at: _google_protobuf_Timestamp__Output | null;
  intent_type: keyof typeof _learningmotors_pb_idl_Intent_Type;
  is_finalized: boolean;
  retrieve_events: boolean;
  retrieve_metrics: boolean;
}
