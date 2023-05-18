// Original file: node_modules/protobufs/src/suki/pb/ssp/iusf/digi_iusf.proto

import type {
  CustomData as _suki_pb_ssp_v1_CustomData,
  CustomData__Output as _suki_pb_ssp_v1_CustomData__Output
} from "../../../../suki/pb/ssp/v1/CustomData";

export interface RecognizeCommandRequest {
  text_content?: string;
  custom_data?: _suki_pb_ssp_v1_CustomData | null;
}

export interface RecognizeCommandRequest__Output {
  text_content: string;
  custom_data: _suki_pb_ssp_v1_CustomData__Output | null;
}
