// Original file: node_modules/protobufs/src/learningmotors/pb/notetypes/notetypes.proto

import type {
  Section as _learningmotors_pb_composer_Section,
  Section__Output as _learningmotors_pb_composer_Section__Output
} from "../../../learningmotors/pb/composer/Section";
import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type { Destination as _suki_pb_emr_Destination } from "../../../suki/pb/emr/Destination";
import type { Specialty as _learningmotors_pb_user_Specialty } from "../../../learningmotors/pb/user/Specialty";
import type {
  EmrNoteType as _learningmotors_pb_emr_notetypes_EmrNoteType,
  EmrNoteType__Output as _learningmotors_pb_emr_notetypes_EmrNoteType__Output
} from "../../../learningmotors/pb/emr_notetypes/EmrNoteType";

// Original file: node_modules/protobufs/src/learningmotors/pb/notetypes/notetypes.proto

export enum _learningmotors_pb_notetypes_NoteType_ContentType {
  UNKNOWN = 0,
  STATIC = 1,
  DYNAMIC = 2
}

// Original file: node_modules/protobufs/src/learningmotors/pb/notetypes/notetypes.proto

export enum _learningmotors_pb_notetypes_NoteType_Source {
  DEFAULT = 0,
  ADMIN = 1,
  USER = 2
}

export interface NoteType {
  id?: string;
  user_id?: string;
  name?: string;
  keywords?: string[];
  sections?: _learningmotors_pb_composer_Section[];
  created_at?: _google_protobuf_Timestamp | null;
  updated_at?: _google_protobuf_Timestamp | null;
  destinations?: (_suki_pb_emr_Destination | keyof typeof _suki_pb_emr_Destination)[];
  specialties?: (_learningmotors_pb_user_Specialty | keyof typeof _learningmotors_pb_user_Specialty)[];
  emr_note_type?: _learningmotors_pb_emr_notetypes_EmrNoteType | null;
  source?: _learningmotors_pb_notetypes_NoteType_Source | keyof typeof _learningmotors_pb_notetypes_NoteType_Source;
  content_type?:
    | _learningmotors_pb_notetypes_NoteType_ContentType
    | keyof typeof _learningmotors_pb_notetypes_NoteType_ContentType;
  hidden?: boolean;
}

export interface NoteType__Output {
  id: string;
  user_id: string;
  name: string;
  keywords: string[];
  sections: _learningmotors_pb_composer_Section__Output[];
  created_at: _google_protobuf_Timestamp__Output | null;
  updated_at: _google_protobuf_Timestamp__Output | null;
  destinations: (keyof typeof _suki_pb_emr_Destination)[];
  specialties: (keyof typeof _learningmotors_pb_user_Specialty)[];
  emr_note_type: _learningmotors_pb_emr_notetypes_EmrNoteType__Output | null;
  source: keyof typeof _learningmotors_pb_notetypes_NoteType_Source;
  content_type: keyof typeof _learningmotors_pb_notetypes_NoteType_ContentType;
  hidden: boolean;
}
