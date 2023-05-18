// Original file: node_modules/protobufs/src/suki/pb/ml/ms_online.proto

import type { EnsembleType as _suki_pb_ml_EnsembleType } from "../../../suki/pb/ml/EnsembleType";
import type {
  ModelResults as _suki_pb_ml_ModelResults,
  ModelResults__Output as _suki_pb_ml_ModelResults__Output
} from "../../../suki/pb/ml/ModelResults";

export interface EnsembleResults {
  type?: _suki_pb_ml_EnsembleType | keyof typeof _suki_pb_ml_EnsembleType;
  version?: string;
  labels_uri?: string;
  inputs_uri?: string;
  input_count?: number;
  output_count?: number;
  model_results?: _suki_pb_ml_ModelResults[];
}

export interface EnsembleResults__Output {
  type: keyof typeof _suki_pb_ml_EnsembleType;
  version: string;
  labels_uri: string;
  inputs_uri: string;
  input_count: number;
  output_count: number;
  model_results: _suki_pb_ml_ModelResults__Output[];
}
