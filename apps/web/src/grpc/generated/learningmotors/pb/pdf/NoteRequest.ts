// Original file: node_modules/protobufs/src/learningmotors/pb/pdf/pdf.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Composition as _learningmotors_pb_composer_Composition,
  Composition__Output as _learningmotors_pb_composer_Composition__Output
} from "../../../learningmotors/pb/composer/Composition";

export interface NoteRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  composition?: _learningmotors_pb_composer_Composition | null;
  composition_id?: string;
  note_id?: string;
  unsigned_uri?: boolean;
  note?: "composition" | "composition_id" | "note_id";
}

export interface NoteRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  composition?: _learningmotors_pb_composer_Composition__Output | null;
  composition_id?: string;
  note_id?: string;
  unsigned_uri: boolean;
  note: "composition" | "composition_id" | "note_id";
}
