// Original file: node_modules/protobufs/src/learningmotors/pb/macros/macros.proto

import type {
  SlotName as _learningmotors_pb_macros_SlotName,
  SlotName__Output as _learningmotors_pb_macros_SlotName__Output
} from "../../../learningmotors/pb/macros/SlotName";

// Original file: node_modules/protobufs/src/learningmotors/pb/macros/macros.proto

export enum _learningmotors_pb_macros_Tag_Type {
  DEFAULT = 0,
  MACRO_TYPE = 1,
  MACRO_TAG = 2,
  BLOCK_TAG = 3,
  MACRO_NAME = 4
}

export interface Tag {
  name?: _learningmotors_pb_macros_SlotName | null;
  type?: _learningmotors_pb_macros_Tag_Type | keyof typeof _learningmotors_pb_macros_Tag_Type;
}

export interface Tag__Output {
  name: _learningmotors_pb_macros_SlotName__Output | null;
  type: keyof typeof _learningmotors_pb_macros_Tag_Type;
}
