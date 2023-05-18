// Original file: node_modules/protobufs/src/learningmotors/pb/appointments.proto

import type {
  Scope as _learningmotors_pb_scope_Scope,
  Scope__Output as _learningmotors_pb_scope_Scope__Output
} from "../../learningmotors/pb/scope/Scope";

export interface GetMostRecentAppointmentRequest {
  scope?: _learningmotors_pb_scope_Scope | null;
  suki_user_id?: string;
  suki_patient_id?: string;
  emr_id_required?: boolean;
}

export interface GetMostRecentAppointmentRequest__Output {
  scope: _learningmotors_pb_scope_Scope__Output | null;
  suki_user_id: string;
  suki_patient_id: string;
  emr_id_required: boolean;
}
