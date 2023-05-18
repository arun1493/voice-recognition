// Original file: node_modules/protobufs/src/learningmotors/pb/regression/regression.proto

import type {
  DataPoint as _learningmotors_pb_regression_DataPoint,
  DataPoint__Output as _learningmotors_pb_regression_DataPoint__Output
} from "../../../learningmotors/pb/regression/DataPoint";
import type {
  Context as _learningmotors_pb_Context,
  Context__Output as _learningmotors_pb_Context__Output
} from "../../../learningmotors/pb/Context";

export interface Sample {
  input?: _learningmotors_pb_regression_DataPoint | null;
  output?: _learningmotors_pb_regression_DataPoint | null;
  context?: _learningmotors_pb_Context | null;
}

export interface Sample__Output {
  input: _learningmotors_pb_regression_DataPoint__Output | null;
  output: _learningmotors_pb_regression_DataPoint__Output | null;
  context: _learningmotors_pb_Context__Output | null;
}
