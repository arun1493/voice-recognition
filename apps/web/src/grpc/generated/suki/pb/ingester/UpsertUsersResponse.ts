// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  AddedUser as _suki_pb_ingester_AddedUser,
  AddedUser__Output as _suki_pb_ingester_AddedUser__Output
} from "../../../suki/pb/ingester/AddedUser";

export interface UpsertUsersResponse {
  added_users?: _suki_pb_ingester_AddedUser[];
  error_users?: _suki_pb_ingester_AddedUser[];
}

export interface UpsertUsersResponse__Output {
  added_users: _suki_pb_ingester_AddedUser__Output[];
  error_users: _suki_pb_ingester_AddedUser__Output[];
}
