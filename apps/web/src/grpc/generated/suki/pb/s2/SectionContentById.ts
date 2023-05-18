// Original file: node_modules/protobufs/src/suki/pb/s2/s2.proto

import type {
  SectionContent as _SectionContent,
  SectionContent__Output as _SectionContent__Output
} from "../../../SectionContent";

export interface SectionContentById {
  section_id?: string;
  section_content?: _SectionContent | null;
}

export interface SectionContentById__Output {
  section_id: string;
  section_content: _SectionContent__Output | null;
}
