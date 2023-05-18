// Original file: node_modules/protobufs/src/suki/pb/ml/ms_online.proto

import type { SystemType as _suki_pb_ml_SystemType } from "../../../suki/pb/ml/SystemType";
import type {
  EnsembleResults as _suki_pb_ml_EnsembleResults,
  EnsembleResults__Output as _suki_pb_ml_EnsembleResults__Output
} from "../../../suki/pb/ml/EnsembleResults";

export interface SystemResults {
  type?: _suki_pb_ml_SystemType | keyof typeof _suki_pb_ml_SystemType;
  version?: string;
  ensemble_results?: _suki_pb_ml_EnsembleResults[];
}

export interface SystemResults__Output {
  type: keyof typeof _suki_pb_ml_SystemType;
  version: string;
  ensemble_results: _suki_pb_ml_EnsembleResults__Output[];
}
