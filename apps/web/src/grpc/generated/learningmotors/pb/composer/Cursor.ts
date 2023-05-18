// Original file: node_modules/protobufs/src/learningmotors/pb/composer/sections.proto

import type { Actor as _learningmotors_pb_composer_Actor } from "../../../learningmotors/pb/composer/Actor";

export interface Cursor {
  actor?: _learningmotors_pb_composer_Actor | keyof typeof _learningmotors_pb_composer_Actor;
  location?: number;
}

export interface Cursor__Output {
  actor: keyof typeof _learningmotors_pb_composer_Actor;
  location: number;
}
