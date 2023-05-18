// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface SyncChartsDataRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  suki_patient_id?: string;
  emr_patient_id?: string;
  emr_appointment_department_id?: string;
  emr_encounter_id?: string;
  fhir_patient_id?: string;
  fhir_encounter_id?: string;
  suki_appointment_id?: string;
}

export interface SyncChartsDataRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  suki_patient_id: string;
  emr_patient_id: string;
  emr_appointment_department_id: string;
  emr_encounter_id: string;
  fhir_patient_id: string;
  fhir_encounter_id: string;
  suki_appointment_id: string;
}
