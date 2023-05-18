// Original file: node_modules/protobufs/src/suki/pb/emr/section_mapper/ms_emr_section_mapper.proto

import type {
  Section as _suki_pb_emr_Section,
  Section__Output as _suki_pb_emr_Section__Output
} from "../../../../suki/pb/emr/Section";

export interface Mapping {
  suki_section_id?: string;
  emr_section?: _suki_pb_emr_Section | null;
  aliases?: string[];
}

export interface Mapping__Output {
  suki_section_id: string;
  emr_section: _suki_pb_emr_Section__Output | null;
  aliases: string[];
}
