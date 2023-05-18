// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

import type {
  VersionedNote as _learningmotors_pb_patientnotes_VersionedNote,
  VersionedNote__Output as _learningmotors_pb_patientnotes_VersionedNote__Output
} from "../../../learningmotors/pb/patientnotes/VersionedNote";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface UpdateVersionedNoteRequest {
  versioned_note?: _learningmotors_pb_patientnotes_VersionedNote | null;
  request_sent_time?: _google_protobuf_Timestamp | null;
}

export interface UpdateVersionedNoteRequest__Output {
  versioned_note: _learningmotors_pb_patientnotes_VersionedNote__Output | null;
  request_sent_time: _google_protobuf_Timestamp__Output | null;
}
