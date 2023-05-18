// Original file: node_modules/protobufs/src/suki/pb/ml/ie_ml_train.proto

import type {
  SystemResults as _suki_pb_ml_SystemResults,
  SystemResults__Output as _suki_pb_ml_SystemResults__Output
} from "../../../suki/pb/ml/SystemResults";

export interface IeMlTrainResponse {
  system_results?: _suki_pb_ml_SystemResults | null;
  training_session_id?: string;
}

export interface IeMlTrainResponse__Output {
  system_results: _suki_pb_ml_SystemResults__Output | null;
  training_session_id: string;
}
