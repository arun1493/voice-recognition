import i18n from "i18next";
import { differenceInYears } from "date-fns";

import { getAge, getFullName, getGender } from "./person";

const firstPatient = {
  dateOfBirth: "1999-11-01T00:00:00.000Z",
  firstName: "John",
  middleName: "Eddard",
  lastName: "Stark",
  gender: "Male"
};

const secondPatient = {
  dateOfBirth: "2323-02-16T22:00:00.000Z",
  gender: "Female"
};

const nullPatient = {
  gender: undefined,
  dateOfBirth: undefined
};
const unknownPatient = {
  dateOfBirth: "",
  gender: "UNKNOWN"
};

describe("Patients Helper Functions", () => {
  it("should return fullname", () => {
    expect(getFullName(firstPatient)).toBe("John E. Stark");
  });

  it("should return correct age", () => {
    const patientAgeInYears = differenceInYears(new Date(), new Date(firstPatient.dateOfBirth));
    expect(getAge(firstPatient.dateOfBirth)).toBe(patientAgeInYears.toString());
  });

  it("should return N/A for undefined age ", () => {
    expect(getAge(nullPatient.dateOfBirth)).toBe(i18n.t("global.notAvailable"));
  });

  it("should return N/A for empty dateOfBirth ", () => {
    expect(getAge(unknownPatient.dateOfBirth)).toBe(i18n.t("global.notAvailable"));
  });

  it("should return '--' for dateOfBirth in future ", () => {
    expect(getAge(secondPatient.dateOfBirth)).toBe("--");
  });

  it("should return M gender", () => {
    expect(getGender(firstPatient.gender)).toBe("M");
  });

  it("should return F gender", () => {
    expect(getGender(secondPatient.gender)).toBe("F");
  });

  it("should return N/A for undefined gender", () => {
    expect(getGender(nullPatient.gender)).toBe(i18n.t("global.notAvailable"));
  });

  it("should return N/A for 'UNKNOWN' gender value", () => {
    expect(getGender(unknownPatient.gender)).toBe(i18n.t("global.notAvailable"));
  });
});
