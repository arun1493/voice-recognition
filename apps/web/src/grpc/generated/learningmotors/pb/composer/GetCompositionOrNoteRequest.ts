// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface GetCompositionOrNoteRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  id?: string;
}

export interface GetCompositionOrNoteRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  id: string;
}
