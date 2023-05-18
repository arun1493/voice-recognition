// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

import type { _learningmotors_pb_composer_Metadata_Status } from "../../../learningmotors/pb/composer/Metadata";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type {
  PageRequest as _learningmotors_pb_PageRequest,
  PageRequest__Output as _learningmotors_pb_PageRequest__Output
} from "../../../learningmotors/pb/PageRequest";
import type {
  Source as _learningmotors_pb_composer_Source,
  Source__Output as _learningmotors_pb_composer_Source__Output
} from "../../../learningmotors/pb/composer/Source";

export interface GetCompositionRequest {
  organization_id?: string;
  ids?: string[];
  user_id?: string;
  patient_id?: string;
  status?: _learningmotors_pb_composer_Metadata_Status | keyof typeof _learningmotors_pb_composer_Metadata_Status;
  appointment_ids?: string[];
  include_metadata?: boolean;
  include_sections?: boolean;
  created_after?: _google_protobuf_Timestamp | null;
  created_before?: _google_protobuf_Timestamp | null;
  page_request?: _learningmotors_pb_PageRequest | null;
  request_sent_time?: _google_protobuf_Timestamp | null;
  include_pd_read_only?: boolean;
  source?: _learningmotors_pb_composer_Source | null;
}

export interface GetCompositionRequest__Output {
  organization_id: string;
  ids: string[];
  user_id: string;
  patient_id: string;
  status: keyof typeof _learningmotors_pb_composer_Metadata_Status;
  appointment_ids: string[];
  include_metadata: boolean;
  include_sections: boolean;
  created_after: _google_protobuf_Timestamp__Output | null;
  created_before: _google_protobuf_Timestamp__Output | null;
  page_request: _learningmotors_pb_PageRequest__Output | null;
  request_sent_time: _google_protobuf_Timestamp__Output | null;
  include_pd_read_only: boolean;
  source: _learningmotors_pb_composer_Source__Output | null;
}
