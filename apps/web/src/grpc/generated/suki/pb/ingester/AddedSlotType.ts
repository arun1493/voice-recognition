// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type { AddStatus as _suki_pb_ingester_AddStatus } from "../../../suki/pb/ingester/AddStatus";

export interface AddedSlotType {
  slot_type?: string;
  status?: _suki_pb_ingester_AddStatus | keyof typeof _suki_pb_ingester_AddStatus;
  error?: string;
}

export interface AddedSlotType__Output {
  slot_type: string;
  status: keyof typeof _suki_pb_ingester_AddStatus;
  error: string;
}
