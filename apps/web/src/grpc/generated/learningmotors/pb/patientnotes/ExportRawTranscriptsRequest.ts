// Original file: node_modules/protobufs/src/learningmotors/pb/patientnotes/patientnotes.proto

import type { ExportType as _learningmotors_pb_patientnotes_ExportType } from "../../../learningmotors/pb/patientnotes/ExportType";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface ExportRawTranscriptsRequest {
  export_type?: _learningmotors_pb_patientnotes_ExportType | keyof typeof _learningmotors_pb_patientnotes_ExportType;
  starts_at?: _google_protobuf_Timestamp | null;
  ends_at?: _google_protobuf_Timestamp | null;
}

export interface ExportRawTranscriptsRequest__Output {
  export_type: keyof typeof _learningmotors_pb_patientnotes_ExportType;
  starts_at: _google_protobuf_Timestamp__Output | null;
  ends_at: _google_protobuf_Timestamp__Output | null;
}
