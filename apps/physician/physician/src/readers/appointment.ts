import _property from "lodash/property";
import { NoteStatus } from "@suki-web/suki-ui";

import { Appointment, Patient } from "../types";

const compositionId = _property<Appointment, string>("compositionId");
const compositionIds = _property<Appointment, Array<string>>("compositionIds");
const id = _property<Appointment, string>("id");
const startsAt = _property<Appointment, string>("startsAt");
const type = _property<Appointment, string>("type");
const emrDepartmentId = _property<Appointment, string>("emrDepartmentId");
const emrEncounterId = _property<Appointment, string>("emrEncounterId");
const noteId = _property<Appointment, string>("noteId");
const noteStatus = _property<Appointment, NoteStatus>("noteStatus");
const ownerId = _property<Appointment, string>("owner.id");
const patient = _property<Appointment, Patient>("patient");
const patientId = _property<Appointment, string>("patient.id");

export default {
  compositionId,
  compositionIds,
  emrDepartmentId,
  emrEncounterId,
  id,
  noteId,
  noteStatus,
  ownerId,
  patient,
  patientId,
  startsAt,
  type
};
