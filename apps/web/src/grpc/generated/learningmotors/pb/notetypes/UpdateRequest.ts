// Original file: node_modules/protobufs/src/learningmotors/pb/notetypes/notetypes.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  NoteType as _learningmotors_pb_notetypes_NoteType,
  NoteType__Output as _learningmotors_pb_notetypes_NoteType__Output
} from "../../../learningmotors/pb/notetypes/NoteType";

export interface UpdateRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  note_type?: _learningmotors_pb_notetypes_NoteType | null;
}

export interface UpdateRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  note_type: _learningmotors_pb_notetypes_NoteType__Output | null;
}
