// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface Intent {
  intent_type?: string;
  num_slot_types?: number;
  slot_types?: string;
  mandatory_slots?: string;
  multiple_values_allowed_for_slots?: string;
}

export interface Intent__Output {
  intent_type: string;
  num_slot_types: number;
  slot_types: string;
  mandatory_slots: string;
  multiple_values_allowed_for_slots: string;
}
