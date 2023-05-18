import _reduce from "lodash/reduce";
import _isEmpty from "lodash/isEmpty";

import { Patient } from "../../../../../types";
import { patientReader } from "../../../../../readers";

const getPatientIds = (patients: Array<Patient>): Array<string> =>
  _reduce(
    patients,
    (patientIds: Array<string>, patient: Patient) => {
      const currentPatientId = patientReader.id(patient);
      if (_isEmpty(currentPatientId)) {
        return patientIds;
      }
      return [...patientIds, currentPatientId];
    },
    []
  );

export { getPatientIds };
