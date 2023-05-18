import _property from "lodash/property";

import { Patient, Person } from "../types";

const personAge = _property<Patient, string>("person.age");
const personDateOfBirth = _property<Patient, string>("person.dateOfBirth");
const personFirstName = _property<Patient, string>("person.firstName");
const personGender = _property<Patient, string>("person.gender");
const id = _property<Patient, string>("id");
const mrn = _property<Patient, string>("mrn");
const person = _property<Patient, Person>("person");

export default {
  personAge,
  personDateOfBirth,
  personFirstName,
  personGender,
  id,
  mrn,
  person
};
