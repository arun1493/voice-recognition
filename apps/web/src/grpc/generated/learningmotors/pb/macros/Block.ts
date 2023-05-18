// Original file: node_modules/protobufs/src/learningmotors/pb/macros/macros.proto

import type {
  Tag as _learningmotors_pb_macros_Tag,
  Tag__Output as _learningmotors_pb_macros_Tag__Output
} from "../../../learningmotors/pb/macros/Tag";

export interface Block {
  section_id?: string;
  content?: string;
  fields?: _learningmotors_pb_macros_Tag[];
  content_s2?: string;
}

export interface Block__Output {
  section_id: string;
  content: string;
  fields: _learningmotors_pb_macros_Tag__Output[];
  content_s2: string;
}
