// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

import type {
  Composition as _learningmotors_pb_composer_Composition,
  Composition__Output as _learningmotors_pb_composer_Composition__Output
} from "../../../learningmotors/pb/composer/Composition";

// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

export enum _suki_pb_s2_CompositionResponse_CompositionResponseType {
  NEW = 0,
  UPDATED = 1
}

export interface CompositionResponse {
  note_composition?: _learningmotors_pb_composer_Composition | null;
  composition_response_type?:
    | _suki_pb_s2_CompositionResponse_CompositionResponseType
    | keyof typeof _suki_pb_s2_CompositionResponse_CompositionResponseType;
  section_in_focus_id?: string;
}

export interface CompositionResponse__Output {
  note_composition: _learningmotors_pb_composer_Composition__Output | null;
  composition_response_type: keyof typeof _suki_pb_s2_CompositionResponse_CompositionResponseType;
  section_in_focus_id: string;
}
