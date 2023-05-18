import { check } from "express-validator";
import { RequestHeaders } from "@suki-web/suki-business";

const featureFlagsValidations = [
  check(RequestHeaders.USER_ID, "Missing user id").exists(),
  check(RequestHeaders.ORGANIZATION_ID, "Missing organization id").exists()
];

export { featureFlagsValidations };
