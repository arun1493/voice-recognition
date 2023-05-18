// Original file: node_modules/protobufs/src/learningmotors/pb/emr_scheduler/update_notification_details.proto

import type {
  EMRIdentifiers as _learningmotors_pb_emr_EMRIdentifiers,
  EMRIdentifiers__Output as _learningmotors_pb_emr_EMRIdentifiers__Output
} from "../../../learningmotors/pb/emr/EMRIdentifiers";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type {
  User as _learningmotors_pb_emraccounts_User,
  User__Output as _learningmotors_pb_emraccounts_User__Output
} from "../../../learningmotors/pb/emraccounts/User";

export interface UpdateNotificationDetails {
  emr_organization_id?: string;
  emr_identifiers?: _learningmotors_pb_emr_EMRIdentifiers | null;
  starts_at?: _google_protobuf_Timestamp | null;
  emr_users?: _learningmotors_pb_emraccounts_User[];
  encounter_state?: string;
  sync_existing_emr_notes?: boolean;
}

export interface UpdateNotificationDetails__Output {
  emr_organization_id: string;
  emr_identifiers: _learningmotors_pb_emr_EMRIdentifiers__Output | null;
  starts_at: _google_protobuf_Timestamp__Output | null;
  emr_users: _learningmotors_pb_emraccounts_User__Output[];
  encounter_state: string;
  sync_existing_emr_notes: boolean;
}
