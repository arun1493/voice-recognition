// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type {
  ProblemList as _suki_pb_patientcharts_ProblemList,
  ProblemList__Output as _suki_pb_patientcharts_ProblemList__Output
} from "../../../suki/pb/patientcharts/ProblemList";

export interface GetProblemListResponse {
  suki_patient_id?: string;
  problem_list?: _suki_pb_patientcharts_ProblemList | null;
}

export interface GetProblemListResponse__Output {
  suki_patient_id: string;
  problem_list: _suki_pb_patientcharts_ProblemList__Output | null;
}
