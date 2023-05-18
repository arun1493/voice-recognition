// Original file: node_modules/protobufs/src/learningmotors/pb/emr/emr_identifiers.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../../google/protobuf/Timestamp";
import type {
  EmrNoteType as _learningmotors_pb_emr_notetypes_EmrNoteType,
  EmrNoteType__Output as _learningmotors_pb_emr_notetypes_EmrNoteType__Output
} from "../../../learningmotors/pb/emr_notetypes/EmrNoteType";

export interface EMRIdentifiers {
  user_emr_id?: string;
  user_suki_id?: string;
  user_department_emr_id?: string;
  patient_emr_id?: string;
  patient_suki_id?: string;
  appointment_department_emr_id?: string;
  appointment_emr_id?: string;
  appointment_suki_id?: string;
  encounter_emr_id?: string;
  patient_note_suki_id?: string;
  encounter_date?: _google_protobuf_Timestamp | null;
  user_emr_id_type?: string;
  patient_emr_id_type?: string;
  encounter_emr_id_type?: string;
  appointment_department_emr_id_type?: string;
  patient_fhir_id?: string;
  encounter_fhir_id?: string;
  emr_note_id?: string;
  emr_note_type?: _learningmotors_pb_emr_notetypes_EmrNoteType | null;
}

export interface EMRIdentifiers__Output {
  user_emr_id: string;
  user_suki_id: string;
  user_department_emr_id: string;
  patient_emr_id: string;
  patient_suki_id: string;
  appointment_department_emr_id: string;
  appointment_emr_id: string;
  appointment_suki_id: string;
  encounter_emr_id: string;
  patient_note_suki_id: string;
  encounter_date: _google_protobuf_Timestamp__Output | null;
  user_emr_id_type: string;
  patient_emr_id_type: string;
  encounter_emr_id_type: string;
  appointment_department_emr_id_type: string;
  patient_fhir_id: string;
  encounter_fhir_id: string;
  emr_note_id: string;
  emr_note_type: _learningmotors_pb_emr_notetypes_EmrNoteType__Output | null;
}
