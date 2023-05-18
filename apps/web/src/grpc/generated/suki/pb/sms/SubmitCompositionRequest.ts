// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

import type { Actor as _learningmotors_pb_composer_Actor } from "../../../learningmotors/pb/composer/Actor";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

export interface SubmitCompositionRequest {
  organization_id?: string;
  id?: string;
  actor?: _learningmotors_pb_composer_Actor | keyof typeof _learningmotors_pb_composer_Actor;
  try_all_destinations?: boolean;
  bypass_qa?: boolean;
  is_signed_off?: boolean;
  request_sent_time?: _google_protobuf_Timestamp | null;
  emr_access_token?: string;
  check_open_encounters?: boolean;
}

export interface SubmitCompositionRequest__Output {
  organization_id: string;
  id: string;
  actor: keyof typeof _learningmotors_pb_composer_Actor;
  try_all_destinations: boolean;
  bypass_qa: boolean;
  is_signed_off: boolean;
  request_sent_time: _google_protobuf_Timestamp__Output | null;
  emr_access_token: string;
  check_open_encounters: boolean;
}
