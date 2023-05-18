// Original file: node_modules/protobufs/src/suki/pb/auther/auther.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface ValidateTokenResponse {
  valid?: boolean;
  expire_at?: _google_protobuf_Timestamp | null;
}

export interface ValidateTokenResponse__Output {
  valid: boolean;
  expire_at: _google_protobuf_Timestamp__Output | null;
}
