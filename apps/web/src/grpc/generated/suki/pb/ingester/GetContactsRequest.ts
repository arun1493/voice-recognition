// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface GetContactsRequest {
  project_id?: string;
  facility_id?: string;
  contact_ids?: string[];
}

export interface GetContactsRequest__Output {
  project_id: string;
  facility_id: string;
  contact_ids: string[];
}
