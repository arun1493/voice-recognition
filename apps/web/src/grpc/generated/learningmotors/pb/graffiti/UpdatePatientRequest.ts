// Original file: node_modules/protobufs/src/learningmotors/pb/graffiti/graffiti.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface UpdatePatientRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  id?: string;
  patient_id?: string;
  appointment_id?: string;
}

export interface UpdatePatientRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  id: string;
  patient_id: string;
  appointment_id: string;
}
