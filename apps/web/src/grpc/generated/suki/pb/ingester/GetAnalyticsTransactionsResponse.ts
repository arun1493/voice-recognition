// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  AnalyticsTransaction as _suki_pb_ingester_AnalyticsTransaction,
  AnalyticsTransaction__Output as _suki_pb_ingester_AnalyticsTransaction__Output
} from "../../../suki/pb/ingester/AnalyticsTransaction";

export interface GetAnalyticsTransactionsResponse {
  transactions?: _suki_pb_ingester_AnalyticsTransaction[];
  next_offset?: number;
}

export interface GetAnalyticsTransactionsResponse__Output {
  transactions: _suki_pb_ingester_AnalyticsTransaction__Output[];
  next_offset: number;
}
