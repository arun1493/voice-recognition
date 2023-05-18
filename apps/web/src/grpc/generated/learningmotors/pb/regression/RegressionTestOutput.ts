// Original file: node_modules/protobufs/src/learningmotors/pb/regression/regression.proto

import type {
  SampleComparison as _learningmotors_pb_regression_SampleComparison,
  SampleComparison__Output as _learningmotors_pb_regression_SampleComparison__Output
} from "../../../learningmotors/pb/regression/SampleComparison";

// Original file: node_modules/protobufs/src/learningmotors/pb/regression/regression.proto

export enum _learningmotors_pb_regression_RegressionTestOutput_Type {
  INVALID = 0,
  AUDIO = 1,
  INTENT = 2
}

export interface RegressionTestOutput {
  total?: number;
  matches?: number;
  input_type?:
    | _learningmotors_pb_regression_RegressionTestOutput_Type
    | keyof typeof _learningmotors_pb_regression_RegressionTestOutput_Type;
  output_type?:
    | _learningmotors_pb_regression_RegressionTestOutput_Type
    | keyof typeof _learningmotors_pb_regression_RegressionTestOutput_Type;
  no_match?: _learningmotors_pb_regression_SampleComparison[];
  match?: _learningmotors_pb_regression_SampleComparison[];
}

export interface RegressionTestOutput__Output {
  total: number;
  matches: number;
  input_type: keyof typeof _learningmotors_pb_regression_RegressionTestOutput_Type;
  output_type: keyof typeof _learningmotors_pb_regression_RegressionTestOutput_Type;
  no_match: _learningmotors_pb_regression_SampleComparison__Output[];
  match: _learningmotors_pb_regression_SampleComparison__Output[];
}
