// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

import type {
  Metadata as _learningmotors_pb_composer_Metadata,
  Metadata__Output as _learningmotors_pb_composer_Metadata__Output
} from "../../../learningmotors/pb/composer/Metadata";
import type {
  Section as _learningmotors_pb_composer_Section,
  Section__Output as _learningmotors_pb_composer_Section__Output
} from "../../../learningmotors/pb/composer/Section";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type {
  SectionS2 as _learningmotors_pb_composer_SectionS2,
  SectionS2__Output as _learningmotors_pb_composer_SectionS2__Output
} from "../../../learningmotors/pb/composer/SectionS2";

export interface Composition {
  id?: string;
  user_id?: string;
  metadata?: _learningmotors_pb_composer_Metadata | null;
  sections?: _learningmotors_pb_composer_Section[];
  created_at?: _google_protobuf_Timestamp | null;
  updated_at?: _google_protobuf_Timestamp | null;
  read_only?: boolean;
  last_user_submit_at?: _google_protobuf_Timestamp | null;
  org_id?: string;
  sections_s2?: _learningmotors_pb_composer_SectionS2[];
}

export interface Composition__Output {
  id: string;
  user_id: string;
  metadata: _learningmotors_pb_composer_Metadata__Output | null;
  sections: _learningmotors_pb_composer_Section__Output[];
  created_at: _google_protobuf_Timestamp__Output | null;
  updated_at: _google_protobuf_Timestamp__Output | null;
  read_only: boolean;
  last_user_submit_at: _google_protobuf_Timestamp__Output | null;
  org_id: string;
  sections_s2: _learningmotors_pb_composer_SectionS2__Output[];
}
