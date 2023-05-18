// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

import type {
  Composition as _learningmotors_pb_composer_Composition,
  Composition__Output as _learningmotors_pb_composer_Composition__Output
} from "../../../learningmotors/pb/composer/Composition";

export interface CreateCompositionResponse {
  status?: boolean;
  created_composition?: _learningmotors_pb_composer_Composition | null;
}

export interface CreateCompositionResponse__Output {
  status: boolean;
  created_composition: _learningmotors_pb_composer_Composition__Output | null;
}
