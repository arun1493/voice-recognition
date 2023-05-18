// Original file: node_modules/protobufs/src/learningmotors/pb/composer/section_s2.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type {
  SectionS2 as _learningmotors_pb_composer_SectionS2,
  SectionS2__Output as _learningmotors_pb_composer_SectionS2__Output
} from "../../../learningmotors/pb/composer/SectionS2";
import type {
  Author as _learningmotors_pb_composer_Author,
  Author__Output as _learningmotors_pb_composer_Author__Output
} from "../../../learningmotors/pb/composer/Author";
import type { SectionContentFormat as _learningmotors_pb_composer_SectionContentFormat } from "../../../learningmotors/pb/composer/SectionContentFormat";

export interface SectionS2Entry {
  created_at?: _google_protobuf_Timestamp | null;
  section?: _learningmotors_pb_composer_SectionS2 | null;
  author?: _learningmotors_pb_composer_Author | null;
  format?:
    | _learningmotors_pb_composer_SectionContentFormat
    | keyof typeof _learningmotors_pb_composer_SectionContentFormat;
  organization_id?: string;
  undone?: boolean;
  stale?: boolean;
}

export interface SectionS2Entry__Output {
  created_at: _google_protobuf_Timestamp__Output | null;
  section: _learningmotors_pb_composer_SectionS2__Output | null;
  author: _learningmotors_pb_composer_Author__Output | null;
  format: keyof typeof _learningmotors_pb_composer_SectionContentFormat;
  organization_id: string;
  undone: boolean;
  stale: boolean;
}
