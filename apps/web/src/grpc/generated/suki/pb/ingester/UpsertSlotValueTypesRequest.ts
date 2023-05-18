// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface UpsertSlotValueTypesRequest {
  request_user_id?: string;
  slot_value_types?: string[];
}

export interface UpsertSlotValueTypesRequest__Output {
  request_user_id: string;
  slot_value_types: string[];
}
