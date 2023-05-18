// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface AnalyticsTransaction {
  request_uuid?: string;
  intent_detection_ms?: number;
  entire_transaction_ms?: number;
  vocera_session_id?: string;
  vocera_doctor_user_id?: string;
  vocera_project_id?: string;
  vocera_facility_id?: string;
  input_client_context?: string;
  input_intent_context?: string;
  input_intent_text?: string;
  transaction_time?: _google_protobuf_Timestamp | null;
  audiofile_path?: string;
  audio_duration_ms?: number;
  audio_bytes?: number;
  intent_response?: string;
  internal?: boolean;
}

export interface AnalyticsTransaction__Output {
  request_uuid: string;
  intent_detection_ms: number;
  entire_transaction_ms: number;
  vocera_session_id: string;
  vocera_doctor_user_id: string;
  vocera_project_id: string;
  vocera_facility_id: string;
  input_client_context: string;
  input_intent_context: string;
  input_intent_text: string;
  transaction_time: _google_protobuf_Timestamp__Output | null;
  audiofile_path: string;
  audio_duration_ms: number;
  audio_bytes: number;
  intent_response: string;
  internal: boolean;
}
