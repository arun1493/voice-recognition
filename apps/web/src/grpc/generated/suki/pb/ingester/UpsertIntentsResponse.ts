// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  AddedIntent as _suki_pb_ingester_AddedIntent,
  AddedIntent__Output as _suki_pb_ingester_AddedIntent__Output
} from "../../../suki/pb/ingester/AddedIntent";

export interface UpsertIntentsResponse {
  added_intents?: _suki_pb_ingester_AddedIntent[];
  error_intents?: _suki_pb_ingester_AddedIntent[];
}

export interface UpsertIntentsResponse__Output {
  added_intents: _suki_pb_ingester_AddedIntent__Output[];
  error_intents: _suki_pb_ingester_AddedIntent__Output[];
}
