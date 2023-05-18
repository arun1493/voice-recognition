// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  AddedSlotValueType as _suki_pb_ingester_AddedSlotValueType,
  AddedSlotValueType__Output as _suki_pb_ingester_AddedSlotValueType__Output
} from "../../../suki/pb/ingester/AddedSlotValueType";
import type {
  AddedIntent as _suki_pb_ingester_AddedIntent,
  AddedIntent__Output as _suki_pb_ingester_AddedIntent__Output
} from "../../../suki/pb/ingester/AddedIntent";

export interface UpsertSlotValueTypesResponse {
  added_slot_value_types?: _suki_pb_ingester_AddedSlotValueType[];
  error_slot_value_types?: _suki_pb_ingester_AddedIntent[];
}

export interface UpsertSlotValueTypesResponse__Output {
  added_slot_value_types: _suki_pb_ingester_AddedSlotValueType__Output[];
  error_slot_value_types: _suki_pb_ingester_AddedIntent__Output[];
}
