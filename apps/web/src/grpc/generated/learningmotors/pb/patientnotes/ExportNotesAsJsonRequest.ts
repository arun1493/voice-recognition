// Original file: node_modules/protobufs/src/learningmotors/pb/patientnotes/patientnotes.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface ExportNotesAsJsonRequest {
  starts_at?: _google_protobuf_Timestamp | null;
  ends_at?: _google_protobuf_Timestamp | null;
  organization_id?: string;
  user_id?: string;
  versioned?: boolean;
}

export interface ExportNotesAsJsonRequest__Output {
  starts_at: _google_protobuf_Timestamp__Output | null;
  ends_at: _google_protobuf_Timestamp__Output | null;
  organization_id: string;
  user_id: string;
  versioned: boolean;
}
