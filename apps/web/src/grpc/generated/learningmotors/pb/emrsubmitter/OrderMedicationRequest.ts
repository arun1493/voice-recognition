// Original file: node_modules/protobufs/src/learningmotors/pb/emrsubmitter/emrsubmitter.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Medication as _suki_pb_patientcharts_Medication,
  Medication__Output as _suki_pb_patientcharts_Medication__Output
} from "../../../suki/pb/patientcharts/Medication";

export interface OrderMedicationRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  encounter_id?: string;
  suki_user_id?: string;
  diagnosis_snomed_id?: string;
  medication_entry?: _suki_pb_patientcharts_Medication | null;
}

export interface OrderMedicationRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  encounter_id: string;
  suki_user_id: string;
  diagnosis_snomed_id: string;
  medication_entry: _suki_pb_patientcharts_Medication__Output | null;
}
