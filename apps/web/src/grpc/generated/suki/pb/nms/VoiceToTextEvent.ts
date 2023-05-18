// Original file: node_modules/protobufs/src/suki/pb/nms/nms_event.proto

import type { ASR as _suki_pb_ssp_v1_ASR } from "../../../suki/pb/ssp/v1/ASR";

export interface VoiceToTextEvent {
  text?: string;
  isFinal?: boolean;
  asr?: _suki_pb_ssp_v1_ASR | keyof typeof _suki_pb_ssp_v1_ASR;
}

export interface VoiceToTextEvent__Output {
  text: string;
  isFinal: boolean;
  asr: keyof typeof _suki_pb_ssp_v1_ASR;
}
