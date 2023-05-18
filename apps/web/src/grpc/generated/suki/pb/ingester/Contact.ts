// Original file: node_modules/protobufs/src/suki/pb/ingester/ingester.proto

export interface Contact {
  contact_id?: string;
  project_id?: string;
  facility_id?: string;
  first_name?: string;
  last_name?: string;
  alternative_spoken_name1?: string;
  alternative_spoken_name2?: string;
  alternative_spoken_name3?: string;
  identifying_phrase?: string;
}

export interface Contact__Output {
  contact_id: string;
  project_id: string;
  facility_id: string;
  first_name: string;
  last_name: string;
  alternative_spoken_name1: string;
  alternative_spoken_name2: string;
  alternative_spoken_name3: string;
  identifying_phrase: string;
}
