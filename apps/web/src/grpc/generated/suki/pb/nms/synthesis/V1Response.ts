// Original file: node_modules/protobufs/src/suki/pb/nms/synthesis/synthesizer.proto

import type {
  Composition as _learningmotors_pb_composer_Composition,
  Composition__Output as _learningmotors_pb_composer_Composition__Output
} from "../../../../learningmotors/pb/composer/Composition";
import type {
  SectionS2 as _learningmotors_pb_composer_SectionS2,
  SectionS2__Output as _learningmotors_pb_composer_SectionS2__Output
} from "../../../../learningmotors/pb/composer/SectionS2";
import type {
  RecommendationResponse as _suki_pb_s2_RecommendationResponse,
  RecommendationResponse__Output as _suki_pb_s2_RecommendationResponse__Output
} from "../../../../suki/pb/s2/RecommendationResponse";

export interface V1Response {
  composition?: _learningmotors_pb_composer_Composition | null;
  sectionS2?: _learningmotors_pb_composer_SectionS2 | null;
  recommendations?: _suki_pb_s2_RecommendationResponse | null;
  v1response?: "composition" | "sectionS2" | "recommendations";
}

export interface V1Response__Output {
  composition?: _learningmotors_pb_composer_Composition__Output | null;
  sectionS2?: _learningmotors_pb_composer_SectionS2__Output | null;
  recommendations?: _suki_pb_s2_RecommendationResponse__Output | null;
  v1response: "composition" | "sectionS2" | "recommendations";
}
