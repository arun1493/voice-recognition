// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface DeleteContactRequest {
  project_id?: string;
  contact_id?: string;
  request_user_id?: string;
}

export interface DeleteContactRequest__Output {
  project_id: string;
  contact_id: string;
  request_user_id: string;
}
