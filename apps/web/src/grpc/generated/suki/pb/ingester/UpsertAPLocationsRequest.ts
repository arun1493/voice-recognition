// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  APLocation as _suki_pb_ingester_APLocation,
  APLocation__Output as _suki_pb_ingester_APLocation__Output
} from "../../../suki/pb/ingester/APLocation";

export interface UpsertAPLocationsRequest {
  project_id?: string;
  request_user_id?: string;
  aplocations?: _suki_pb_ingester_APLocation[];
}

export interface UpsertAPLocationsRequest__Output {
  project_id: string;
  request_user_id: string;
  aplocations: _suki_pb_ingester_APLocation__Output[];
}
