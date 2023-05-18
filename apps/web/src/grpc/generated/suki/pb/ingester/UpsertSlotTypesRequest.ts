// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  SlotType as _suki_pb_ingester_SlotType,
  SlotType__Output as _suki_pb_ingester_SlotType__Output
} from "../../../suki/pb/ingester/SlotType";

export interface UpsertSlotTypesRequest {
  request_user_id?: string;
  slot_types?: _suki_pb_ingester_SlotType[];
}

export interface UpsertSlotTypesRequest__Output {
  request_user_id: string;
  slot_types: _suki_pb_ingester_SlotType__Output[];
}
