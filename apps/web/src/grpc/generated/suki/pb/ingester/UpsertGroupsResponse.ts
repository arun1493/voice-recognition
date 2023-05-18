// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  AddedGroup as _suki_pb_ingester_AddedGroup,
  AddedGroup__Output as _suki_pb_ingester_AddedGroup__Output
} from "../../../suki/pb/ingester/AddedGroup";

export interface UpsertGroupsResponse {
  added_groups?: _suki_pb_ingester_AddedGroup[];
  error_groups?: _suki_pb_ingester_AddedGroup[];
}

export interface UpsertGroupsResponse__Output {
  added_groups: _suki_pb_ingester_AddedGroup__Output[];
  error_groups: _suki_pb_ingester_AddedGroup__Output[];
}
