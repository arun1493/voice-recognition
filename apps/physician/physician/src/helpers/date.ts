import i18n from "i18next";
import { format } from "date-fns";

import { Timestamp } from "../types";
import { DATE_FORMAT } from "../constants";

const getNotesDate = (date: string) => {
  const noteDate = new Date(date);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (yesterday.toDateString() === noteDate.toDateString()) {
    return i18n.t("date.yesterday");
  }

  if (today.toDateString() === noteDate.toDateString()) {
    return i18n.t("date.today");
  }

  return format(noteDate, DATE_FORMAT.MMDDYYYY);
};

const getFormattedDate = (date?: Date | string, dateFormat = DATE_FORMAT.MMDDYYYY): string =>
  format(date ? new Date(date) : new Date(), dateFormat);

const getTimeStamp = (time = Date.now()): Timestamp => {
  const seconds = Math.floor(time / 1000);
  const nanos = (time % 1000) * 1e6;

  return { seconds, nanos };
};

const isDateInFuture = (time = Date.now()): boolean => {
  return time > Date.now();
};

export { isDateInFuture, getFormattedDate, getNotesDate, getTimeStamp };
