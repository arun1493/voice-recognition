// Original file: node_modules/protobufs/src/learningmotors/pb/emraccounts/emraccounts.proto

import type { Destination as _suki_pb_emr_Destination } from "../../../suki/pb/emr/Destination";
import type {
  Section as _suki_pb_emr_Section,
  Section__Output as _suki_pb_emr_Section__Output
} from "../../../suki/pb/emr/Section";

export interface Capabilities {
  multiple_notes_allowed?: boolean;
  destinations?: (_suki_pb_emr_Destination | keyof typeof _suki_pb_emr_Destination)[];
  predefined_sections?: boolean;
  sections?: _suki_pb_emr_Section[];
}

export interface Capabilities__Output {
  multiple_notes_allowed: boolean;
  destinations: (keyof typeof _suki_pb_emr_Destination)[];
  predefined_sections: boolean;
  sections: _suki_pb_emr_Section__Output[];
}
