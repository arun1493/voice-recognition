// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

export enum _learningmotors_pb_composer_SectionUpdateEvent_Type {
  UNKNOWN = 0,
  UPDATED = 1,
  ADDED = 2
}

export interface SectionUpdateEvent {
  type?:
    | _learningmotors_pb_composer_SectionUpdateEvent_Type
    | keyof typeof _learningmotors_pb_composer_SectionUpdateEvent_Type;
  section_id?: string;
}

export interface SectionUpdateEvent__Output {
  type: keyof typeof _learningmotors_pb_composer_SectionUpdateEvent_Type;
  section_id: string;
}
