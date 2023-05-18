// Original file: node_modules/protobufs/src/suki/pb/vocera/sv.proto

import type {
  DetechIntentSlotValues as _suki_pb_vocera_DetechIntentSlotValues,
  DetechIntentSlotValues__Output as _suki_pb_vocera_DetechIntentSlotValues__Output
} from "../../../suki/pb/vocera/DetechIntentSlotValues";

export interface DetectIntentSlot {
  slot_type?: string;
  slot_filled?: boolean;
  slot_mandatory?: boolean;
  slot_values?: _suki_pb_vocera_DetechIntentSlotValues[];
}

export interface DetectIntentSlot__Output {
  slot_type: string;
  slot_filled: boolean;
  slot_mandatory: boolean;
  slot_values: _suki_pb_vocera_DetechIntentSlotValues__Output[];
}
