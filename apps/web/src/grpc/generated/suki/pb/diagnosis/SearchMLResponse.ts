// Original file: node_modules/protobufs/src/suki/pb/diagnosis/diagnosis.proto

import type {
  DiagnosisWithChildren as _suki_pb_diagnosis_DiagnosisWithChildren,
  DiagnosisWithChildren__Output as _suki_pb_diagnosis_DiagnosisWithChildren__Output
} from "../../../suki/pb/diagnosis/DiagnosisWithChildren";

export interface SearchMLResponse {
  diagnoses?: _suki_pb_diagnosis_DiagnosisWithChildren[];
  suggestions?: _suki_pb_diagnosis_DiagnosisWithChildren[];
}

export interface SearchMLResponse__Output {
  diagnoses: _suki_pb_diagnosis_DiagnosisWithChildren__Output[];
  suggestions: _suki_pb_diagnosis_DiagnosisWithChildren__Output[];
}
