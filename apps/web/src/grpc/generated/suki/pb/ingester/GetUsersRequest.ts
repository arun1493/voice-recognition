// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface GetUsersRequest {
  project_id?: string;
  facility_id?: string;
  user_ids?: string[];
}

export interface GetUsersRequest__Output {
  project_id: string;
  facility_id: string;
  user_ids: string[];
}
