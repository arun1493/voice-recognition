// Original file: node_modules/protobufs/src/learningmotors/pb/patientnotes/patientnotes.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface ExportRawNoteAudioRequest {
  starts_at?: _google_protobuf_Timestamp | null;
  ends_at?: _google_protobuf_Timestamp | null;
}

export interface ExportRawNoteAudioRequest__Output {
  starts_at: _google_protobuf_Timestamp__Output | null;
  ends_at: _google_protobuf_Timestamp__Output | null;
}
