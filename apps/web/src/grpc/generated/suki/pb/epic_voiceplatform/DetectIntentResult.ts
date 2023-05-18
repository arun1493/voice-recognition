// Original file: node_modules/protobufs/src/suki/pb/epic_voiceplatform/epic_s3.proto

import type {
  DetectIntent as _suki_pb_epic_voiceplatform_DetectIntent,
  DetectIntent__Output as _suki_pb_epic_voiceplatform_DetectIntent__Output
} from "../../../suki/pb/epic_voiceplatform/DetectIntent";
import type {
  DetectIntentSlot as _suki_pb_epic_voiceplatform_DetectIntentSlot,
  DetectIntentSlot__Output as _suki_pb_epic_voiceplatform_DetectIntentSlot__Output
} from "../../../suki/pb/epic_voiceplatform/DetectIntentSlot";

export interface DetectIntentResult {
  intent?: _suki_pb_epic_voiceplatform_DetectIntent | null;
  slots?: _suki_pb_epic_voiceplatform_DetectIntentSlot[];
  intent_confidence?: number | string;
  intent_detected?: boolean;
}

export interface DetectIntentResult__Output {
  intent: _suki_pb_epic_voiceplatform_DetectIntent__Output | null;
  slots: _suki_pb_epic_voiceplatform_DetectIntentSlot__Output[];
  intent_confidence: number;
  intent_detected: boolean;
}
