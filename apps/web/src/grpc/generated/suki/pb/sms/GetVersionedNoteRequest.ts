// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface GetVersionedNoteRequest {
  organization_id?: string;
  id?: string;
  request_sent_time?: _google_protobuf_Timestamp | null;
}

export interface GetVersionedNoteRequest__Output {
  organization_id: string;
  id: string;
  request_sent_time: _google_protobuf_Timestamp__Output | null;
}
