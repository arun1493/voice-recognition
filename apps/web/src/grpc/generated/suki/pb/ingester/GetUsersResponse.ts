// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  User as _suki_pb_ingester_User,
  User__Output as _suki_pb_ingester_User__Output
} from "../../../suki/pb/ingester/User";

export interface GetUsersResponse {
  users?: _suki_pb_ingester_User[];
}

export interface GetUsersResponse__Output {
  users: _suki_pb_ingester_User__Output[];
}
