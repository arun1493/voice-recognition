// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type { RefreshDynamicDataType as _suki_pb_patientcharts_RefreshDynamicDataType } from "../../../suki/pb/patientcharts/RefreshDynamicDataType";

export interface SyncDynamicChartsDataRequest {
  organization_id?: string;
  suki_patient_id?: string;
  emr_patient_id?: string;
  emr_appointment_department_id?: string;
  fhir_patient_id?: string;
  to_refresh_list?: (
    | _suki_pb_patientcharts_RefreshDynamicDataType
    | keyof typeof _suki_pb_patientcharts_RefreshDynamicDataType
  )[];
  emr_encounter_id?: string;
  fhir_encounter_id?: string;
  suki_appointment_id?: string;
}

export interface SyncDynamicChartsDataRequest__Output {
  organization_id: string;
  suki_patient_id: string;
  emr_patient_id: string;
  emr_appointment_department_id: string;
  fhir_patient_id: string;
  to_refresh_list: (keyof typeof _suki_pb_patientcharts_RefreshDynamicDataType)[];
  emr_encounter_id: string;
  fhir_encounter_id: string;
  suki_appointment_id: string;
}
