// Original file: node_modules/protobufs/src/learningmotors/pb/emrnotes/emrnotes.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface RefreshEMRNotesRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  suki_user_id?: string;
  emr_user_id?: string;
  suki_patient_id?: string;
  emr_patient_id?: string;
  status?: string;
  from_date?: _google_protobuf_Timestamp | null;
  to_date?: _google_protobuf_Timestamp | null;
  max_appointments?: number;
  suki_composition_id?: string;
  suki_note_id?: string;
}

export interface RefreshEMRNotesRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  suki_user_id: string;
  emr_user_id: string;
  suki_patient_id: string;
  emr_patient_id: string;
  status: string;
  from_date: _google_protobuf_Timestamp__Output | null;
  to_date: _google_protobuf_Timestamp__Output | null;
  max_appointments: number;
  suki_composition_id: string;
  suki_note_id: string;
}
