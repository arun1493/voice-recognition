// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface DeleteOutsideBuddyRequest {
  project_id?: string;
  buddy_user_id?: string;
  request_user_id?: string;
}

export interface DeleteOutsideBuddyRequest__Output {
  project_id: string;
  buddy_user_id: string;
  request_user_id: string;
}
