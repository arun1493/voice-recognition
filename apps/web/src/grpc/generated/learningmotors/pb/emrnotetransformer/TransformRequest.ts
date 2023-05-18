// Original file: node_modules/protobufs/src/learningmotors/pb/emrnotetransformer/emrnotetransformer.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../../learningmotors/pb/scope/Scope";
import type { EMRType as _learningmotors_pb_emrtypes_EMRType } from "../../../learningmotors/pb/emrtypes/EMRType";
import type { EMRSecondaryType as _learningmotors_pb_emrtypes_EMRSecondaryType } from "../../../learningmotors/pb/emrtypes/EMRSecondaryType";
import type { _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus } from "../../../suki/pb/emr/note_mapper/Mapping";
import type {
  EmrNoteType as _learningmotors_pb_emr_notetypes_EmrNoteType,
  EmrNoteType__Output as _learningmotors_pb_emr_notetypes_EmrNoteType__Output
} from "../../../learningmotors/pb/emr_notetypes/EmrNoteType";

export interface TransformRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  emr_type?: _learningmotors_pb_emrtypes_EMRType | keyof typeof _learningmotors_pb_emrtypes_EMRType;
  emr_secondary_type?:
    | _learningmotors_pb_emrtypes_EMRSecondaryType
    | keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
  suki_user_id?: string;
  emr_user_id?: string;
  suki_patient_id?: string;
  emr_encounter_id?: string;
  emr_appointment_id?: string;
  emr_note_id?: string;
  raw_note?: string;
  EmrNoteStatus?:
    | _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus
    | keyof typeof _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus;
  EmrNoteType?: _learningmotors_pb_emr_notetypes_EmrNoteType | null;
  suki_composition_id?: string;
  suki_note_id?: string;
}

export interface TransformRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  emr_type: keyof typeof _learningmotors_pb_emrtypes_EMRType;
  emr_secondary_type: keyof typeof _learningmotors_pb_emrtypes_EMRSecondaryType;
  suki_user_id: string;
  emr_user_id: string;
  suki_patient_id: string;
  emr_encounter_id: string;
  emr_appointment_id: string;
  emr_note_id: string;
  raw_note: string;
  EmrNoteStatus: keyof typeof _suki_pb_emr_note_mapper_Mapping_EmrNoteStatus;
  EmrNoteType: _learningmotors_pb_emr_notetypes_EmrNoteType__Output | null;
  suki_composition_id: string;
  suki_note_id: string;
}
