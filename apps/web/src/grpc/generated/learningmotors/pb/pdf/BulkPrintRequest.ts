// Original file: node_modules/protobufs/src/learningmotors/pb/pdf/pdf.proto

export interface BulkPrintRequest {
  composition_ids?: string[];
  patient_note_ids?: string[];
}

export interface BulkPrintRequest__Output {
  composition_ids: string[];
  patient_note_ids: string[];
}
