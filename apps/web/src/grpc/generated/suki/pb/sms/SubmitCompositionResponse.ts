// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

import type {
  SubmissionStatus as _suki_pb_emr_SubmissionStatus,
  SubmissionStatus__Output as _suki_pb_emr_SubmissionStatus__Output
} from "../../../suki/pb/emr/SubmissionStatus";
import type {
  Metadata as _learningmotors_pb_composer_Metadata,
  Metadata__Output as _learningmotors_pb_composer_Metadata__Output
} from "../../../learningmotors/pb/composer/Metadata";

export interface SubmitCompositionResponse {
  note_id?: string;
  submission_status?: _suki_pb_emr_SubmissionStatus | null;
  metadata?: _learningmotors_pb_composer_Metadata | null;
}

export interface SubmitCompositionResponse__Output {
  note_id: string;
  submission_status: _suki_pb_emr_SubmissionStatus__Output | null;
  metadata: _learningmotors_pb_composer_Metadata__Output | null;
}
