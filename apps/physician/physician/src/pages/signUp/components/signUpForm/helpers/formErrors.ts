import { TFunction } from "react-i18next";

import { SignUpFormFields } from "../../../constants";

const getFormFieldErrorMessage = (errors: any, type: string, t: TFunction<"translation", undefined>) => {
  if (type === SignUpFormFields.ORGANIZATION_NAME) {
    if (errors[type]?.type === "minLength") return t("pages.signUp.errors.minOrganizationLength");
    if (errors[type]?.type === "maxLength") return t("pages.signUp.errors.maxOrganizationLength");
    return t("pages.signUp.errors.organizationName");
  }

  if (errors[type]?.type === "maxLength") return t("pages.signUp.errors.maxTextFieldLength");
  if (errors[type]?.type === "minLength") return t("pages.signUp.errors.minTextFieldLength");

  switch (type) {
    case SignUpFormFields.FIRST_NAME: {
      return t("pages.signUp.errors.firstName");
    }
    case SignUpFormFields.LAST_NAME: {
      return t("pages.signUp.errors.lastName");
    }
    case SignUpFormFields.EMAIL: {
      return t("pages.signUp.errors.email");
    }
    case SignUpFormFields.EMR: {
      return t("pages.signUp.errors.emr");
    }
  }

  return t("pages.signUp.errors.general");
};

export { getFormFieldErrorMessage };
