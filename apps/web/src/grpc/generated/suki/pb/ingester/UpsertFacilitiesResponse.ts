// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  AddedFacility as _suki_pb_ingester_AddedFacility,
  AddedFacility__Output as _suki_pb_ingester_AddedFacility__Output
} from "../../../suki/pb/ingester/AddedFacility";

export interface UpsertFacilitiesResponse {
  added_facilities?: _suki_pb_ingester_AddedFacility[];
  error_facilities?: _suki_pb_ingester_AddedFacility[];
}

export interface UpsertFacilitiesResponse__Output {
  added_facilities: _suki_pb_ingester_AddedFacility__Output[];
  error_facilities: _suki_pb_ingester_AddedFacility__Output[];
}
