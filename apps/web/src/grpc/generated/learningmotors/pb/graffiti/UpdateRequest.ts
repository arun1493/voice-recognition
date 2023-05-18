// Original file: node_modules/protobufs/src/learningmotors/pb/graffiti/graffiti.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Metadata as _learningmotors_pb_composer_Metadata,
  Metadata__Output as _learningmotors_pb_composer_Metadata__Output
} from "../../../learningmotors/pb/composer/Metadata";
import type {
  Section as _learningmotors_pb_composer_Section,
  Section__Output as _learningmotors_pb_composer_Section__Output
} from "../../../learningmotors/pb/composer/Section";

export interface UpdateRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  id?: string;
  metadata?: _learningmotors_pb_composer_Metadata | null;
  sections?: _learningmotors_pb_composer_Section[];
}

export interface UpdateRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  id: string;
  metadata: _learningmotors_pb_composer_Metadata__Output | null;
  sections: _learningmotors_pb_composer_Section__Output[];
}
