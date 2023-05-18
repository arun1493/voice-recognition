// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

import type {
  Metadata as _learningmotors_pb_composer_Metadata,
  Metadata__Output as _learningmotors_pb_composer_Metadata__Output
} from "../../../learningmotors/pb/composer/Metadata";
import type {
  Section as _learningmotors_pb_composer_Section,
  Section__Output as _learningmotors_pb_composer_Section__Output
} from "../../../learningmotors/pb/composer/Section";

export interface UpdateResponse {
  metadata?: _learningmotors_pb_composer_Metadata | null;
  sections?: _learningmotors_pb_composer_Section[];
  rejected?: _learningmotors_pb_composer_Section[];
}

export interface UpdateResponse__Output {
  metadata: _learningmotors_pb_composer_Metadata__Output | null;
  sections: _learningmotors_pb_composer_Section__Output[];
  rejected: _learningmotors_pb_composer_Section__Output[];
}
