// Original file: node_modules/protobufs/src/suki/pb/ml/pubsub.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type { Long } from "@grpc/proto-loader";

export interface VerbatimTranscripts {
  scope?: _learningmotors_pb_scope_Scope | null;
  composition_id?: string;
  user_id?: string;
  section_id?: string;
  session_id?: string;
  original_audio_uri?: string;
  copied_audio_uri?: string;
  audio_length?: number | string | Long;
  transcript_uri?: string;
  metadata_uri?: string;
  contains_phi?: boolean;
  cannot_transcribe?: boolean;
  created_at?: _google_protobuf_Timestamp | null;
  updated_at?: _google_protobuf_Timestamp | null;
  deleted_at?: _google_protobuf_Timestamp | null;
}

export interface VerbatimTranscripts__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  composition_id: string;
  user_id: string;
  section_id: string;
  session_id: string;
  original_audio_uri: string;
  copied_audio_uri: string;
  audio_length: string;
  transcript_uri: string;
  metadata_uri: string;
  contains_phi: boolean;
  cannot_transcribe: boolean;
  created_at: _google_protobuf_Timestamp__Output | null;
  updated_at: _google_protobuf_Timestamp__Output | null;
  deleted_at: _google_protobuf_Timestamp__Output | null;
}
