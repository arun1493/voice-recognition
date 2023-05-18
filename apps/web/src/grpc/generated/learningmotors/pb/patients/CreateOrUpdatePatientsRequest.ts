// Original file: node_modules/protobufs/src/learningmotors/pb/patients/patients.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  Patient as _learningmotors_pb_patients_Patient,
  Patient__Output as _learningmotors_pb_patients_Patient__Output
} from "../../../learningmotors/pb/patients/Patient";

export interface CreateOrUpdatePatientsRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  patients?: _learningmotors_pb_patients_Patient[];
}

export interface CreateOrUpdatePatientsRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  patients: _learningmotors_pb_patients_Patient__Output[];
}
