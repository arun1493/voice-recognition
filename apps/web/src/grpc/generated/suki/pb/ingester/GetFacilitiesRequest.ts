// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface GetFacilitiesRequest {
  project_id?: string;
  facility_ids?: string[];
}

export interface GetFacilitiesRequest__Output {
  project_id: string;
  facility_ids: string[];
}
