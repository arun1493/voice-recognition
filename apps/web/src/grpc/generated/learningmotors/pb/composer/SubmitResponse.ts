// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

import type {
  SubmissionStatus as _suki_pb_emr_SubmissionStatus,
  SubmissionStatus__Output as _suki_pb_emr_SubmissionStatus__Output
} from "../../../suki/pb/emr/SubmissionStatus";

export interface SubmitResponse {
  note_id?: string;
  submission_status?: _suki_pb_emr_SubmissionStatus | null;
}

export interface SubmitResponse__Output {
  note_id: string;
  submission_status: _suki_pb_emr_SubmissionStatus__Output | null;
}
