// Original file: node_modules/protobufs/src/suki/pb/ssp/ce/ssp_commands_engine_resource.proto

import type {
  DetectIntentSlotValues as _suki_pb_ssp_ce_DetectIntentSlotValues,
  DetectIntentSlotValues__Output as _suki_pb_ssp_ce_DetectIntentSlotValues__Output
} from "../../../../suki/pb/ssp/ce/DetectIntentSlotValues";

export interface DetectIntentSlot {
  slot_type?: string;
  slot_filled?: boolean;
  slot_mandatory?: boolean;
  slot_values?: _suki_pb_ssp_ce_DetectIntentSlotValues[];
}

export interface DetectIntentSlot__Output {
  slot_type: string;
  slot_filled: boolean;
  slot_mandatory: boolean;
  slot_values: _suki_pb_ssp_ce_DetectIntentSlotValues__Output[];
}
