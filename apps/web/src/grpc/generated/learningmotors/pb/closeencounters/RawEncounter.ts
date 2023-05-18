// Original file: node_modules/protobufs/src/learningmotors/pb/closeencounters/update_notification.proto

import type {
  EMRIdentifiers as _learningmotors_pb_emr_EMRIdentifiers,
  EMRIdentifiers__Output as _learningmotors_pb_emr_EMRIdentifiers__Output
} from "../../../learningmotors/pb/emr/EMRIdentifiers";
import type { EMRType as _learningmotors_pb_emrtypes_EMRType } from "../../../learningmotors/pb/emrtypes/EMRType";
import type { _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus } from "../../../suki/pb/emr/note_mapper/Mapping";
import type { EMRSecondaryType as _learningmotors_pb_emrtypes_EMRSecondaryType } from "../../../learningmotors/pb/emrtypes/EMRSecondaryType";

// Original file: node_modules/protobufs/src/learningmotors/pb/closeencounters/update_notification.proto

export enum _learningmotors_pb_closeencounters_RawEncounter_Type {
  ADDED = 0,
  UPDATED = 1
}

export interface RawEncounter {
  organization_id?: string;
  encounter_uri?: string;
  emr_identifiers?: _learningmotors_pb_emr_EMRIdentifiers | null;
  emr_type?: _learningmotors_pb_emrtypes_EMRType | keyof typeof _learningmotors_pb_emrtypes_EMRType;
  emr_version?: string;
  data_type?: string;
  type?:
    | _learningmotors_pb_closeencounters_RawEncounter_Type
    | keyof typeof _learningmotors_pb_closeencounters_RawEncounter_Type;
  EmrNoteStatus?:
    | _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus
    | keyof typeof _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus;
  emr_secondary_type?:
    | _learningmotors_pb_emrtypes_EMRSecondaryType
    | keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
}

export interface RawEncounter__Output {
  organization_id: string;
  encounter_uri: string;
  emr_identifiers: _learningmotors_pb_emr_EMRIdentifiers__Output | null;
  emr_type: keyof typeof _learningmotors_pb_emrtypes_EMRType;
  emr_version: string;
  data_type: string;
  type: keyof typeof _learningmotors_pb_closeencounters_RawEncounter_Type;
  EmrNoteStatus: keyof typeof _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus;
  emr_secondary_type: keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
}
