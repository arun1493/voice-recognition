// Original file: node_modules/protobufs/src/suki/pb/sectioncontent/sectioncontent.proto

import type { TextSource as _TextSource } from "./TextSource";

export interface Content {
  id?: number;
  start_offset?: number;
  end_offset?: number;
  string?: string;
  length_of_string?: number;
  is_bold?: number;
  is_italic?: number;
  source?: _TextSource | keyof typeof _TextSource;
}

export interface Content__Output {
  id: number;
  start_offset: number;
  end_offset: number;
  string: string;
  length_of_string: number;
  is_bold: number;
  is_italic: number;
  source: keyof typeof _TextSource;
}
