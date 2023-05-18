import _forEach from "lodash/forEach";

import { NOTE_STATUS } from "../constants";
import { convertPatientNoteFromProto } from "./conversions";

const getConvertedPatientNotes = (notes) => {
  return notes.map((note) => {
    const convertedNote = convertPatientNoteFromProto(note);
    if (!note.composition_id) {
      convertedNote.metadata.status = NOTE_STATUS.IMPORTED_FROM_EMR as any;
    }
    return convertedNote;
  });
};

const getMultipleNotesStatus = (notesOrCompositions) => {
  const { INCOMPLETE, IMPORTED_FROM_EMR, NEED_DOCTOR_SIGN_OFF, SUBMITTED_TO_EMR, USER_IS_DONE } = NOTE_STATUS;
  const allNotesStatuses: Array<string> = [];
  let status = USER_IS_DONE;

  _forEach(notesOrCompositions, (item) => {
    allNotesStatuses.push(item?.status || item?.metadata?.status);
  });

  // don't change order
  if (allNotesStatuses.includes(IMPORTED_FROM_EMR)) status = IMPORTED_FROM_EMR;
  if (allNotesStatuses.includes(SUBMITTED_TO_EMR)) status = SUBMITTED_TO_EMR;
  if (allNotesStatuses.includes(NEED_DOCTOR_SIGN_OFF)) status = NEED_DOCTOR_SIGN_OFF;
  if (allNotesStatuses.includes(USER_IS_DONE)) status = USER_IS_DONE;
  if (allNotesStatuses.includes(INCOMPLETE)) status = INCOMPLETE;
  return status;
};

export { getConvertedPatientNotes, getMultipleNotesStatus };
