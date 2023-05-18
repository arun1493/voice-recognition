// Original file: node_modules/protobufs/src/suki/pb/payattention/note_generation.proto

import type {
  MetaData as _suki_pb_payattention_MetaData,
  MetaData__Output as _suki_pb_payattention_MetaData__Output
} from "../../../suki/pb/payattention/MetaData";
import type {
  PatientInfo as _suki_pb_payattention_PatientInfo,
  PatientInfo__Output as _suki_pb_payattention_PatientInfo__Output
} from "../../../suki/pb/payattention/PatientInfo";

export interface GenerateNoteRequest {
  request_id?: string;
  meta_data?: _suki_pb_payattention_MetaData | null;
  patient_info?: _suki_pb_payattention_PatientInfo | null;
  transcript?: string;
  section_names?: string[];
  previous_note?: string;
}

export interface GenerateNoteRequest__Output {
  request_id: string;
  meta_data: _suki_pb_payattention_MetaData__Output | null;
  patient_info: _suki_pb_payattention_PatientInfo__Output | null;
  transcript: string;
  section_names: string[];
  previous_note: string;
}
