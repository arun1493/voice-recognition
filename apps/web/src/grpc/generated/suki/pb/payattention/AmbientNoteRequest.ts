// Original file: node_modules/protobufs/src/suki/pb/payattention/payattention.proto

export interface AmbientNoteRequest {
  request_id?: string;
  org_id?: string;
  user_id?: string;
  note_type_id?: string;
  appointment_id?: string;
  patient_id?: string;
}

export interface AmbientNoteRequest__Output {
  request_id: string;
  org_id: string;
  user_id: string;
  note_type_id: string;
  appointment_id: string;
  patient_id: string;
}
