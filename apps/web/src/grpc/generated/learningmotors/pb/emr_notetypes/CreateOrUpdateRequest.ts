// Original file: node_modules/protobufs/src/learningmotors/pb/emr_notetypes/emr_notetypes.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  EmrNoteType as _learningmotors_pb_emr_notetypes_EmrNoteType,
  EmrNoteType__Output as _learningmotors_pb_emr_notetypes_EmrNoteType__Output
} from "../../../learningmotors/pb/emr_notetypes/EmrNoteType";

export interface CreateOrUpdateRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  emr_note_types?: _learningmotors_pb_emr_notetypes_EmrNoteType | null;
}

export interface CreateOrUpdateRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  emr_note_types: _learningmotors_pb_emr_notetypes_EmrNoteType__Output | null;
}
