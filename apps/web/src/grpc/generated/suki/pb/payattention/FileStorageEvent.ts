// Original file: node_modules/protobufs/src/suki/pb/payattention/payattention.proto

export interface FileStorageEvent {
  request_id?: string;
  org_id?: string;
  user_id?: string;
  note_type_id?: string;
  appointment_id?: string;
  patient_id?: string;
  gcs_file_location?: string[];
}

export interface FileStorageEvent__Output {
  request_id: string;
  org_id: string;
  user_id: string;
  note_type_id: string;
  appointment_id: string;
  patient_id: string;
  gcs_file_location: string[];
}
