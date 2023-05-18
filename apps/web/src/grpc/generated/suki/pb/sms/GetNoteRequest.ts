// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

import type {
  PageRequest as _learningmotors_pb_PageRequest,
  PageRequest__Output as _learningmotors_pb_PageRequest__Output
} from "../../../learningmotors/pb/PageRequest";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface GetNoteRequest {
  organization_id?: string;
  page_request?: _learningmotors_pb_PageRequest | null;
  ids?: string[];
  user_id?: string;
  patient_id?: string;
  include_only_suki_notes?: boolean;
  include_sections?: boolean;
  appointment_ids?: string[];
  get_last_suki_version_if_possible?: boolean;
  request_sent_time?: _google_protobuf_Timestamp | null;
}

export interface GetNoteRequest__Output {
  organization_id: string;
  page_request: _learningmotors_pb_PageRequest__Output | null;
  ids: string[];
  user_id: string;
  patient_id: string;
  include_only_suki_notes: boolean;
  include_sections: boolean;
  appointment_ids: string[];
  get_last_suki_version_if_possible: boolean;
  request_sent_time: _google_protobuf_Timestamp__Output | null;
}
