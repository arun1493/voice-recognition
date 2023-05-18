// Original file: node_modules/protobufs/src/learningmotors/pb/user/user_consent.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface Consent {
  name?: string;
  version?: string;
  accepted?: boolean;
  timestamp?: _google_protobuf_Timestamp | null;
  email?: string;
}

export interface Consent__Output {
  name: string;
  version: string;
  accepted: boolean;
  timestamp: _google_protobuf_Timestamp__Output | null;
  email: string;
}
