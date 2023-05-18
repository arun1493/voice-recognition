// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface Group {
  group_id?: string;
  project_id?: string;
  facility_id?: string;
  group_name?: string;
  member_name_singular?: string;
  member_name_plural?: string;
  alternative_spoken_name?: string;
}

export interface Group__Output {
  group_id: string;
  project_id: string;
  facility_id: string;
  group_name: string;
  member_name_singular: string;
  member_name_plural: string;
  alternative_spoken_name: string;
}
