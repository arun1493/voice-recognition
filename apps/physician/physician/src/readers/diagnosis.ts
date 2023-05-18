import _property from "lodash/property";

import { Diagnosis } from "../types";

const billable = _property<Diagnosis, boolean>("billable");
const description = _property<Diagnosis, string>("description");
const icdCode = _property<Diagnosis, string>("icdCode");
const icdDescription = _property<Diagnosis, string>("icdDescription");
const problemLabel = _property<Diagnosis, string>("problemLabel");
const snomedCode = _property<Diagnosis, string>("snomedCode");
const snomedDescription = _property<Diagnosis, string>("snomedDescription");

export default {
  billable,
  description,
  icdCode,
  icdDescription,
  problemLabel,
  snomedCode,
  snomedDescription
};
