// Original file: node_modules/protobufs/src/suki/pb/sectioncontent/sectioncontent.proto

import type { Content as _Content, Content__Output as _Content__Output } from "./Content";

export interface SectionContent {
  number_of_strings?: number;
  total_string_length?: number;
  total_string?: string;
  content?: _Content[];
}

export interface SectionContent__Output {
  number_of_strings: number;
  total_string_length: number;
  total_string: string;
  content: _Content__Output[];
}
