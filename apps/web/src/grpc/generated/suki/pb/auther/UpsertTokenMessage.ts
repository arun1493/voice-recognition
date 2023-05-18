// Original file: node_modules/protobufs/src/suki/pb/auther/auther.proto

import type {
  Token as _suki_pb_auther_Token,
  Token__Output as _suki_pb_auther_Token__Output
} from "../../../suki/pb/auther/Token";

export interface UpsertTokenMessage {
  token?: _suki_pb_auther_Token | null;
}

export interface UpsertTokenMessage__Output {
  token: _suki_pb_auther_Token__Output | null;
}
