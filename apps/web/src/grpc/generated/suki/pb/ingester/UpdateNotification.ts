// Original file: node_modules/protobufs/src/suki/pb/ingester/notification.proto

import type {
  PrimaryKey as _suki_pb_ingester_PrimaryKey,
  PrimaryKey__Output as _suki_pb_ingester_PrimaryKey__Output
} from "../../../suki/pb/ingester/PrimaryKey";
import type { DataType as _suki_pb_ingester_DataType } from "../../../suki/pb/ingester/DataType";

// Original file: node_modules/protobufs/src/suki/pb/ingester/notification.proto

export enum _suki_pb_ingester_UpdateNotification_UpdateType {
  NONE = 0,
  ADDED = 1,
  UPDATED = 2,
  DELETED = 3
}

export interface UpdateNotification {
  project_id?: string;
  keys?: _suki_pb_ingester_PrimaryKey[];
  data_type?: _suki_pb_ingester_DataType | keyof typeof _suki_pb_ingester_DataType;
  update_type?:
    | _suki_pb_ingester_UpdateNotification_UpdateType
    | keyof typeof _suki_pb_ingester_UpdateNotification_UpdateType;
}

export interface UpdateNotification__Output {
  project_id: string;
  keys: _suki_pb_ingester_PrimaryKey__Output[];
  data_type: keyof typeof _suki_pb_ingester_DataType;
  update_type: keyof typeof _suki_pb_ingester_UpdateNotification_UpdateType;
}
