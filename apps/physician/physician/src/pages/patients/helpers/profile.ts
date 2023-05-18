import i18n from "i18next";
import _isNil from "lodash/isNil";
import { differenceInDays, format, isToday } from "date-fns";

import { isNote } from "../../../helpers";
import { DATE_FORMAT } from "../../../constants";
import { Composition, Note, NoteOrComposition } from "../../../types";
import { appointmentReader, compositionReader, metadataReader, noteReader } from "../../../readers";

const NO_OF_DAYS_FOR_NOTE_TO_BE_RECENT = 5;

const getNoteServiceDate = (note: NoteOrComposition): Date | null => {
  const metadata = compositionReader.metadata(note);
  const appointment = metadataReader.appointment(metadata);
  const appointmentDate = appointmentReader.startsAt(appointment);

  if (!appointmentDate) {
    return null;
  }

  return new Date(appointmentDate);
};

const getNoteCreationDate = (note: NoteOrComposition): Date | null => {
  const creationDate = isNote(note)
    ? noteReader.compositionCreatedAt(note as Note)
    : compositionReader.createdAt(note as Composition);

  if (!creationDate) {
    return null;
  }

  return new Date(creationDate);
};

const isRecentNote = (note: NoteOrComposition): boolean => {
  const dateOfService = getNoteServiceDate(note);
  const creationDate = getNoteCreationDate(note);

  if (!dateOfService && !creationDate) {
    return false;
  }
  const date = dateOfService || creationDate || new Date();

  const now = new Date();
  const diffInDays = differenceInDays(now, date);

  return diffInDays <= NO_OF_DAYS_FOR_NOTE_TO_BE_RECENT;
};

const getDateToBeDisplayed = (date?: Date | null): string => {
  if (_isNil(date)) {
    return i18n.t("date.unknown");
  }

  return isToday(date) ? i18n.t("date.today") : format(date, DATE_FORMAT.MMDDYYYY);
};

export { getDateToBeDisplayed, getNoteCreationDate, getNoteServiceDate, isRecentNote };
