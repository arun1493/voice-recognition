// Original file: node_modules/protobufs/src/suki/pb/obliviate/obliviate.proto

import type {
  ServiceDataDeletionStatus as _suki_pb_obliviate_ServiceDataDeletionStatus,
  ServiceDataDeletionStatus__Output as _suki_pb_obliviate_ServiceDataDeletionStatus__Output
} from "../../../suki/pb/obliviate/ServiceDataDeletionStatus";

export interface ObliviateDeleteResponse {
  service_data_deletion_status?: _suki_pb_obliviate_ServiceDataDeletionStatus[];
}

export interface ObliviateDeleteResponse__Output {
  service_data_deletion_status: _suki_pb_obliviate_ServiceDataDeletionStatus__Output[];
}
