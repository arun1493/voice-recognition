// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

export interface SyncEMRNoteRequest {
  organization_id?: string;
  emr_encounter_id?: string;
  suki_section_id?: string;
  emr_patient_id?: string;
  emr_department_id?: string;
  emr_user_id?: string;
  suki_section_ids?: string[];
  suki_appointment_id?: string;
  composition_id?: string;
}

export interface SyncEMRNoteRequest__Output {
  organization_id: string;
  emr_encounter_id: string;
  suki_section_id: string;
  emr_patient_id: string;
  emr_department_id: string;
  emr_user_id: string;
  suki_section_ids: string[];
  suki_appointment_id: string;
  composition_id: string;
}
