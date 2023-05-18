// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

import type {
  Metadata as _learningmotors_pb_composer_Metadata,
  Metadata__Output as _learningmotors_pb_composer_Metadata__Output
} from "../../../learningmotors/pb/composer/Metadata";
import type {
  Section as _learningmotors_pb_composer_Section,
  Section__Output as _learningmotors_pb_composer_Section__Output
} from "../../../learningmotors/pb/composer/Section";
import type {
  SectionS2 as _learningmotors_pb_composer_SectionS2,
  SectionS2__Output as _learningmotors_pb_composer_SectionS2__Output
} from "../../../learningmotors/pb/composer/SectionS2";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";

// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

export enum _suki_pb_sms_UpdateCompositionRequest_UpdateReason {
  DEFAULT = 0,
  TRANSCRIPTION = 1,
  MANUAL_EDIT = 2,
  MACRO = 3,
  MACHINE_EDIT = 4,
  COPY_FORWARD = 5
}

export interface UpdateCompositionRequest {
  organization_id?: string;
  id?: string;
  metadata?: _learningmotors_pb_composer_Metadata | null;
  sections?: _learningmotors_pb_composer_Section[];
  sections_s2?: _learningmotors_pb_composer_SectionS2[];
  reason?:
    | _suki_pb_sms_UpdateCompositionRequest_UpdateReason
    | keyof typeof _suki_pb_sms_UpdateCompositionRequest_UpdateReason;
  request_sent_time?: _google_protobuf_Timestamp | null;
}

export interface UpdateCompositionRequest__Output {
  organization_id: string;
  id: string;
  metadata: _learningmotors_pb_composer_Metadata__Output | null;
  sections: _learningmotors_pb_composer_Section__Output[];
  sections_s2: _learningmotors_pb_composer_SectionS2__Output[];
  reason: keyof typeof _suki_pb_sms_UpdateCompositionRequest_UpdateReason;
  request_sent_time: _google_protobuf_Timestamp__Output | null;
}
