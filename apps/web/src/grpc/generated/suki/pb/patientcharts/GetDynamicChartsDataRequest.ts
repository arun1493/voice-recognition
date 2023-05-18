// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type { DynamicDataType as _suki_pb_patientcharts_DynamicDataType } from "../../../suki/pb/patientcharts/DynamicDataType";

export interface GetDynamicChartsDataRequest {
  organization_id?: string;
  suki_patient_id?: string;
  requested_data?: (_suki_pb_patientcharts_DynamicDataType | keyof typeof _suki_pb_patientcharts_DynamicDataType)[];
  refresh_data?: boolean;
  emr_patient_id?: string;
  emr_appointment_department_id?: string;
  fhir_patient_id?: string;
  emr_encounter_id?: string;
  fhir_encounter_id?: string;
  suki_appointment_id?: string;
}

export interface GetDynamicChartsDataRequest__Output {
  organization_id: string;
  suki_patient_id: string;
  requested_data: (keyof typeof _suki_pb_patientcharts_DynamicDataType)[];
  refresh_data: boolean;
  emr_patient_id: string;
  emr_appointment_department_id: string;
  fhir_patient_id: string;
  emr_encounter_id: string;
  fhir_encounter_id: string;
  suki_appointment_id: string;
}
