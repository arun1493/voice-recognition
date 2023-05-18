// Original file: node_modules/protobufs/src/learningmotors/pb/emr_charts/emr_charts.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface RefreshChartsDataRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  patient_suki_id?: string;
  patient_emr_id?: string;
  appointment_department_emr_id?: string;
  encounter_emr_id?: string;
  patient_fhir_id?: string;
  encounter_fhir_id?: string;
}

export interface RefreshChartsDataRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  patient_suki_id: string;
  patient_emr_id: string;
  appointment_department_emr_id: string;
  encounter_emr_id: string;
  patient_fhir_id: string;
  encounter_fhir_id: string;
}
