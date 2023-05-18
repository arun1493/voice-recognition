// Original file: node_modules/protobufs/src/learningmotors/pb/regression/regression.proto

import type {
  Sample as _learningmotors_pb_regression_Sample,
  Sample__Output as _learningmotors_pb_regression_Sample__Output
} from "../../../learningmotors/pb/regression/Sample";

// Original file: node_modules/protobufs/src/learningmotors/pb/regression/regression.proto

export enum _learningmotors_pb_regression_RegressionSet_Type {
  INVALID = 0,
  AUDIO = 1,
  INTENT = 2
}

export interface RegressionSet {
  name?: string;
  input_type?:
    | _learningmotors_pb_regression_RegressionSet_Type
    | keyof typeof _learningmotors_pb_regression_RegressionSet_Type;
  output_type?:
    | _learningmotors_pb_regression_RegressionSet_Type
    | keyof typeof _learningmotors_pb_regression_RegressionSet_Type;
  samples?: _learningmotors_pb_regression_Sample[];
}

export interface RegressionSet__Output {
  name: string;
  input_type: keyof typeof _learningmotors_pb_regression_RegressionSet_Type;
  output_type: keyof typeof _learningmotors_pb_regression_RegressionSet_Type;
  samples: _learningmotors_pb_regression_Sample__Output[];
}
