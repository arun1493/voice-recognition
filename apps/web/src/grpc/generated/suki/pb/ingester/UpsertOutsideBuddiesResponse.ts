// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  AddedOutsideBuddy as _suki_pb_ingester_AddedOutsideBuddy,
  AddedOutsideBuddy__Output as _suki_pb_ingester_AddedOutsideBuddy__Output
} from "../../../suki/pb/ingester/AddedOutsideBuddy";

export interface UpsertOutsideBuddiesResponse {
  added_outside_buddies?: _suki_pb_ingester_AddedOutsideBuddy[];
  error_outside_buddies?: _suki_pb_ingester_AddedOutsideBuddy[];
}

export interface UpsertOutsideBuddiesResponse__Output {
  added_outside_buddies: _suki_pb_ingester_AddedOutsideBuddy__Output[];
  error_outside_buddies: _suki_pb_ingester_AddedOutsideBuddy__Output[];
}
