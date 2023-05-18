// Original file: node_modules/protobufs/src/suki/pb/auther/auther.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface Organization {
  id?: string;
  name?: string;
  created_at?: _google_protobuf_Timestamp | null;
  updated_at?: _google_protobuf_Timestamp | null;
  deleted_at?: _google_protobuf_Timestamp | null;
  deleter_id?: string;
}

export interface Organization__Output {
  id: string;
  name: string;
  created_at: _google_protobuf_Timestamp__Output | null;
  updated_at: _google_protobuf_Timestamp__Output | null;
  deleted_at: _google_protobuf_Timestamp__Output | null;
  deleter_id: string;
}
