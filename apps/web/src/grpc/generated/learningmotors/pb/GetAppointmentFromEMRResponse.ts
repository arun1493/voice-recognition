// Original file: node_modules/protobufs/src/learningmotors/pb/appointments.proto

import type {
  Appointment as _learningmotors_pb_Appointment,
  Appointment__Output as _learningmotors_pb_Appointment__Output
} from "../../learningmotors/pb/Appointment";

export interface GetAppointmentFromEMRResponse {
  appointments?: _learningmotors_pb_Appointment[];
  job_id?: string;
}

export interface GetAppointmentFromEMRResponse__Output {
  appointments: _learningmotors_pb_Appointment__Output[];
  job_id: string;
}
