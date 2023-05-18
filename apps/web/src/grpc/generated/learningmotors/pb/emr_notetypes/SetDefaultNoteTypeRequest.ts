// Original file: node_modules/protobufs/src/learningmotors/pb/emr_notetypes/emr_notetypes.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface SetDefaultNoteTypeRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  id?: string;
}

export interface SetDefaultNoteTypeRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  id: string;
}
