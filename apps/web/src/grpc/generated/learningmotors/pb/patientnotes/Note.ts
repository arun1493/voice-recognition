// Original file: node_modules/protobufs/src/learningmotors/pb/patientnotes/patientnotes.proto

import type {
  Metadata as _learningmotors_pb_composer_Metadata,
  Metadata__Output as _learningmotors_pb_composer_Metadata__Output
} from "../../../learningmotors/pb/composer/Metadata";
import type {
  Section as _learningmotors_pb_composer_Section,
  Section__Output as _learningmotors_pb_composer_Section__Output
} from "../../../learningmotors/pb/composer/Section";
import type {
  SectionS2 as _learningmotors_pb_composer_SectionS2,
  SectionS2__Output as _learningmotors_pb_composer_SectionS2__Output
} from "../../../learningmotors/pb/composer/SectionS2";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface Note {
  id?: string;
  composition_id?: string;
  metadata?: _learningmotors_pb_composer_Metadata | null;
  sections?: _learningmotors_pb_composer_Section[];
  user_id?: string;
  org_id?: string;
  sections_s2?: _learningmotors_pb_composer_SectionS2[];
  composition_created_at?: _google_protobuf_Timestamp | null;
}

export interface Note__Output {
  id: string;
  composition_id: string;
  metadata: _learningmotors_pb_composer_Metadata__Output | null;
  sections: _learningmotors_pb_composer_Section__Output[];
  user_id: string;
  org_id: string;
  sections_s2: _learningmotors_pb_composer_SectionS2__Output[];
  composition_created_at: _google_protobuf_Timestamp__Output | null;
}
