import _map from "lodash/map";

import { Emr, EmrLabels, SelectOption, Specialities, SpecialitiesLabels } from "../constants";

const getSpecialityOptions = (): SelectOption[] => {
  return _map(Specialities, (speciality) => ({ label: SpecialitiesLabels[speciality], value: speciality }));
};

const getEMROptions = (): SelectOption[] => {
  return _map(Emr, (emrOption) => ({ label: EmrLabels[emrOption], value: emrOption }));
};

export { getEMROptions, getSpecialityOptions };
