// Original file: node_modules/protobufs/src/learningmotors/pb/pdf/pdf.proto

export interface BulkSaveRequest {
  composition_ids?: string[];
  patient_note_ids?: string[];
}

export interface BulkSaveRequest__Output {
  composition_ids: string[];
  patient_note_ids: string[];
}
