// Original file: node_modules/protobufs/src/learningmotors/pb/regression/regression.proto

import type {
  DataPoint as _learningmotors_pb_regression_DataPoint,
  DataPoint__Output as _learningmotors_pb_regression_DataPoint__Output
} from "../../../learningmotors/pb/regression/DataPoint";

export interface SampleComparison {
  input?: _learningmotors_pb_regression_DataPoint | null;
  expected_output?: _learningmotors_pb_regression_DataPoint | null;
  actual_output?: _learningmotors_pb_regression_DataPoint | null;
}

export interface SampleComparison__Output {
  input: _learningmotors_pb_regression_DataPoint__Output | null;
  expected_output: _learningmotors_pb_regression_DataPoint__Output | null;
  actual_output: _learningmotors_pb_regression_DataPoint__Output | null;
}
