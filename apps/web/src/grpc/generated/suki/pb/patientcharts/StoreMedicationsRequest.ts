// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  MedicationList as _suki_pb_patientcharts_MedicationList,
  MedicationList__Output as _suki_pb_patientcharts_MedicationList__Output
} from "../../../suki/pb/patientcharts/MedicationList";

export interface StoreMedicationsRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  suki_patient_id?: string;
  medications?: _suki_pb_patientcharts_MedicationList | null;
}

export interface StoreMedicationsRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  suki_patient_id: string;
  medications: _suki_pb_patientcharts_MedicationList__Output | null;
}
