// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

import type {
  Composition as _learningmotors_pb_composer_Composition,
  Composition__Output as _learningmotors_pb_composer_Composition__Output
} from "../../../learningmotors/pb/composer/Composition";

export interface UndoResponse {
  section_in_focus_id?: string;
  updated_composition?: _learningmotors_pb_composer_Composition | null;
}

export interface UndoResponse__Output {
  section_in_focus_id: string;
  updated_composition: _learningmotors_pb_composer_Composition__Output | null;
}
