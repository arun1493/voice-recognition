// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

export enum _learningmotors_pb_composer_EMRStatus_Code {
  DEFAULT = 0,
  OK = 1,
  WARNING = 2,
  NO_EMR = 3
}

export interface EMRStatus {
  code?: _learningmotors_pb_composer_EMRStatus_Code | keyof typeof _learningmotors_pb_composer_EMRStatus_Code;
  error_description?: string;
}

export interface EMRStatus__Output {
  code: keyof typeof _learningmotors_pb_composer_EMRStatus_Code;
  error_description: string;
}
