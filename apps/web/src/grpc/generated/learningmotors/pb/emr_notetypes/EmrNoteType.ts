// Original file: node_modules/protobufs/src/learningmotors/pb/emr_notetypes/emr_notetypes.proto

import type { SpecialtyType as _learningmotors_pb_emr_notetypes_SpecialtyType } from "../../../learningmotors/pb/emr_notetypes/SpecialtyType";
import type {
  Section as _suki_pb_emr_Section,
  Section__Output as _suki_pb_emr_Section__Output
} from "../../../suki/pb/emr/Section";

export interface EmrNoteType {
  id?: string;
  code?: string;
  name?: string;
  code_system?: string;
  specialty_type?:
    | _learningmotors_pb_emr_notetypes_SpecialtyType
    | keyof typeof _learningmotors_pb_emr_notetypes_SpecialtyType;
  allowed_sections?: _suki_pb_emr_Section[];
  system_generated?: boolean;
}

export interface EmrNoteType__Output {
  id: string;
  code: string;
  name: string;
  code_system: string;
  specialty_type: keyof typeof _learningmotors_pb_emr_notetypes_SpecialtyType;
  allowed_sections: _suki_pb_emr_Section__Output[];
  system_generated: boolean;
}
