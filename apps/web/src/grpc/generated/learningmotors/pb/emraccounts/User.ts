// Original file: node_modules/protobufs/src/learningmotors/pb/emraccounts/emraccounts.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface User {
  suki_user_id?: string;
  emr_user_id?: string;
  emr_department_id?: string;
  timezone?: string;
  emr_username?: string;
  emr_user_id_type?: string;
  emr_department_id_type?: string;
  emr_department_name?: string;
  emr_first_name?: string;
  emr_last_name?: string;
  emr_user_id_list?: string[];
  schedule_health_check_timestamp?: _google_protobuf_Timestamp | null;
  note_health_check_timestamp?: _google_protobuf_Timestamp | null;
}

export interface User__Output {
  suki_user_id: string;
  emr_user_id: string;
  emr_department_id: string;
  timezone: string;
  emr_username: string;
  emr_user_id_type: string;
  emr_department_id_type: string;
  emr_department_name: string;
  emr_first_name: string;
  emr_last_name: string;
  emr_user_id_list: string[];
  schedule_health_check_timestamp: _google_protobuf_Timestamp__Output | null;
  note_health_check_timestamp: _google_protobuf_Timestamp__Output | null;
}
