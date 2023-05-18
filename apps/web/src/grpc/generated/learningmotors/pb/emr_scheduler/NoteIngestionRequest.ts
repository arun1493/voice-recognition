// Original file: node_modules/protobufs/src/learningmotors/pb/emr_scheduler/emr_scheduler.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface NoteIngestionRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  suki_patient_id?: string;
  user_id?: string;
}

export interface NoteIngestionRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  suki_patient_id: string;
  user_id: string;
}
