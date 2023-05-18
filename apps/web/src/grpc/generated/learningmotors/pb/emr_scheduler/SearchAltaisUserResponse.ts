// Original file: node_modules/protobufs/src/learningmotors/pb/emr_scheduler/emr_scheduler.proto

import type {
  Patient as _learningmotors_pb_patients_Patient,
  Patient__Output as _learningmotors_pb_patients_Patient__Output
} from "../../../learningmotors/pb/patients/Patient";
import type {
  Appointment as _learningmotors_pb_Appointment,
  Appointment__Output as _learningmotors_pb_Appointment__Output
} from "../../../learningmotors/pb/Appointment";

export interface SearchAltaisUserResponse {
  patient?: _learningmotors_pb_patients_Patient | null;
  comp_id?: string;
  pn_id?: string;
  appointment?: _learningmotors_pb_Appointment | null;
}

export interface SearchAltaisUserResponse__Output {
  patient: _learningmotors_pb_patients_Patient__Output | null;
  comp_id: string;
  pn_id: string;
  appointment: _learningmotors_pb_Appointment__Output | null;
}
