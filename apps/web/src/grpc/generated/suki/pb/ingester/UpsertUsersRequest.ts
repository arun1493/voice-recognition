// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  User as _suki_pb_ingester_User,
  User__Output as _suki_pb_ingester_User__Output
} from "../../../suki/pb/ingester/User";

export interface UpsertUsersRequest {
  project_id?: string;
  request_user_id?: string;
  users?: _suki_pb_ingester_User[];
}

export interface UpsertUsersRequest__Output {
  project_id: string;
  request_user_id: string;
  users: _suki_pb_ingester_User__Output[];
}
