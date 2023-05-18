import _isEmpty from "lodash/isEmpty";

const validateEncounterDetails = (encounterDetails) => {
  const { patient, identifier: encounterId } = encounterDetails;
  let value;
  if (_isEmpty(encounterId) && _isEmpty(patient)) {
    value = "encounterId, patient details";
  } else if (_isEmpty(encounterId)) {
    value = "encounterId";
  } else if (_isEmpty(patient)) {
    value = "patient details";
  }

  let error = value ? `Empty or invalid ${value} passed in encounter details` : "";

  if (_isEmpty(patient?.id)) {
    error += `${error ? ", " : ""} PatientId(Identifier) cannot be empty or null`;
  }

  return error;
};

export { validateEncounterDetails };
