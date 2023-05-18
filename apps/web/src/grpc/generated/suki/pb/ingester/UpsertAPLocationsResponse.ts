// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  AddedAPLocation as _suki_pb_ingester_AddedAPLocation,
  AddedAPLocation__Output as _suki_pb_ingester_AddedAPLocation__Output
} from "../../../suki/pb/ingester/AddedAPLocation";

export interface UpsertAPLocationsResponse {
  added_aplocations?: _suki_pb_ingester_AddedAPLocation[];
  error_aplocations?: _suki_pb_ingester_AddedAPLocation[];
}

export interface UpsertAPLocationsResponse__Output {
  added_aplocations: _suki_pb_ingester_AddedAPLocation__Output[];
  error_aplocations: _suki_pb_ingester_AddedAPLocation__Output[];
}
