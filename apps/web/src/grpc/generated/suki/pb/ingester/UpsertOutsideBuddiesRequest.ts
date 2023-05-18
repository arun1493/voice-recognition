// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  OutsideBuddy as _suki_pb_ingester_OutsideBuddy,
  OutsideBuddy__Output as _suki_pb_ingester_OutsideBuddy__Output
} from "../../../suki/pb/ingester/OutsideBuddy";

export interface UpsertOutsideBuddiesRequest {
  project_id?: string;
  request_user_id?: string;
  outside_buddies?: _suki_pb_ingester_OutsideBuddy[];
}

export interface UpsertOutsideBuddiesRequest__Output {
  project_id: string;
  request_user_id: string;
  outside_buddies: _suki_pb_ingester_OutsideBuddy__Output[];
}
