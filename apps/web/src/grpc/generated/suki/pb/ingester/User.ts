// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface User {
  user_id?: string;
  project_id?: string;
  facility_id?: string;
  first_name?: string;
  last_name?: string;
  department_ids?: string;
  alternative_spoken_name1?: string;
  alternative_spoken_name2?: string;
  alternative_spoken_name3?: string;
  identifying_phrase?: string;
  doctor_prefix?: string;
}

export interface User__Output {
  user_id: string;
  project_id: string;
  facility_id: string;
  first_name: string;
  last_name: string;
  department_ids: string;
  alternative_spoken_name1: string;
  alternative_spoken_name2: string;
  alternative_spoken_name3: string;
  identifying_phrase: string;
  doctor_prefix: string;
}
