// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type {
  Diagnosis as _suki_pb_diagnosis_Diagnosis,
  Diagnosis__Output as _suki_pb_diagnosis_Diagnosis__Output
} from "../../../suki/pb/diagnosis/Diagnosis";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface ProblemObject {
  diagnosis?: _suki_pb_diagnosis_Diagnosis | null;
  most_recent_date?: _google_protobuf_Timestamp | null;
  onset_date?: _google_protobuf_Timestamp | null;
  deactivated_date?: _google_protobuf_Timestamp | null;
  status?: string;
  note?: string;
}

export interface ProblemObject__Output {
  diagnosis: _suki_pb_diagnosis_Diagnosis__Output | null;
  most_recent_date: _google_protobuf_Timestamp__Output | null;
  onset_date: _google_protobuf_Timestamp__Output | null;
  deactivated_date: _google_protobuf_Timestamp__Output | null;
  status: string;
  note: string;
}
