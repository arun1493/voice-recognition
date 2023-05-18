// Original file: node_modules/protobufs/src/suki/pb/diagnosis/diagnosis.proto

import type {
  Diagnosis as _suki_pb_diagnosis_Diagnosis,
  Diagnosis__Output as _suki_pb_diagnosis_Diagnosis__Output
} from "../../../suki/pb/diagnosis/Diagnosis";

// Original file: node_modules/protobufs/src/suki/pb/diagnosis/diagnosis.proto

export enum _suki_pb_diagnosis_HCCSuggestion_SuggestionType {
  DEFAULT = 0,
  ED = 1,
  PL = 2
}

export interface HCCSuggestion {
  diagnosis?: _suki_pb_diagnosis_Diagnosis | null;
  suggestion_type?:
    | _suki_pb_diagnosis_HCCSuggestion_SuggestionType
    | keyof typeof _suki_pb_diagnosis_HCCSuggestion_SuggestionType;
}

export interface HCCSuggestion__Output {
  diagnosis: _suki_pb_diagnosis_Diagnosis__Output | null;
  suggestion_type: keyof typeof _suki_pb_diagnosis_HCCSuggestion_SuggestionType;
}
