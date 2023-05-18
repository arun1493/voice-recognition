// Original file: node_modules/protobufs/src/suki/pb/vocera/sv.proto

import type {
  Intent as _suki_pb_vocera_Intent,
  Intent__Output as _suki_pb_vocera_Intent__Output
} from "../../../suki/pb/vocera/Intent";
import type {
  DetectIntentSlot as _suki_pb_vocera_DetectIntentSlot,
  DetectIntentSlot__Output as _suki_pb_vocera_DetectIntentSlot__Output
} from "../../../suki/pb/vocera/DetectIntentSlot";

export interface DetectIntentResult {
  intent?: _suki_pb_vocera_Intent | null;
  slots?: _suki_pb_vocera_DetectIntentSlot[];
  intent_confidence?: number | string;
  intent_detected?: boolean;
}

export interface DetectIntentResult__Output {
  intent: _suki_pb_vocera_Intent__Output | null;
  slots: _suki_pb_vocera_DetectIntentSlot__Output[];
  intent_confidence: number;
  intent_detected: boolean;
}
