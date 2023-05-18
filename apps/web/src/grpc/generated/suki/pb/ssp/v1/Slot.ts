// Original file: node_modules/protobufs/src/suki/pb/ssp/v1/resource.proto

export interface Slot {
  slot_name?: string;
  slot_type?: string;
  confidence?: number | string;
}

export interface Slot__Output {
  slot_name: string;
  slot_type: string;
  confidence: number;
}
