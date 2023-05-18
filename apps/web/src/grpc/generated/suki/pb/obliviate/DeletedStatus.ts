// Original file: node_modules/protobufs/src/suki/pb/obliviate/obliviate.proto

import type { DeletionStatus as _suki_pb_obliviate_DeletionStatus } from "../../../suki/pb/obliviate/DeletionStatus";

export interface DeletedStatus {
  id?: string;
  service_statuses?: {
    [key: string]: _suki_pb_obliviate_DeletionStatus | keyof typeof _suki_pb_obliviate_DeletionStatus;
  };
}

export interface DeletedStatus__Output {
  id: string;
  service_statuses: { [key: string]: keyof typeof _suki_pb_obliviate_DeletionStatus };
}
