// Original file: node_modules/protobufs/src/suki/pb/payattention/deid.proto

import type {
  TransformationConfig as _suki_pb_payattention_TransformationConfig,
  TransformationConfig__Output as _suki_pb_payattention_TransformationConfig__Output
} from "../../../suki/pb/payattention/TransformationConfig";

export interface DeIdRequest {
  request_id?: string;
  text_payload?: string;
  transformation_configs?: _suki_pb_payattention_TransformationConfig[];
}

export interface DeIdRequest__Output {
  request_id: string;
  text_payload: string;
  transformation_configs: _suki_pb_payattention_TransformationConfig__Output[];
}
