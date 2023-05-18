// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface Facility {
  facility_id?: string;
  project_id?: string;
  facility_name?: string;
  alternative_spoken_name?: string;
}

export interface Facility__Output {
  facility_id: string;
  project_id: string;
  facility_name: string;
  alternative_spoken_name: string;
}
