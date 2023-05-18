// Original file: node_modules/protobufs/src/learningmotors/pb/emr/update_notification.proto

import type {
  EMRIdentifiers as _learningmotors_pb_emr_EMRIdentifiers,
  EMRIdentifiers__Output as _learningmotors_pb_emr_EMRIdentifiers__Output
} from "../../../learningmotors/pb/emr/EMRIdentifiers";
import type { EMRType as _learningmotors_pb_emrtypes_EMRType } from "../../../learningmotors/pb/emrtypes/EMRType";
import type {
  RecordDataDetail as _learningmotors_pb_emr_RecordDataDetail,
  RecordDataDetail__Output as _learningmotors_pb_emr_RecordDataDetail__Output
} from "../../../learningmotors/pb/emr/RecordDataDetail";
import type { _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus } from "../../../suki/pb/emr/note_mapper/Mapping";
import type { EMRSecondaryType as _learningmotors_pb_emrtypes_EMRSecondaryType } from "../../../learningmotors/pb/emrtypes/EMRSecondaryType";

// Original file: node_modules/protobufs/src/learningmotors/pb/emr/update_notification.proto

export enum _learningmotors_pb_emr_Record_Type {
  ADDED = 0
}

export interface Record {
  organization_id?: string;
  content?: string;
  emr_identifiers?: _learningmotors_pb_emr_EMRIdentifiers | null;
  emr_type?: _learningmotors_pb_emrtypes_EMRType | keyof typeof _learningmotors_pb_emrtypes_EMRType;
  emr_version?: string;
  data_type?: string;
  type?: _learningmotors_pb_emr_Record_Type | keyof typeof _learningmotors_pb_emr_Record_Type;
  record_data_detail?: _learningmotors_pb_emr_RecordDataDetail | null;
  EmrNoteStatus?:
    | _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus
    | keyof typeof _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus;
  emr_secondary_type?:
    | _learningmotors_pb_emrtypes_EMRSecondaryType
    | keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
  skip_publish_update?: boolean;
}

export interface Record__Output {
  organization_id: string;
  content: string;
  emr_identifiers: _learningmotors_pb_emr_EMRIdentifiers__Output | null;
  emr_type: keyof typeof _learningmotors_pb_emrtypes_EMRType;
  emr_version: string;
  data_type: string;
  type: keyof typeof _learningmotors_pb_emr_Record_Type;
  record_data_detail: _learningmotors_pb_emr_RecordDataDetail__Output | null;
  EmrNoteStatus: keyof typeof _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus;
  emr_secondary_type: keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
  skip_publish_update: boolean;
}
