// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  Group as _suki_pb_ingester_Group,
  Group__Output as _suki_pb_ingester_Group__Output
} from "../../../suki/pb/ingester/Group";

export interface UpsertGroupsRequest {
  project_id?: string;
  request_user_id?: string;
  groups?: _suki_pb_ingester_Group[];
}

export interface UpsertGroupsRequest__Output {
  project_id: string;
  request_user_id: string;
  groups: _suki_pb_ingester_Group__Output[];
}
