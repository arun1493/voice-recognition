// Original file: node_modules/protobufs/src/learningmotors/pb/emrsubmitter/emrsubmitter.proto

import type {
  SubmissionStatus as _suki_pb_emr_SubmissionStatus,
  SubmissionStatus__Output as _suki_pb_emr_SubmissionStatus__Output
} from "../../../suki/pb/emr/SubmissionStatus";

export interface SubmitCompositionResponse {
  status?: _suki_pb_emr_SubmissionStatus | null;
}

export interface SubmitCompositionResponse__Output {
  status: _suki_pb_emr_SubmissionStatus__Output | null;
}
