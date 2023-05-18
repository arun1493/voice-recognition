// Original file: node_modules/protobufs/src/suki/pb/payattention/deid.proto

import type {
  CustomReplacement as _suki_pb_payattention_CustomReplacement,
  CustomReplacement__Output as _suki_pb_payattention_CustomReplacement__Output
} from "../../../suki/pb/payattention/CustomReplacement";

// Original file: node_modules/protobufs/src/suki/pb/payattention/deid.proto

export enum _suki_pb_payattention_TransformationConfig_PHIType {
  ALL = 0,
  PERSON_NAME = 1,
  AGE = 2,
  DATE = 3,
  ADDRESS = 4,
  PHONE_OR_FAX = 5,
  EMAIL = 6,
  PERSON_ID = 7,
  MEDICAL_IDENTIFIERS = 8,
  URL = 9,
  DEVICE_IDS = 10,
  OTHER_IDS = 11
}

// Original file: node_modules/protobufs/src/suki/pb/payattention/deid.proto

export enum _suki_pb_payattention_TransformationConfig_TransformationType {
  REDACT = 0,
  REPLACE_WITH_TYPE = 1,
  REPLACE_WITH_CUSTOM = 2,
  ENCRYPT = 3
}

export interface TransformationConfig {
  phi_type?:
    | _suki_pb_payattention_TransformationConfig_PHIType
    | keyof typeof _suki_pb_payattention_TransformationConfig_PHIType;
  transformation_type?:
    | _suki_pb_payattention_TransformationConfig_TransformationType
    | keyof typeof _suki_pb_payattention_TransformationConfig_TransformationType;
  custom_replacement?: _suki_pb_payattention_CustomReplacement | null;
}

export interface TransformationConfig__Output {
  phi_type: keyof typeof _suki_pb_payattention_TransformationConfig_PHIType;
  transformation_type: keyof typeof _suki_pb_payattention_TransformationConfig_TransformationType;
  custom_replacement: _suki_pb_payattention_CustomReplacement__Output | null;
}
