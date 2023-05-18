// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  AnalyticsTransaction as _suki_pb_ingester_AnalyticsTransaction,
  AnalyticsTransaction__Output as _suki_pb_ingester_AnalyticsTransaction__Output
} from "../../../suki/pb/ingester/AnalyticsTransaction";

export interface AddAnalyticsTransactionRequest {
  transaction?: _suki_pb_ingester_AnalyticsTransaction | null;
}

export interface AddAnalyticsTransactionRequest__Output {
  transaction: _suki_pb_ingester_AnalyticsTransaction__Output | null;
}
