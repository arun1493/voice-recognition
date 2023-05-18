// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Section as _learningmotors_pb_composer_Section,
  Section__Output as _learningmotors_pb_composer_Section__Output
} from "../../../learningmotors/pb/composer/Section";

export interface AddSectionRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  composition_id?: string;
  section?: _learningmotors_pb_composer_Section | null;
}

export interface AddSectionRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  composition_id: string;
  section: _learningmotors_pb_composer_Section__Output | null;
}
