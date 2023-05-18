// Original file: node_modules/protobufs/src/suki/pb/auther/auther.proto

import type {
  User as _suki_pb_auther_User,
  User__Output as _suki_pb_auther_User__Output
} from "../../../suki/pb/auther/User";

export interface UpsertUserRequest {
  user?: _suki_pb_auther_User | null;
}

export interface UpsertUserRequest__Output {
  user: _suki_pb_auther_User__Output | null;
}
