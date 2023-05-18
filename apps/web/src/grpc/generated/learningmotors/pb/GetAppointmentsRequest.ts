// Original file: node_modules/protobufs/src/learningmotors/pb/appointments.proto

import type {
  Timestamp as _google_protobuf_Timestamp,
  Timestamp__Output as _google_protobuf_Timestamp__Output
} from "../../google/protobuf/Timestamp";
import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../learningmotors/pb/scope/Scope";

export interface GetAppointmentsRequest {
  owner_id?: string;
  starts_at_range_beginning?: _google_protobuf_Timestamp | null;
  starts_at_range_end?: _google_protobuf_Timestamp | null;
  patient_id?: string;
  ids?: string[];
  scope?: _learningmotors_pb_scope_Scope | null;
  emr_encounter_ids?: string[];
  emr_ids?: string[];
  filter_internal_appointments?: boolean;
}

export interface GetAppointmentsRequest__Output {
  owner_id: string;
  starts_at_range_beginning: _google_protobuf_Timestamp__Output | null;
  starts_at_range_end: _google_protobuf_Timestamp__Output | null;
  patient_id: string;
  ids: string[];
  scope: _learningmotors_pb_scope_Scope__Output | null;
  emr_encounter_ids: string[];
  emr_ids: string[];
  filter_internal_appointments: boolean;
}
