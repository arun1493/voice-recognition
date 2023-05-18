// Original file: node_modules/protobufs/src/suki/pb/diagnosis/diagnosis.proto

export interface SearchMLRequest {
  search_title?: string;
  search_description?: string;
  patient_id?: string;
  emr_encounter_id?: string;
}

export interface SearchMLRequest__Output {
  search_title: string;
  search_description: string;
  patient_id: string;
  emr_encounter_id: string;
}
