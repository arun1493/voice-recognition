// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type {
  EncounterDiagnoses as _suki_pb_patientcharts_EncounterDiagnoses,
  EncounterDiagnoses__Output as _suki_pb_patientcharts_EncounterDiagnoses__Output
} from "../../../suki/pb/patientcharts/EncounterDiagnoses";

export interface GetEncounterDiagnosesResponse {
  encounter_diagnoses?: _suki_pb_patientcharts_EncounterDiagnoses | null;
}

export interface GetEncounterDiagnosesResponse__Output {
  encounter_diagnoses: _suki_pb_patientcharts_EncounterDiagnoses__Output | null;
}
