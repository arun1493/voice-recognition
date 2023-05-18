// Original file: node_modules/protobufs/src/suki/pb/emr/submission.proto

// Original file: node_modules/protobufs/src/suki/pb/emr/submission.proto

export enum _suki_pb_emr_SubmissionWarning_Type {
  UNKNOWN = 0,
  NO_ENCOUNTER = 1,
  ENCOUNTER_NOT_OPEN = 2,
  UNKNOWN_PATIENT = 3,
  NO_LAB_RESULTS = 4,
  NO_VALID_OB_EPISODE = 5
}

export interface SubmissionWarning {
  type?: _suki_pb_emr_SubmissionWarning_Type | keyof typeof _suki_pb_emr_SubmissionWarning_Type;
  message?: string;
}

export interface SubmissionWarning__Output {
  type: keyof typeof _suki_pb_emr_SubmissionWarning_Type;
  message: string;
}
