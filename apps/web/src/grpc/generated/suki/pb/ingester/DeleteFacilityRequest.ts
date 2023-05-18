// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface DeleteFacilityRequest {
  project_id?: string;
  facility_id?: string;
  request_user_id?: string;
}

export interface DeleteFacilityRequest__Output {
  project_id: string;
  facility_id: string;
  request_user_id: string;
}
