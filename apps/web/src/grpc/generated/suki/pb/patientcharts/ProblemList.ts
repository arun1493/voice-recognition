// Original file: node_modules/protobufs/src/suki/pb/patientcharts/patientcharts.proto

import type {
  ProblemObject as _suki_pb_patientcharts_ProblemObject,
  ProblemObject__Output as _suki_pb_patientcharts_ProblemObject__Output
} from "../../../suki/pb/patientcharts/ProblemObject";

export interface ProblemList {
  active_problems?: _suki_pb_patientcharts_ProblemObject[];
  inactive_problems?: _suki_pb_patientcharts_ProblemObject[];
}

export interface ProblemList__Output {
  active_problems: _suki_pb_patientcharts_ProblemObject__Output[];
  inactive_problems: _suki_pb_patientcharts_ProblemObject__Output[];
}
