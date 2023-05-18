// Original file: node_modules/protobufs/src/suki/pb/ssp/ce/ssp_commands_engine_resource.proto

import type {
  Intent as _suki_pb_ssp_ce_Intent,
  Intent__Output as _suki_pb_ssp_ce_Intent__Output
} from "../../../../suki/pb/ssp/ce/Intent";
import type {
  DetectIntentSlot as _suki_pb_ssp_ce_DetectIntentSlot,
  DetectIntentSlot__Output as _suki_pb_ssp_ce_DetectIntentSlot__Output
} from "../../../../suki/pb/ssp/ce/DetectIntentSlot";

export interface DetectIntentResult {
  intent?: _suki_pb_ssp_ce_Intent | null;
  slots?: _suki_pb_ssp_ce_DetectIntentSlot[];
  intent_confidence?: number | string;
  intent_detected?: boolean;
}

export interface DetectIntentResult__Output {
  intent: _suki_pb_ssp_ce_Intent__Output | null;
  slots: _suki_pb_ssp_ce_DetectIntentSlot__Output[];
  intent_confidence: number;
  intent_detected: boolean;
}
