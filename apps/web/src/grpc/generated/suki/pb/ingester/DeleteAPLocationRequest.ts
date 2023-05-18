// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface DeleteAPLocationRequest {
  project_id?: string;
  aplocation_id?: string;
  request_user_id?: string;
}

export interface DeleteAPLocationRequest__Output {
  project_id: string;
  aplocation_id: string;
  request_user_id: string;
}
