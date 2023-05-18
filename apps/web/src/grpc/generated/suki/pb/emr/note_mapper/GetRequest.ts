// Original file: node_modules/protobufs/src/suki/pb/emr/note_mapper/ms_emr_note_mapper.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../../learningmotors/pb/scope/Scope";

export interface GetRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  patient_id?: string;
  emr_user_id?: string;
  emr_note_id?: string;
  composition_id?: string;
  emr_note_status?: string;
}

export interface GetRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  patient_id: string;
  emr_user_id: string;
  emr_note_id: string;
  composition_id: string;
  emr_note_status: string;
}
