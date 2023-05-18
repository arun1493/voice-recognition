// Original file: node_modules/protobufs/src/learningmotors/pb/patients/patients.proto

import type {
  Person as _learningmotors_pb_common_Person,
  Person__Output as _learningmotors_pb_common_Person__Output
} from "../../../learningmotors/pb/common/Person";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface Patient {
  id?: string;
  person?: _learningmotors_pb_common_Person | null;
  mrn?: string;
  created_at?: _google_protobuf_Timestamp | null;
  updated_at?: _google_protobuf_Timestamp | null;
  deleted_at?: _google_protobuf_Timestamp | null;
  emr_id?: string;
  emr_id_type?: string;
  fhir_id?: string;
  fhir_id_type?: string;
}

export interface Patient__Output {
  id: string;
  person: _learningmotors_pb_common_Person__Output | null;
  mrn: string;
  created_at: _google_protobuf_Timestamp__Output | null;
  updated_at: _google_protobuf_Timestamp__Output | null;
  deleted_at: _google_protobuf_Timestamp__Output | null;
  emr_id: string;
  emr_id_type: string;
  fhir_id: string;
  fhir_id_type: string;
}
