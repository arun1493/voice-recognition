// Original file: node_modules/protobufs/src/learningmotors/pb/sectionsservice.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../learningmotors/pb/scope/Scope";
import type {
  Section as _learningmotors_pb_Section,
  Section__Output as _learningmotors_pb_Section__Output
} from "../../learningmotors/pb/Section";

export interface CreateSectionRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  section?: _learningmotors_pb_Section | null;
}

export interface CreateSectionRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  section: _learningmotors_pb_Section__Output | null;
}
