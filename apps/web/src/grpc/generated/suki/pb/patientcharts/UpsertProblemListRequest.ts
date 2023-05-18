// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type {
  ProblemList as _suki_pb_patientcharts_ProblemList,
  ProblemList__Output as _suki_pb_patientcharts_ProblemList__Output
} from "../../../suki/pb/patientcharts/ProblemList";

export interface UpsertProblemListRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  suki_patient_id?: string;
  emr_department_id?: string;
  problem_list?: _suki_pb_patientcharts_ProblemList | null;
}

export interface UpsertProblemListRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  suki_patient_id: string;
  emr_department_id: string;
  problem_list: _suki_pb_patientcharts_ProblemList__Output | null;
}
