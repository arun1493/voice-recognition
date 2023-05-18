import i18n from "i18next";
import { differenceInDays, differenceInMonths, differenceInWeeks, differenceInYears, format } from "date-fns";

import { pluralize } from ".";
import { Person } from "../types";
import { DATE_FORMAT, GENDER } from "../constants";

const getFullName = (person: Person) => {
  const { middleName, firstName, lastName } = person || {};
  let name: string;

  if (middleName?.length) {
    name = `${firstName} ${middleName[0]}. ${lastName}`;
  } else {
    name = `${firstName} ${lastName}`;
  }

  return name;
};

const getGender = (gender?: string) => {
  if (gender && gender !== GENDER.UNKNOWN) return gender[0];
  return i18n.t("global.notAvailable");
};

const getAge = (dateOfBirth?: string): string => {
  if (!dateOfBirth) return i18n.t("global.notAvailable");

  const dateMoment = new Date(dateOfBirth);

  if (dateMoment.getTime() === 0) return "--";

  const dateNow = new Date(Date.now());

  const ageYears = differenceInYears(dateNow, dateMoment);
  const ageMonths = differenceInMonths(dateNow, dateMoment);
  const ageWeeks = differenceInWeeks(dateNow, dateMoment);
  const ageDays = differenceInDays(dateNow, dateMoment);

  if (ageYears >= 3) return ageYears.toString();
  if (ageMonths >= 1) return pluralize(ageMonths, "month");
  if (ageWeeks >= 2) return pluralize(ageWeeks, "week");
  if (ageDays >= 1) return pluralize(ageDays, "day");

  return "--";
};

const getDOB = (date: string | undefined, dateFormat = DATE_FORMAT.MMDDYYYY) => {
  if (!date) {
    return `${i18n.t("global.dob")} ${i18n.t("global.notAvailable")}`;
  }

  /**
   * DOB is returned in UTC format from the backend.
   * To keep the date consistent independent of the timezone of the logged in user
   * we are setting the date to UTC date.
   * date.setDate returns date in milliseconds
   */
  const dateOfBirth = new Date(date);
  const dateOfBirthUTC = dateOfBirth.setDate(dateOfBirth.getUTCDate());
  if (dateOfBirthUTC) {
    const formattedDate = format(dateOfBirth, dateFormat);
    return `${i18n.t("global.dob")} ${formattedDate}`;
  }

  return `${i18n.t("global.dob")} ${i18n.t("global.notAvailable")}`;
};

export { getAge, getDOB, getGender, getFullName };
