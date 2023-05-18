// Original file: node_modules/protobufs/src/suki/pb/ml/ie_ml_data_generation.proto

import type { EnsembleType as _suki_pb_ml_EnsembleType } from "../../../suki/pb/ml/EnsembleType";

export interface GeneratedData {
  uri?: string;
  ensemble_type?: _suki_pb_ml_EnsembleType | keyof typeof _suki_pb_ml_EnsembleType;
  example_count?: number;
}

export interface GeneratedData__Output {
  uri: string;
  ensemble_type: keyof typeof _suki_pb_ml_EnsembleType;
  example_count: number;
}
