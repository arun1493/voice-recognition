// Original file: node_modules/protobufs/src/learningmotors/pb/sectionsservice.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../google/protobuf/Timestamp";

export interface Section {
  id?: string;
  name?: string;
  hints?: string[];
  created_by?: string;
  created_at?: _google_protobuf_Timestamp | null;
  updated_at?: _google_protobuf_Timestamp | null;
  deleted_at?: _google_protobuf_Timestamp | null;
  pbc_section_flag?: boolean;
  hidden?: boolean;
}

export interface Section__Output {
  id: string;
  name: string;
  hints: string[];
  created_by: string;
  created_at: _google_protobuf_Timestamp__Output | null;
  updated_at: _google_protobuf_Timestamp__Output | null;
  deleted_at: _google_protobuf_Timestamp__Output | null;
  pbc_section_flag: boolean;
  hidden: boolean;
}
