// Original file: node_modules/protobufs/src/suki/pb/epic_voiceplatform/epic_s3.proto

import type {
  DetectIntentResult as _suki_pb_epic_voiceplatform_DetectIntentResult,
  DetectIntentResult__Output as _suki_pb_epic_voiceplatform_DetectIntentResult__Output
} from "../../../suki/pb/epic_voiceplatform/DetectIntentResult";

export interface IntentResponse {
  intent_result?: _suki_pb_epic_voiceplatform_DetectIntentResult | null;
}

export interface IntentResponse__Output {
  intent_result: _suki_pb_epic_voiceplatform_DetectIntentResult__Output | null;
}
