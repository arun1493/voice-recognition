// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type {
  MedicationStructuredSig as _suki_pb_patientcharts_MedicationStructuredSig,
  MedicationStructuredSig__Output as _suki_pb_patientcharts_MedicationStructuredSig__Output
} from "../../../suki/pb/patientcharts/MedicationStructuredSig";

export interface Medication {
  id?: string;
  emr_medication_name?: string;
  structured_sig?: _suki_pb_patientcharts_MedicationStructuredSig | null;
  unstructured_sig?: string;
}

export interface Medication__Output {
  id: string;
  emr_medication_name: string;
  structured_sig: _suki_pb_patientcharts_MedicationStructuredSig__Output | null;
  unstructured_sig: string;
}
