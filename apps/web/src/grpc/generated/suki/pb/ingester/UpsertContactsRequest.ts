// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  Contact as _suki_pb_ingester_Contact,
  Contact__Output as _suki_pb_ingester_Contact__Output
} from "../../../suki/pb/ingester/Contact";

export interface UpsertContactsRequest {
  project_id?: string;
  request_user_id?: string;
  contacts?: _suki_pb_ingester_Contact[];
}

export interface UpsertContactsRequest__Output {
  project_id: string;
  request_user_id: string;
  contacts: _suki_pb_ingester_Contact__Output[];
}
