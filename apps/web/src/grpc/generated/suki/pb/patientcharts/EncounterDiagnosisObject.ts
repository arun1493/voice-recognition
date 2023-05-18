// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type {
  Diagnosis as _suki_pb_diagnosis_Diagnosis,
  Diagnosis__Output as _suki_pb_diagnosis_Diagnosis__Output
} from "../../../suki/pb/diagnosis/Diagnosis";

export interface EncounterDiagnosisObject {
  diagnosis?: _suki_pb_diagnosis_Diagnosis | null;
  diagnosis_note?: string;
}

export interface EncounterDiagnosisObject__Output {
  diagnosis: _suki_pb_diagnosis_Diagnosis__Output | null;
  diagnosis_note: string;
}
