// Original file: node_modules/protobufs/src/learningmotors/pb/appointments.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../google/protobuf/Timestamp";

// Original file: node_modules/protobufs/src/learningmotors/pb/appointments.proto

export enum _learningmotors_pb_Appointment_AppointmentType {
  DEFAULT = 0,
  NEW = 1,
  FOLLOW_UP = 2,
  PRE_OP = 3,
  POST_OP = 4,
  EHR_GENERATED = 5,
  NON_EMR_USER_GENERATED = 6
}

// Original file: node_modules/protobufs/src/learningmotors/pb/appointments.proto

export enum _learningmotors_pb_Appointment_EMREncounterStatus {
  UNKNOWN = 0,
  OPEN = 1,
  CLOSED = 2
}

export interface Appointment {
  id?: string;
  owner_id?: string;
  patient_id?: string;
  starts_at?: _google_protobuf_Timestamp | null;
  ends_at?: _google_protobuf_Timestamp | null;
  appointment_type?:
    | _learningmotors_pb_Appointment_AppointmentType
    | keyof typeof _learningmotors_pb_Appointment_AppointmentType;
  medical_procedure?: string;
  reason?: string;
  emr_id?: string;
  emr_encounter_id?: string;
  composition_id?: string;
  note_id?: string;
  created_at?: _google_protobuf_Timestamp | null;
  updated_at?: _google_protobuf_Timestamp | null;
  deleted_at?: _google_protobuf_Timestamp | null;
  emr_department_id?: string;
  emr_encounter_status?:
    | _learningmotors_pb_Appointment_EMREncounterStatus
    | keyof typeof _learningmotors_pb_Appointment_EMREncounterStatus;
  fhir_encounter_id?: string;
  fhir_encounter_id_type?: string;
  appointment_location_id?: string;
  fhir_id?: string;
  emr_user_id?: string;
  composition_ids?: string[];
  is_imported?: boolean;
  note_identifier?: "composition_id" | "note_id";
}

export interface Appointment__Output {
  id: string;
  owner_id: string;
  patient_id: string;
  starts_at: _google_protobuf_Timestamp__Output | null;
  ends_at: _google_protobuf_Timestamp__Output | null;
  appointment_type: keyof typeof _learningmotors_pb_Appointment_AppointmentType;
  medical_procedure: string;
  reason: string;
  emr_id: string;
  emr_encounter_id: string;
  composition_id?: string;
  note_id?: string;
  created_at: _google_protobuf_Timestamp__Output | null;
  updated_at: _google_protobuf_Timestamp__Output | null;
  deleted_at: _google_protobuf_Timestamp__Output | null;
  emr_department_id: string;
  emr_encounter_status: keyof typeof _learningmotors_pb_Appointment_EMREncounterStatus;
  fhir_encounter_id: string;
  fhir_encounter_id_type: string;
  appointment_location_id: string;
  fhir_id: string;
  emr_user_id: string;
  composition_ids: string[];
  is_imported: boolean;
  note_identifier: "composition_id" | "note_id";
}
