// Original file: node_modules/protobufs/src/learningmotors/pb/emr_scheduler/emr_scheduler.proto

export interface SearchAltaisUserRequest {
  organization_id?: string;
  suki_user_id?: string;
  username?: string;
  email?: string;
  patient_emr_id?: string;
  emr_encounter_id?: string;
  emr_user_id?: string;
}

export interface SearchAltaisUserRequest__Output {
  organization_id: string;
  suki_user_id: string;
  username: string;
  email: string;
  patient_emr_id: string;
  emr_encounter_id: string;
  emr_user_id: string;
}
