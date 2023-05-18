// Original file: node_modules/protobufs/src/learningmotors/pb/organization/organization.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

// Original file: node_modules/protobufs/src/learningmotors/pb/organization/organization.proto

export enum _learningmotors_pb_organization_Organization_EnhancedReviewOption {
  DEFAULT_ON = 0,
  DEFAULT_OFF = 1,
  OFF = 2
}

export interface Organization {
  id?: string;
  name?: string;
  created_at?: _google_protobuf_Timestamp | null;
  updated_at?: _google_protobuf_Timestamp | null;
  deleted_at?: _google_protobuf_Timestamp | null;
  gcp_account_id?: string;
  enhanced_review?:
    | _learningmotors_pb_organization_Organization_EnhancedReviewOption
    | keyof typeof _learningmotors_pb_organization_Organization_EnhancedReviewOption;
  is_sukix_org?: boolean;
}

export interface Organization__Output {
  id: string;
  name: string;
  created_at: _google_protobuf_Timestamp__Output | null;
  updated_at: _google_protobuf_Timestamp__Output | null;
  deleted_at: _google_protobuf_Timestamp__Output | null;
  gcp_account_id: string;
  enhanced_review: keyof typeof _learningmotors_pb_organization_Organization_EnhancedReviewOption;
  is_sukix_org: boolean;
}
