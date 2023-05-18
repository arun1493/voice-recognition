// Original file: node_modules/protobufs/src/suki/pb/diagnosis/diagnosis.proto

import type {
  Diagnosis as _suki_pb_diagnosis_Diagnosis,
  Diagnosis__Output as _suki_pb_diagnosis_Diagnosis__Output
} from "../../../suki/pb/diagnosis/Diagnosis";
import type {
  DiagnosisWithChildren as _suki_pb_diagnosis_DiagnosisWithChildren,
  DiagnosisWithChildren__Output as _suki_pb_diagnosis_DiagnosisWithChildren__Output
} from "../../../suki/pb/diagnosis/DiagnosisWithChildren";

export interface DiagnosisWithChildren {
  diagnosis?: _suki_pb_diagnosis_Diagnosis | null;
  children?: _suki_pb_diagnosis_DiagnosisWithChildren[];
  score?: number | string;
}

export interface DiagnosisWithChildren__Output {
  diagnosis: _suki_pb_diagnosis_Diagnosis__Output | null;
  children: _suki_pb_diagnosis_DiagnosisWithChildren__Output[];
  score: number;
}
