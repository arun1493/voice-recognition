// Original file: node_modules/protobufs/src/learningmotors/pb/emrsubmitter/emrsubmitter.proto

import type {
  Medication as _suki_pb_patientcharts_Medication,
  Medication__Output as _suki_pb_patientcharts_Medication__Output
} from "../../../suki/pb/patientcharts/Medication";

export interface OrderMedicationResponse {
  suki_patient_id?: string;
  medication_entry?: _suki_pb_patientcharts_Medication | null;
}

export interface OrderMedicationResponse__Output {
  suki_patient_id: string;
  medication_entry: _suki_pb_patientcharts_Medication__Output | null;
}
