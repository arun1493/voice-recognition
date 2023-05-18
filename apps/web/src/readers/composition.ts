import _property from "lodash/property";

const apptId = _property("apptId");
const id = _property("id");
const patient = _property("metadata.patient");
const sections = _property("sectionsS2");
const status = _property("status");
const submissionStatus = _property("submissionStatus");

export default {
  apptId,
  id,
  patient,
  sections,
  status,
  submissionStatus
};
