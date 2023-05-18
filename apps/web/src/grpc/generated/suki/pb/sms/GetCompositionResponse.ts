// Original file: node_modules/protobufs/src/suki/pb/sms/sms.proto

import type {
  Composition as _learningmotors_pb_composer_Composition,
  Composition__Output as _learningmotors_pb_composer_Composition__Output
} from "../../../learningmotors/pb/composer/Composition";
import type {
  PageResponse as _learningmotors_pb_PageResponse,
  PageResponse__Output as _learningmotors_pb_PageResponse__Output
} from "../../../learningmotors/pb/PageResponse";

export interface GetCompositionResponse {
  compositions?: _learningmotors_pb_composer_Composition[];
  page_response?: _learningmotors_pb_PageResponse | null;
}

export interface GetCompositionResponse__Output {
  compositions: _learningmotors_pb_composer_Composition__Output[];
  page_response: _learningmotors_pb_PageResponse__Output | null;
}
