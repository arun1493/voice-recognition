// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

export interface GetEncounterDiagnosesSectionsRequest {
  organization_id?: string;
  suki_patient_id?: string;
  emr_encounter_id?: string;
  emr_patient_id?: string;
  fhir_patient_id?: string;
  fhir_encounter_id?: string;
  suki_appointment_id?: string;
}

export interface GetEncounterDiagnosesSectionsRequest__Output {
  organization_id: string;
  suki_patient_id: string;
  emr_encounter_id: string;
  emr_patient_id: string;
  fhir_patient_id: string;
  fhir_encounter_id: string;
  suki_appointment_id: string;
}
