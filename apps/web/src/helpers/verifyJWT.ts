import _get from "lodash/get";
import { StatusCodes } from "http-status-codes";

import { cloudLogger } from "./";
import { isValidAccessToken } from "./tokens";

const verifyJWT = async (req, res, next) => {
  const jwt = _get(req, "headers.authorization");

  cloudLogger.info("Checking if JWT token is valid");
  if (await isValidAccessToken(jwt)) {
    cloudLogger.info("JWT Access Token is valid", req, { jwtData: jwt });
    next();
    return;
  }

  cloudLogger.error("JWT Access Token is invalid | Unauthorized access", req, { jwtData: jwt });
  return res.status(StatusCodes.UNAUTHORIZED).json({
    code: StatusCodes.UNAUTHORIZED,
    message: "Unauthorized access"
  });
};

const skipVerifyJWT = (req) => {
  cloudLogger.info("Skipping verifyJWT", req);
  if (!req?.path) return;
  if (req.headers["x-test-mode"]) return true;

  const { path } = req;
  return (
    path.includes("fhir") ||
    path.includes("auth") ||
    path.includes("v1") ||
    path.includes("log-message") ||
    path.includes("payments") ||
    path.includes("registration") ||
    path.includes("desktop/windows-release-notes")
  );
};

export { skipVerifyJWT, verifyJWT };
