// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";

export interface GetProblemListRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  suki_patient_id?: string;
}

export interface GetProblemListRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  suki_patient_id: string;
}
