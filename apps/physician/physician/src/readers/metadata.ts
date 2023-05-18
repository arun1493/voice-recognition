import _property from "lodash/property";
import { NoteStatus } from "@suki-web/suki-ui";

import { EmrDestination, SecondaryEmr } from "../constants";
import { Appointment, Metadata, Patient, SubmissionStatus } from "../types";

const appointment = _property<Metadata, Appointment>("appointment");
const emrDestinations = _property<Metadata, EmrDestination[]>("submissionInformation.destinations");
const emrType = _property<Metadata, SecondaryEmr>("submissionInformation.emrSecondaryType");
const name = _property<Metadata, string>("name");
const noteId = _property<Metadata, string>("noteId");
const noteTypeId = _property<Metadata, string>("noteTypeId");
const partialDictationComposition = _property<Metadata, boolean>("partialDictation.partialDictationComposition");
const partialDictationReadOnly = _property<Metadata, boolean>("partialDictation.readOnly");
const patient = _property<Metadata, Patient>("patient");
const pulledNoteFromEmr = _property<Metadata, boolean>("pulledNoteFromEmr");
const reviewMessage = _property<Metadata, string>("reviewMessage");
const status = _property<Metadata, NoteStatus>("status");
const submissionStatus = _property<Metadata, SubmissionStatus | null>("submissionStatus");
const user = _property<Metadata, any>("user");
const userId = _property<Metadata, string>("user.id");

export default {
  appointment,
  emrDestinations,
  emrType,
  name,
  noteId,
  noteTypeId,
  partialDictationComposition,
  partialDictationReadOnly,
  patient,
  pulledNoteFromEmr,
  reviewMessage,
  status,
  submissionStatus,
  user,
  userId
};
