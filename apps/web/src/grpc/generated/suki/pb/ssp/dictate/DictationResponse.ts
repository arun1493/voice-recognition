// Original file: node_modules/protobufs/src/suki/pb/ssp/dictate/dictate.proto

import type { ResponseType as _suki_pb_ssp_common_ResponseType } from "../../../../suki/pb/ssp/common/ResponseType";
import type {
  Transcript as _suki_pb_ssp_dictate_Transcript,
  Transcript__Output as _suki_pb_ssp_dictate_Transcript__Output
} from "../../../../suki/pb/ssp/dictate/Transcript";

export interface DictationResponse {
  api_version?: string;
  response_type?: _suki_pb_ssp_common_ResponseType | keyof typeof _suki_pb_ssp_common_ResponseType;
  description?: string;
  transcripts?: _suki_pb_ssp_dictate_Transcript[];
  total_billed_time?: string;
}

export interface DictationResponse__Output {
  api_version: string;
  response_type: keyof typeof _suki_pb_ssp_common_ResponseType;
  description: string;
  transcripts: _suki_pb_ssp_dictate_Transcript__Output[];
  total_billed_time: string;
}
