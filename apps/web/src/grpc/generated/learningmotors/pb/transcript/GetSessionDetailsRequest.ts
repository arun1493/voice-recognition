// Original file: node_modules/protobufs/src/learningmotors/pb/transcript/transcript.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  PageRequest as _learningmotors_pb_PageRequest,
  PageRequest__Output as _learningmotors_pb_PageRequest__Output
} from "../../../learningmotors/pb/PageRequest";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type { _learningmotors_pb_idl_Intent_Type } from "../../../learningmotors/pb/idl/Intent";

export interface GetSessionDetailsRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  page_req?: _learningmotors_pb_PageRequest | null;
  session_id?: string;
  composition_id?: string;
  section_id?: string;
  user_id?: string;
  starts_at?: _google_protobuf_Timestamp | null;
  ends_at?: _google_protobuf_Timestamp | null;
  signed_audio_uri?: boolean;
  add_audio_uri?: boolean;
  add_transcript_uris?: boolean;
  add_intent_uris?: boolean;
  is_script_change?: boolean;
  intent_type?: _learningmotors_pb_idl_Intent_Type | keyof typeof _learningmotors_pb_idl_Intent_Type;
  add_transcript_content?: boolean;
  is_finalized?: boolean;
  retrieve_metrics?: boolean;
  concat_section_audio?: boolean;
}

export interface GetSessionDetailsRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  page_req: _learningmotors_pb_PageRequest__Output | null;
  session_id: string;
  composition_id: string;
  section_id: string;
  user_id: string;
  starts_at: _google_protobuf_Timestamp__Output | null;
  ends_at: _google_protobuf_Timestamp__Output | null;
  signed_audio_uri: boolean;
  add_audio_uri: boolean;
  add_transcript_uris: boolean;
  add_intent_uris: boolean;
  is_script_change: boolean;
  intent_type: keyof typeof _learningmotors_pb_idl_Intent_Type;
  add_transcript_content: boolean;
  is_finalized: boolean;
  retrieve_metrics: boolean;
  concat_section_audio: boolean;
}
