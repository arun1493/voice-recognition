// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

import type {
  Composition as _learningmotors_pb_composer_Composition,
  Composition__Output as _learningmotors_pb_composer_Composition__Output
} from "../../../learningmotors/pb/composer/Composition";
import type {
  PageResponse as _learningmotors_pb_PageResponse,
  PageResponse__Output as _learningmotors_pb_PageResponse__Output
} from "../../../learningmotors/pb/PageResponse";

export interface GetResponse {
  compositions?: _learningmotors_pb_composer_Composition[];
  page_response?: _learningmotors_pb_PageResponse | null;
}

export interface GetResponse__Output {
  compositions: _learningmotors_pb_composer_Composition__Output[];
  page_response: _learningmotors_pb_PageResponse__Output | null;
}
