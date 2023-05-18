// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/resource.proto

import type {
  SpeechResult as _suki_pb_ssp_v1_SpeechResult,
  SpeechResult__Output as _suki_pb_ssp_v1_SpeechResult__Output
} from "../../../../suki/pb/ssp/v1/SpeechResult";
import type {
  Slot as _suki_pb_ssp_v1_Slot,
  Slot__Output as _suki_pb_ssp_v1_Slot__Output
} from "../../../../suki/pb/ssp/v1/Slot";

export interface CommandResult {
  intent?: _suki_pb_ssp_v1_SpeechResult | null;
  slots?: _suki_pb_ssp_v1_Slot[];
}

export interface CommandResult__Output {
  intent: _suki_pb_ssp_v1_SpeechResult__Output | null;
  slots: _suki_pb_ssp_v1_Slot__Output[];
}
