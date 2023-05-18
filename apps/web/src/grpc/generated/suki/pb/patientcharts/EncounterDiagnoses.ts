// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type {
  EncounterDiagnosesList as _suki_pb_patientcharts_EncounterDiagnosesList,
  EncounterDiagnosesList__Output as _suki_pb_patientcharts_EncounterDiagnosesList__Output
} from "../../../suki/pb/patientcharts/EncounterDiagnosesList";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface EncounterDiagnoses {
  emr_encounter_id?: string;
  suki_patient_id?: string;
  suki_organization_id?: string;
  diagnoses_list?: _suki_pb_patientcharts_EncounterDiagnosesList | null;
  created_at?: _google_protobuf_Timestamp | null;
}

export interface EncounterDiagnoses__Output {
  emr_encounter_id: string;
  suki_patient_id: string;
  suki_organization_id: string;
  diagnoses_list: _suki_pb_patientcharts_EncounterDiagnosesList__Output | null;
  created_at: _google_protobuf_Timestamp__Output | null;
}
