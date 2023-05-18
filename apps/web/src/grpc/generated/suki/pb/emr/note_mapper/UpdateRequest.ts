// Original file: node_modules/protobufs/src/suki/pb/emr/note_mapper/ms_emr_note_mapper.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../../learningmotors/pb/scope/Scope";
import type {
  Mapping as _suki_pb_emr_note_mapper_Mapping,
  Mapping__Output as _suki_pb_emr_note_mapper_Mapping__Output
} from "../../../../suki/pb/emr/note_mapper/Mapping";

export interface UpdateRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  mapping?: _suki_pb_emr_note_mapper_Mapping | null;
}

export interface UpdateRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  mapping: _suki_pb_emr_note_mapper_Mapping__Output | null;
}
