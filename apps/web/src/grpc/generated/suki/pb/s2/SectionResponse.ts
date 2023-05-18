// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

import type {
  SectionS2 as _learningmotors_pb_composer_SectionS2,
  SectionS2__Output as _learningmotors_pb_composer_SectionS2__Output
} from "../../../learningmotors/pb/composer/SectionS2";

// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

export enum _suki_pb_s2_SectionResponse_SectionResponseType {
  UPDATE = 0,
  ADD = 1,
  DELETE = 2,
  SAME_SECTION_NAME_ADDED = 3,
  SECTION_WITH_EMPTY_TITLE_ALREADY_EXISTS = 4,
  SCRIPT_INSERT = 5,
  NO_SECTION_IN_FOCUS_FOR_ANY_SECTION_MACRO = 6,
  NO_MATCHING_SECTION_FOUND_FOR_MACRO = 7,
  COPY_FORWARD_SECTION = 8,
  SCRIPT_CHANGE_SECTION = 9,
  UNDO_DELETE_THIS_UPDATE = 10,
  SECTION_FORMATTED = 11,
  ACCEPT_RECOMMENDATION = 12,
  REJECT_RECOMMENDATION = 13
}

export interface SectionResponse {
  sections?: _learningmotors_pb_composer_SectionS2[];
  section_response_type?:
    | _suki_pb_s2_SectionResponse_SectionResponseType
    | keyof typeof _suki_pb_s2_SectionResponse_SectionResponseType;
}

export interface SectionResponse__Output {
  sections: _learningmotors_pb_composer_SectionS2__Output[];
  section_response_type: keyof typeof _suki_pb_s2_SectionResponse_SectionResponseType;
}
