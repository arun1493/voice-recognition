// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface GetAPLocationsRequest {
  project_id?: string;
  facility_id?: string;
  aplocation_ids?: string[];
}

export interface GetAPLocationsRequest__Output {
  project_id: string;
  facility_id: string;
  aplocation_ids: string[];
}
