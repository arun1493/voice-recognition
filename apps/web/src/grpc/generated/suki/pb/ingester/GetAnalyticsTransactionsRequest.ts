// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface GetAnalyticsTransactionsRequest {
  start_time?: _google_protobuf_Timestamp | null;
  end_time?: _google_protobuf_Timestamp | null;
  project_id?: string;
  user_id?: string;
  limit?: number;
  offset?: number;
  request_ids?: string[];
}

export interface GetAnalyticsTransactionsRequest__Output {
  start_time: _google_protobuf_Timestamp__Output | null;
  end_time: _google_protobuf_Timestamp__Output | null;
  project_id: string;
  user_id: string;
  limit: number;
  offset: number;
  request_ids: string[];
}
