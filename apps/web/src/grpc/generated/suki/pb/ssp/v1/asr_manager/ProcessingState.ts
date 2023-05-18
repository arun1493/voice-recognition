// Original file: node_modules/protobufs/src/suki/pb/ssp/asr_manager/asr_manager.proto

import type { ASR as _suki_pb_ssp_v1_ASR } from "../../../../../suki/pb/ssp/v1/ASR";
import type { State as _suki_pb_ssp_v1_asr_manager_State } from "../../../../../suki/pb/ssp/v1/asr_manager/State";

export interface ProcessingState {
  asr?: _suki_pb_ssp_v1_ASR | keyof typeof _suki_pb_ssp_v1_ASR;
  state?: _suki_pb_ssp_v1_asr_manager_State | keyof typeof _suki_pb_ssp_v1_asr_manager_State;
}

export interface ProcessingState__Output {
  asr: keyof typeof _suki_pb_ssp_v1_ASR;
  state: keyof typeof _suki_pb_ssp_v1_asr_manager_State;
}
