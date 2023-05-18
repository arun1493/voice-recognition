// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  Intent as _suki_pb_ingester_Intent,
  Intent__Output as _suki_pb_ingester_Intent__Output
} from "../../../suki/pb/ingester/Intent";

export interface UpsertIntentsRequest {
  request_user_id?: string;
  intents?: _suki_pb_ingester_Intent[];
}

export interface UpsertIntentsRequest__Output {
  request_user_id: string;
  intents: _suki_pb_ingester_Intent__Output[];
}
