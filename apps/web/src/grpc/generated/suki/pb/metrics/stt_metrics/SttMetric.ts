// Original file: node_modules/protobufs/src/suki/pb/metrics/stt_metric/stt_metric.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../../google/protobuf/Timestamp";
import type {
  Intent as _suki_pb_metrics_stt_metrics_Intent,
  Intent__Output as _suki_pb_metrics_stt_metrics_Intent__Output
} from "../../../../suki/pb/metrics/stt_metrics/Intent";

export interface SttMetric {
  source?: string;
  metric_timestamp?: _google_protobuf_Timestamp | null;
  user_id?: string;
  organization_id?: string;
  session_id?: string;
  request_id?: string;
  num_words?: number;
  audio_start_time?: _google_protobuf_Timestamp | null;
  intent_finalized_time?: _google_protobuf_Timestamp | null;
  intent?: _suki_pb_metrics_stt_metrics_Intent | null;
}

export interface SttMetric__Output {
  source: string;
  metric_timestamp: _google_protobuf_Timestamp__Output | null;
  user_id: string;
  organization_id: string;
  session_id: string;
  request_id: string;
  num_words: number;
  audio_start_time: _google_protobuf_Timestamp__Output | null;
  intent_finalized_time: _google_protobuf_Timestamp__Output | null;
  intent: _suki_pb_metrics_stt_metrics_Intent__Output | null;
}
