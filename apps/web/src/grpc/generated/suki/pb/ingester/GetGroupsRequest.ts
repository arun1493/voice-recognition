// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface GetGroupsRequest {
  project_id?: string;
  facility_id?: string;
  group_ids?: string[];
}

export interface GetGroupsRequest__Output {
  project_id: string;
  facility_id: string;
  group_ids: string[];
}
