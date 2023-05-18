// Original file: node_modules/protobufs/src/learningmotors/pb/composer/sections.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type {
  Section as _learningmotors_pb_composer_Section,
  Section__Output as _learningmotors_pb_composer_Section__Output
} from "../../../learningmotors/pb/composer/Section";
import type {
  Author as _learningmotors_pb_composer_Author,
  Author__Output as _learningmotors_pb_composer_Author__Output
} from "../../../learningmotors/pb/composer/Author";

export interface SectionEntry {
  created_at?: _google_protobuf_Timestamp | null;
  section?: _learningmotors_pb_composer_Section | null;
  author?: _learningmotors_pb_composer_Author | null;
}

export interface SectionEntry__Output {
  created_at: _google_protobuf_Timestamp__Output | null;
  section: _learningmotors_pb_composer_Section__Output | null;
  author: _learningmotors_pb_composer_Author__Output | null;
}
