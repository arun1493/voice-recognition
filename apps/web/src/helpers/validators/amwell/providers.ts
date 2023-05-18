import _find from "lodash/find";
import _isEmpty from "lodash/isEmpty";
import { isEmailValid } from "@suki-web/suki-business";
import { check, CustomValidator } from "express-validator";

import { isEmailDetails, isOfficialName } from "../../../helpers";

const telecomValidatator: CustomValidator = (telecomDetails) => {
  const emailDetail = _find(telecomDetails, isEmailDetails);

  if (_isEmpty(emailDetail)) {
    throw new Error("Empty provider email details");
  }

  if (!isEmailValid(emailDetail?.value)) {
    throw new Error("Invalid provider email");
  }

  return true;
};

const nameValidator: CustomValidator = (nameDetails) => {
  const officialNameDetail = _find(nameDetails, isOfficialName);

  if (_isEmpty(officialNameDetail)) {
    throw new Error("Empty official name details");
  }

  if (_isEmpty(officialNameDetail?.given)) {
    throw new Error("Invalid first name");
  }

  if (_isEmpty(officialNameDetail?.family)) {
    throw new Error("Invalid last name");
  }

  if (_isEmpty(officialNameDetail?.suffix?.[0])) {
    throw new Error("Invalid provider suffix");
  }

  return true;
};

// Validation rules.
const providerValidations = [
  check("id", "Missing partner id").exists(),
  check("telecom", "Missing provider email details").exists().bail().custom(telecomValidatator),
  check("name", "Missing official name details").exists().bail().custom(nameValidator)
];

export { providerValidations };
