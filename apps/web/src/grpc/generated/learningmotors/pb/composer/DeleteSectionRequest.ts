// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface DeleteSectionRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  composition_id?: string;
  section_id?: string;
}

export interface DeleteSectionRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  composition_id: string;
  section_id: string;
}
