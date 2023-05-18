// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface DeleteGroupRequest {
  project_id?: string;
  group_id?: string;
  request_user_id?: string;
}

export interface DeleteGroupRequest__Output {
  project_id: string;
  group_id: string;
  request_user_id: string;
}
