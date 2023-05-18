// Original file: node_modules/protobufs/src/suki/pb/ssp/asr_manager/asr_manager.proto

import type {
  ProcessingState as _suki_pb_ssp_v1_asr_manager_ProcessingState,
  ProcessingState__Output as _suki_pb_ssp_v1_asr_manager_ProcessingState__Output
} from "../../../../../suki/pb/ssp/v1/asr_manager/ProcessingState";

export interface GetStatusResponse {
  session_id?: string;
  processingState?: _suki_pb_ssp_v1_asr_manager_ProcessingState[];
}

export interface GetStatusResponse__Output {
  session_id: string;
  processingState: _suki_pb_ssp_v1_asr_manager_ProcessingState__Output[];
}
