// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface DeleteUserRequest {
  project_id?: string;
  user_id?: string;
  request_user_id?: string;
}

export interface DeleteUserRequest__Output {
  project_id: string;
  user_id: string;
  request_user_id: string;
}
