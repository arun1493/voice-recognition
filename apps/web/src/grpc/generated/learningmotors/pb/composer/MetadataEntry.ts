// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type {
  Metadata as _learningmotors_pb_composer_Metadata,
  Metadata__Output as _learningmotors_pb_composer_Metadata__Output
} from "../../../learningmotors/pb/composer/Metadata";
import type {
  Author as _learningmotors_pb_composer_Author,
  Author__Output as _learningmotors_pb_composer_Author__Output
} from "../../../learningmotors/pb/composer/Author";

export interface MetadataEntry {
  created_at?: _google_protobuf_Timestamp | null;
  metadata?: _learningmotors_pb_composer_Metadata | null;
  author?: _learningmotors_pb_composer_Author | null;
}

export interface MetadataEntry__Output {
  created_at: _google_protobuf_Timestamp__Output | null;
  metadata: _learningmotors_pb_composer_Metadata__Output | null;
  author: _learningmotors_pb_composer_Author__Output | null;
}
