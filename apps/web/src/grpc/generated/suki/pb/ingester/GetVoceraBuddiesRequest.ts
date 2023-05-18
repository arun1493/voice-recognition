// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface GetVoceraBuddiesRequest {
  project_id?: string;
  facility_id?: string;
  user_ids?: string[];
  buddy_user_ids?: string[];
}

export interface GetVoceraBuddiesRequest__Output {
  project_id: string;
  facility_id: string;
  user_ids: string[];
  buddy_user_ids: string[];
}
