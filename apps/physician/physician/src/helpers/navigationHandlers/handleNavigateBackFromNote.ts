import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { Location, NavigateFunction } from "react-router-dom";

import { getRoute } from "..";
import { Patient } from "../../types";
import { Pages } from "../../constants";
import { patientReader } from "../../readers";

const handleNavigateBackFromNote = (location: Location, navigate: NavigateFunction, patient: Patient) => {
  if (_isEmpty(patient)) {
    navigate(-1);
  }

  const prevLocation = _get(location, "state.from");
  const patientId = patientReader.id(patient);

  const route =
    prevLocation === Pages.UnfinishedNotes
      ? getRoute(Pages.UnfinishedNotes)
      : getRoute(Pages.PatientProfile, { patientId: patientId });

  navigate(route);
};

export { handleNavigateBackFromNote };
