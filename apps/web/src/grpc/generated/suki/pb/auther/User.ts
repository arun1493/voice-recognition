// Original file: node_modules/protobufs/src/suki/pb/auther/auther.proto

import type { Role as _suki_pb_auther_Role } from "../../../suki/pb/auther/Role";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface User {
  id?: string;
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  email?: string;
  role?: _suki_pb_auther_Role | keyof typeof _suki_pb_auther_Role;
  organization_id?: string;
  created_at?: _google_protobuf_Timestamp | null;
  updated_at?: _google_protobuf_Timestamp | null;
  deleted_at?: _google_protobuf_Timestamp | null;
  deleter_id?: string;
}

export interface User__Output {
  id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  role: keyof typeof _suki_pb_auther_Role;
  organization_id: string;
  created_at: _google_protobuf_Timestamp__Output | null;
  updated_at: _google_protobuf_Timestamp__Output | null;
  deleted_at: _google_protobuf_Timestamp__Output | null;
  deleter_id: string;
}
