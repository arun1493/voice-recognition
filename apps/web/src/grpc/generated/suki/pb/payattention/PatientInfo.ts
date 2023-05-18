// Original file: node_modules/protobufs/src/suki/pb/payattention/note_generation.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface PatientInfo {
  patient_date_of_birth?: _google_protobuf_Timestamp | null;
  patient_sex?: string;
}

export interface PatientInfo__Output {
  patient_date_of_birth: _google_protobuf_Timestamp__Output | null;
  patient_sex: string;
}
