// Original file: node_modules/protobufs/src/suki/pb/ssp/ce/ssp_commands_engine_resource.proto

export interface DetectIntentSlotValues {
  slot_value_type?: string;
  slot_value_accuracy?: number | string;
  slot_value_id?: string;
}

export interface DetectIntentSlotValues__Output {
  slot_value_type: string;
  slot_value_accuracy: number;
  slot_value_id: string;
}
