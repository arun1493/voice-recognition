// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
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

export interface GetRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
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
  source?: _learningmotors_pb_composer_Source | null;
}

export interface GetRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
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
  source: _learningmotors_pb_composer_Source__Output | null;
}
