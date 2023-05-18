// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

import type {
  VoceraBuddy as _suki_pb_ingester_VoceraBuddy,
  VoceraBuddy__Output as _suki_pb_ingester_VoceraBuddy__Output
} from "../../../suki/pb/ingester/VoceraBuddy";

export interface UpsertVoceraBuddiesRequest {
  project_id?: string;
  request_user_id?: string;
  vocera_buddies?: _suki_pb_ingester_VoceraBuddy[];
}

export interface UpsertVoceraBuddiesRequest__Output {
  project_id: string;
  request_user_id: string;
  vocera_buddies: _suki_pb_ingester_VoceraBuddy__Output[];
}
