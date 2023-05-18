// Original file: node_modules/protobufs/src/suki/pb/vocera/sv.proto

import type {
  DetectIntentResult as _suki_pb_vocera_DetectIntentResult,
  DetectIntentResult__Output as _suki_pb_vocera_DetectIntentResult__Output
} from "../../../suki/pb/vocera/DetectIntentResult";
import type {
  Status as _suki_pb_vocera_Status,
  Status__Output as _suki_pb_vocera_Status__Output
} from "../../../suki/pb/vocera/Status";
import type { SpeechEventType as _suki_pb_vocera_SpeechEventType } from "../../../suki/pb/vocera/SpeechEventType";

export interface IntentResponse {
  intent_result?: _suki_pb_vocera_DetectIntentResult | null;
  error?: _suki_pb_vocera_Status | null;
  event_type?: _suki_pb_vocera_SpeechEventType | keyof typeof _suki_pb_vocera_SpeechEventType;
  audio_data?: Buffer | Uint8Array | string;
  processing_complete?: boolean;
  request_uuid?: string;
  version?: string;
  iusf_json?: string;
  response?: "intent_result" | "error" | "event_type" | "audio_data" | "processing_complete";
}

export interface IntentResponse__Output {
  intent_result?: _suki_pb_vocera_DetectIntentResult__Output | null;
  error?: _suki_pb_vocera_Status__Output | null;
  event_type?: keyof typeof _suki_pb_vocera_SpeechEventType;
  audio_data?: Buffer;
  processing_complete?: boolean;
  request_uuid: string;
  version: string;
  iusf_json: string;
  response: "intent_result" | "error" | "event_type" | "audio_data" | "processing_complete";
}
