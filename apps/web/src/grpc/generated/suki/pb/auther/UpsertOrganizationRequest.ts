// Original file: node_modules/protobufs/src/suki/pb/auther/auther.proto

import type {
  Organization as _suki_pb_auther_Organization,
  Organization__Output as _suki_pb_auther_Organization__Output
} from "../../../suki/pb/auther/Organization";

export interface UpsertOrganizationRequest {
  organization?: _suki_pb_auther_Organization | null;
}

export interface UpsertOrganizationRequest__Output {
  organization: _suki_pb_auther_Organization__Output | null;
}
