// Original file: node_modules/protobufs/src/learningmotors/pb/composer/compositions.proto

import type {
  Section as _learningmotors_pb_composer_Section,
  Section__Output as _learningmotors_pb_composer_Section__Output
} from "../../../learningmotors/pb/composer/Section";

export interface GetSectionsResponse {
  sections?: { [key: string]: _learningmotors_pb_composer_Section };
}

export interface GetSectionsResponse__Output {
  sections: { [key: string]: _learningmotors_pb_composer_Section__Output };
}
