// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

export enum _learningmotors_pb_composer_Source_SourceType {
  USER = 0,
  SYSTEM = 1
}

export interface Source {
  source_type?:
    | _learningmotors_pb_composer_Source_SourceType
    | keyof typeof _learningmotors_pb_composer_Source_SourceType;
  source_detail?: string;
}

export interface Source__Output {
  source_type: keyof typeof _learningmotors_pb_composer_Source_SourceType;
  source_detail: string;
}
