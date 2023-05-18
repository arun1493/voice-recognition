import _get from "lodash/get";
import { Location, NavigateFunction } from "react-router-dom";

import { getRoute } from "..";
import { Pages } from "../../constants";

const handleNavigateBackFromPatientProfile = (location: Location, navigate: NavigateFunction) => {
  const previousPage = _get(location, "state.from");
  const scheduleRoute = getRoute(Pages.Schedule);
  const patientsListRoute = getRoute(Pages.List);

  const backNavigationRoute = previousPage === Pages.List ? patientsListRoute : scheduleRoute;
  navigate(backNavigationRoute);
};

export { handleNavigateBackFromPatientProfile };
