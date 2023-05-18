// Original file: node_modules/protobufs/src/learningmotors/pb/closeencounters/closeencounters.proto

import type { EMRType as _learningmotors_pb_emrtypes_EMRType } from "../../../learningmotors/pb/emrtypes/EMRType";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface Encounter {
  organization_id?: string;
  encounter_uri?: string;
  patient_id?: string;
  emr_user_id?: string;
  emr_encounter_id?: string;
  emr_patient_id?: string;
  emr_type?: _learningmotors_pb_emrtypes_EMRType | keyof typeof _learningmotors_pb_emrtypes_EMRType;
  date_of_service?: _google_protobuf_Timestamp | null;
  checksum?: string;
}

export interface Encounter__Output {
  organization_id: string;
  encounter_uri: string;
  patient_id: string;
  emr_user_id: string;
  emr_encounter_id: string;
  emr_patient_id: string;
  emr_type: keyof typeof _learningmotors_pb_emrtypes_EMRType;
  date_of_service: _google_protobuf_Timestamp__Output | null;
  checksum: string;
}
