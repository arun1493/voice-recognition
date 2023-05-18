// Original file: node_modules/protobufs/src/learningmotors/pb/appointments.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../google/protobuf/Timestamp";

export interface BackfillAppointmentDataRequest {
  starts_at?: _google_protobuf_Timestamp | null;
  ends_at?: _google_protobuf_Timestamp | null;
}

export interface BackfillAppointmentDataRequest__Output {
  starts_at: _google_protobuf_Timestamp__Output | null;
  ends_at: _google_protobuf_Timestamp__Output | null;
}
