// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  AddedVoceraBuddy as _suki_pb_ingester_AddedVoceraBuddy,
  AddedVoceraBuddy__Output as _suki_pb_ingester_AddedVoceraBuddy__Output
} from "../../../suki/pb/ingester/AddedVoceraBuddy";

export interface UpsertVoceraBuddiesResponse {
  added_vocera_buddies?: _suki_pb_ingester_AddedVoceraBuddy[];
  error_vocera_buddies?: _suki_pb_ingester_AddedVoceraBuddy[];
}

export interface UpsertVoceraBuddiesResponse__Output {
  added_vocera_buddies: _suki_pb_ingester_AddedVoceraBuddy__Output[];
  error_vocera_buddies: _suki_pb_ingester_AddedVoceraBuddy__Output[];
}
