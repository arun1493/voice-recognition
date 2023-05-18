// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  Facility as _suki_pb_ingester_Facility,
  Facility__Output as _suki_pb_ingester_Facility__Output
} from "../../../suki/pb/ingester/Facility";

export interface UpsertFacilitiesRequest {
  project_id?: string;
  request_user_id?: string;
  facilities?: _suki_pb_ingester_Facility[];
}

export interface UpsertFacilitiesRequest__Output {
  project_id: string;
  request_user_id: string;
  facilities: _suki_pb_ingester_Facility__Output[];
}
