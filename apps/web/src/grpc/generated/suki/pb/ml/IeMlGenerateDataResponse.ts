// Original file: node_modules/protobufs/src/suki/pb/ml/ie_ml_data_generation.proto

import type { SystemType as _suki_pb_ml_SystemType } from "../../../suki/pb/ml/SystemType";
import type { DataSource as _suki_pb_ml_DataSource } from "../../../suki/pb/ml/DataSource";
import type {
  GeneratedData as _suki_pb_ml_GeneratedData,
  GeneratedData__Output as _suki_pb_ml_GeneratedData__Output
} from "../../../suki/pb/ml/GeneratedData";

export interface IeMlGenerateDataResponse {
  system_type?: _suki_pb_ml_SystemType | keyof typeof _suki_pb_ml_SystemType;
  source?: _suki_pb_ml_DataSource | keyof typeof _suki_pb_ml_DataSource;
  data?: _suki_pb_ml_GeneratedData[];
}

export interface IeMlGenerateDataResponse__Output {
  system_type: keyof typeof _suki_pb_ml_SystemType;
  source: keyof typeof _suki_pb_ml_DataSource;
  data: _suki_pb_ml_GeneratedData__Output[];
}
