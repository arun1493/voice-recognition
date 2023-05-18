// Original file: node_modules/protobufs/src/suki/pb/epic_voiceplatform/epic_s3.proto

import type {
  DetechIntentSlotValues as _suki_pb_epic_voiceplatform_DetechIntentSlotValues,
  DetechIntentSlotValues__Output as _suki_pb_epic_voiceplatform_DetechIntentSlotValues__Output
} from "../../../suki/pb/epic_voiceplatform/DetechIntentSlotValues";

export interface DetectIntentSlot {
  slot_type?: string;
  slot_filled?: boolean;
  slot_mandatory?: boolean;
  slot_values?: _suki_pb_epic_voiceplatform_DetechIntentSlotValues[];
}

export interface DetectIntentSlot__Output {
  slot_type: string;
  slot_filled: boolean;
  slot_mandatory: boolean;
  slot_values: _suki_pb_epic_voiceplatform_DetechIntentSlotValues__Output[];
}
