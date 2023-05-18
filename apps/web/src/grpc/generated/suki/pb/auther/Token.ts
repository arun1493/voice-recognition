// Original file: node_modules/protobufs/src/suki/pb/auther/auther.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface Token {
  jwt?: string;
  organization_id?: string;
  creator_id?: string;
  expirer_id?: string;
  updater_id?: string;
  project_id?: string;
  created_at?: _google_protobuf_Timestamp | null;
  updated_at?: _google_protobuf_Timestamp | null;
  expire_at?: _google_protobuf_Timestamp | null;
}

export interface Token__Output {
  jwt: string;
  organization_id: string;
  creator_id: string;
  expirer_id: string;
  updater_id: string;
  project_id: string;
  created_at: _google_protobuf_Timestamp__Output | null;
  updated_at: _google_protobuf_Timestamp__Output | null;
  expire_at: _google_protobuf_Timestamp__Output | null;
}
