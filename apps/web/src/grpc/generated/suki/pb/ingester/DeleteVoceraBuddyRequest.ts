// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface DeleteVoceraBuddyRequest {
  project_id?: string;
  user_id?: string;
  buddy_user_id?: string;
  request_user_id?: string;
}

export interface DeleteVoceraBuddyRequest__Output {
  project_id: string;
  user_id: string;
  buddy_user_id: string;
  request_user_id: string;
}
