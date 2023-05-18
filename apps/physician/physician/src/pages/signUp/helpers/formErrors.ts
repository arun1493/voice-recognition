import _get from "lodash/get";
import { TFunction } from "react-i18next";
import { NavigateFunction } from "react-router";

import { getRoute } from "../../../helpers";
import { Pages, SignUpBackEndErrorCodes } from "../../../constants";

const getRegisterErrorMessage = (error: Error, navigate: NavigateFunction, t: TFunction<"translation", undefined>) => {
  const errorCode = _get(error, "response.data.error.code");
  let title;

  switch (errorCode) {
    case SignUpBackEndErrorCodes.EMAIL:
      title = t("pages.signUp.errorEmailTitle");
      setTimeout(() => {
        const loginRoute = getRoute(Pages.Login);
        loginRoute && navigate(loginRoute);
      }, 2000);
      break;

    case SignUpBackEndErrorCodes.ORGANIZATION:
      title = t("pages.signUp.errorOrganizationTitle");
      break;

    default:
      title = t("pages.signUp.errorTitle");
  }

  return title;
};

export { getRegisterErrorMessage };
