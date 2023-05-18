import _get from "lodash/get";
import _find from "lodash/find";
import _isEmpty from "lodash/isEmpty";
import { StatusCodes } from "http-status-codes";
import { check, CustomValidator } from "express-validator";

import { isValidAmwellSystemToken } from "../../tokens";

const systemTokenValidator: CustomValidator = async (token) => {
  const isValidToken = await isValidAmwellSystemToken(token);
  if (!isValidToken) {
    throw new Error("Authorization token is Invalid / expired");
  }
};

const validateAmwellSystemToken = check("authorization", "Empty authorization header")
  .exists()
  .bail()
  .custom(systemTokenValidator)
  .withMessage({
    errorCode: StatusCodes.UNAUTHORIZED,
    message: "Authorization token is Invalid / expired"
  });

export { validateAmwellSystemToken };
