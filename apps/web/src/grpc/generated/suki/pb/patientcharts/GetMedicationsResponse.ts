// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type {
  MedicationList as _suki_pb_patientcharts_MedicationList,
  MedicationList__Output as _suki_pb_patientcharts_MedicationList__Output
} from "../../../suki/pb/patientcharts/MedicationList";

export interface GetMedicationsResponse {
  suki_patient_id?: string;
  medications?: _suki_pb_patientcharts_MedicationList | null;
}

export interface GetMedicationsResponse__Output {
  suki_patient_id: string;
  medications: _suki_pb_patientcharts_MedicationList__Output | null;
}
