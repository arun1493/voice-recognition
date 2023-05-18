// Original file: node_modules/protobufs/src/learningmotors/pb/user/user.proto

import type {
  Role as _learningmotors_pb_user_Role,
  Role__Output as _learningmotors_pb_user_Role__Output
} from "../../../learningmotors/pb/user/Role";
import type {
  Person as _learningmotors_pb_common_Person,
  Person__Output as _learningmotors_pb_common_Person__Output
} from "../../../learningmotors/pb/common/Person";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type { Specialty as _learningmotors_pb_user_Specialty } from "../../../learningmotors/pb/user/Specialty";
import type { EnhancedReviewOption as _learningmotors_pb_user_EnhancedReviewOption } from "../../../learningmotors/pb/user/EnhancedReviewOption";

export interface User {
  id?: string;
  roles?: _learningmotors_pb_user_Role[];
  person?: _learningmotors_pb_common_Person | null;
  auth_id?: string;
  email?: string;
  specialty?: string;
  timezone?: string;
  created_at?: _google_protobuf_Timestamp | null;
  updated_at?: _google_protobuf_Timestamp | null;
  user_type?: string;
  activation_sent?: _google_protobuf_Timestamp | null;
  organization_id?: string;
  specialties?: (_learningmotors_pb_user_Specialty | keyof typeof _learningmotors_pb_user_Specialty)[];
  registered_at?: _google_protobuf_Timestamp | null;
  phone_number?: string;
  shared_user?: boolean;
  enhanced_review?:
    | _learningmotors_pb_user_EnhancedReviewOption
    | keyof typeof _learningmotors_pb_user_EnhancedReviewOption;
}

export interface User__Output {
  id: string;
  roles: _learningmotors_pb_user_Role__Output[];
  person: _learningmotors_pb_common_Person__Output | null;
  auth_id: string;
  email: string;
  specialty: string;
  timezone: string;
  created_at: _google_protobuf_Timestamp__Output | null;
  updated_at: _google_protobuf_Timestamp__Output | null;
  user_type: string;
  activation_sent: _google_protobuf_Timestamp__Output | null;
  organization_id: string;
  specialties: (keyof typeof _learningmotors_pb_user_Specialty)[];
  registered_at: _google_protobuf_Timestamp__Output | null;
  phone_number: string;
  shared_user: boolean;
  enhanced_review: keyof typeof _learningmotors_pb_user_EnhancedReviewOption;
}
