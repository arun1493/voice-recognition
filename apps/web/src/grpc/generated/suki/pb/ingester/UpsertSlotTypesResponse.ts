// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  AddedSlotType as _suki_pb_ingester_AddedSlotType,
  AddedSlotType__Output as _suki_pb_ingester_AddedSlotType__Output
} from "../../../suki/pb/ingester/AddedSlotType";
import type {
  AddedIntent as _suki_pb_ingester_AddedIntent,
  AddedIntent__Output as _suki_pb_ingester_AddedIntent__Output
} from "../../../suki/pb/ingester/AddedIntent";

export interface UpsertSlotTypesResponse {
  added_slot_types?: _suki_pb_ingester_AddedSlotType[];
  error_slot_types?: _suki_pb_ingester_AddedIntent[];
}

export interface UpsertSlotTypesResponse__Output {
  added_slot_types: _suki_pb_ingester_AddedSlotType__Output[];
  error_slot_types: _suki_pb_ingester_AddedIntent__Output[];
}
