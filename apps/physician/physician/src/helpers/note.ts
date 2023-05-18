import store from "store2";
import { t } from "i18next";
import _get from "lodash/get";
import { isToday } from "date-fns";
import _forEach from "lodash/forEach";
import _isEmpty from "lodash/isEmpty";
import { NoteStatus } from "@suki-web/suki-ui";

import { toastsActions } from "../redux/toast";
import { LOCAL_STORE, TOAST_TYPES } from "../constants";
import { compositionReader, metadataReader, noteReader, patientReader } from "../readers";
import { getNotePDFUri, getNotesPDFToPrintUri, getNotesPDFToSaveUri, logger } from "../api";
import { Dispatch, Note, NoteOrComposition, PrintNoteParams, PrintOrSaveNotesRequest } from "../types";

const getMultipleNotesStatus = (noteOrComposition?: NoteOrComposition[]) => {
  const { INCOMPLETE, NEED_DOCTOR_SIGN_OFF, SUBMITTED_TO_EMR, USER_IS_DONE } = NoteStatus;
  const allNotesStatuses: Array<string> = [];
  let status = USER_IS_DONE;

  _forEach(noteOrComposition, (item: NoteOrComposition) => {
    const status = _get(item, "metadata.status", "");
    allNotesStatuses.push(status);
  });

  // don't change order
  if (allNotesStatuses.includes(SUBMITTED_TO_EMR)) status = SUBMITTED_TO_EMR;
  if (allNotesStatuses.includes(NEED_DOCTOR_SIGN_OFF)) status = NEED_DOCTOR_SIGN_OFF;
  if (allNotesStatuses.includes(USER_IS_DONE)) status = USER_IS_DONE;
  if (allNotesStatuses.includes(INCOMPLETE)) status = INCOMPLETE;
  return status;
};

const isComposition = (noteOrComposition: NoteOrComposition) => {
  return !!_get(noteOrComposition, "id", "") && !_get(noteOrComposition, "noteId", "");
};

const isNote = (noteOrComposition: NoteOrComposition) => {
  return !!_get(noteOrComposition, "noteId", "");
};

const isNoteCompleted = (noteStatus?: NoteStatus) => {
  if (!noteStatus) return false;

  const completedNoteStatuses = [NoteStatus.SUBMITTED_TO_EMR];
  return completedNoteStatuses.includes(noteStatus);
};

const printNote = (params: PrintNoteParams) => {
  getNotePDFUri(params).then((data) => {
    const uri = data?.uri;
    if (!_isEmpty(uri)) {
      window.open(uri, "_blank");
    } else {
      logger.error({ message: "Could not print note. Please try again later." });
    }
  });
};

const bulkPrintNotes = (args: PrintOrSaveNotesRequest, dispatch: Dispatch) => {
  const compositionIds = _get(args, "compositionIds", []);
  const patientsNotesIds = _get(args, "patientsNotesIds", []);

  getNotesPDFToPrintUri({ compositionIds, patientsNotesIds })
    .then((data) => {
      const uri = data?.uri;
      if (!_isEmpty(uri)) {
        window.open(uri, "_blank");
      } else {
        dispatch(toastsActions.add({ message: t("errors.notes.print"), type: TOAST_TYPES.ERROR }));
      }
    })
    .catch(() => {
      dispatch(toastsActions.add({ message: t("errors.notes.print"), type: TOAST_TYPES.ERROR }));
    });
};

const bulkSaveNotes = (args: PrintOrSaveNotesRequest, dispatch: Dispatch) => {
  const compositionIds = _get(args, "compositionIds", []);
  const patientsNotesIds = _get(args, "patientsNotesIds", []);

  getNotesPDFToSaveUri({ compositionIds, patientsNotesIds })
    .then((data) => {
      const uri = data?.uri;
      if (!_isEmpty(uri)) {
        window.open(uri, "_blank");
      } else {
        dispatch(toastsActions.add({ message: t("errors.notes.save"), type: TOAST_TYPES.ERROR }));
      }
    })
    .catch(() => {
      dispatch(toastsActions.add({ message: t("errors.notes.save"), type: TOAST_TYPES.ERROR }));
    });
};

// get notes for patients from patientsList which is done TODAY
const filterTodaysNotesForPatients = (completedNotes: Array<Note>, patientsIds: Array<string>) => {
  const noteIds: Array<string> = [];

  _forEach(completedNotes, (note: Note) => {
    const metadata = noteReader.metadata(note);
    const patient = metadataReader.patient(metadata);
    const patientId = patientReader.id(patient);
    const noteId = noteReader.noteId(note);

    if (noteId && patientId && patientsIds.includes(patientId) && isTodaysNote(note)) {
      noteIds.push(noteId);
    }
  });

  return noteIds;
};

const isTodaysNote = (note: NoteOrComposition) => {
  const compositionCreatedAt = _get(note, "compositionCreatedAt") || _get(note, "createdAt");
  return isToday(new Date(compositionCreatedAt));
};

const isNoteReadOnly = (noteStatus: NoteStatus) => {
  const readOnlyNoteStatuses = [NoteStatus.SUBMITTED_TO_EMR];
  return readOnlyNoteStatuses.includes(noteStatus);
};

const isNoteCreatedByUser = (note: NoteOrComposition) => {
  const metadata = compositionReader.metadata(note);
  const currentUserId = store.get(LOCAL_STORE.USER_ID);
  const noteCreatorUserId = metadataReader.userId(metadata);

  return noteCreatorUserId === currentUserId;
};

const isNoteCreatedByUserOrSigned = (note: NoteOrComposition) => {
  const metadata = compositionReader.metadata(note);
  const currentUserId = store.get(LOCAL_STORE.USER_ID);

  const noteCreatorUserId = metadataReader.userId(metadata);
  const noteStatus = metadataReader.status(metadata);

  return noteCreatorUserId === currentUserId || noteStatus === NoteStatus.SUBMITTED_TO_EMR;
};

export {
  bulkPrintNotes,
  bulkSaveNotes,
  filterTodaysNotesForPatients,
  getMultipleNotesStatus,
  isComposition,
  isNote,
  isNoteCompleted,
  isNoteCreatedByUser,
  isNoteCreatedByUserOrSigned,
  isNoteReadOnly,
  isTodaysNote,
  printNote
};
