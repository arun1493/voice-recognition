// Original file: node_modules/protobufs/src/suki/pb/ml/ie_ml_train.proto

import type { EnsembleType as _suki_pb_ml_EnsembleType } from "../../../suki/pb/ml/EnsembleType";
import type { SystemType as _suki_pb_ml_SystemType } from "../../../suki/pb/ml/SystemType";

export interface IeMlTrainRequest {
  ensemble_type?: _suki_pb_ml_EnsembleType | keyof typeof _suki_pb_ml_EnsembleType;
  system_type?: _suki_pb_ml_SystemType | keyof typeof _suki_pb_ml_SystemType;
  training_data_uri?: string;
  training_session_id?: string;
}

export interface IeMlTrainRequest__Output {
  ensemble_type: keyof typeof _suki_pb_ml_EnsembleType;
  system_type: keyof typeof _suki_pb_ml_SystemType;
  training_data_uri: string;
  training_session_id: string;
}
