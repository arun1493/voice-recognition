// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  AddedContact as _suki_pb_ingester_AddedContact,
  AddedContact__Output as _suki_pb_ingester_AddedContact__Output
} from "../../../suki/pb/ingester/AddedContact";

export interface UpsertContactsResponse {
  added_contacts?: _suki_pb_ingester_AddedContact[];
  error_contacts?: _suki_pb_ingester_AddedContact[];
}

export interface UpsertContactsResponse__Output {
  added_contacts: _suki_pb_ingester_AddedContact__Output[];
  error_contacts: _suki_pb_ingester_AddedContact__Output[];
}
