// Original file: node_modules/protobufs/src/learningmotors/pb/macros/macros.proto

import type {
  Tag as _learningmotors_pb_macros_Tag,
  Tag__Output as _learningmotors_pb_macros_Tag__Output
} from "../../../learningmotors/pb/macros/Tag";
import type {
  Block as _learningmotors_pb_macros_Block,
  Block__Output as _learningmotors_pb_macros_Block__Output
} from "../../../learningmotors/pb/macros/Block";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type { Specialty as _learningmotors_pb_user_Specialty } from "../../../learningmotors/pb/user/Specialty";

// Original file: node_modules/protobufs/src/learningmotors/pb/macros/macros.proto

export enum _learningmotors_pb_macros_Macro_ContentType {
  UNKNOWN = 0,
  STATIC = 1,
  DYNAMIC = 2
}

// Original file: node_modules/protobufs/src/learningmotors/pb/macros/macros.proto

export enum _learningmotors_pb_macros_Macro_Source {
  DEFAULT = 0,
  ADMIN = 1,
  USER = 2
}

export interface Macro {
  id?: string;
  user_id?: string;
  tags?: _learningmotors_pb_macros_Tag[];
  blocks?: _learningmotors_pb_macros_Block[];
  created_at?: _google_protobuf_Timestamp | null;
  updated_at?: _google_protobuf_Timestamp | null;
  deleted_at?: _google_protobuf_Timestamp | null;
  specialties?: (_learningmotors_pb_user_Specialty | keyof typeof _learningmotors_pb_user_Specialty)[];
  source?: _learningmotors_pb_macros_Macro_Source | keyof typeof _learningmotors_pb_macros_Macro_Source;
  content_type?: _learningmotors_pb_macros_Macro_ContentType | keyof typeof _learningmotors_pb_macros_Macro_ContentType;
}

export interface Macro__Output {
  id: string;
  user_id: string;
  tags: _learningmotors_pb_macros_Tag__Output[];
  blocks: _learningmotors_pb_macros_Block__Output[];
  created_at: _google_protobuf_Timestamp__Output | null;
  updated_at: _google_protobuf_Timestamp__Output | null;
  deleted_at: _google_protobuf_Timestamp__Output | null;
  specialties: (keyof typeof _learningmotors_pb_user_Specialty)[];
  source: keyof typeof _learningmotors_pb_macros_Macro_Source;
  content_type: keyof typeof _learningmotors_pb_macros_Macro_ContentType;
}
