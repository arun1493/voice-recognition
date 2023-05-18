import { StatusCodes } from "http-status-codes";
import { validationResult } from "express-validator";
import { RequestHeaders } from "@suki-web/suki-business";

import { cloudLogger } from "../../helpers";
import { ERROR_STATEMENTS } from "../../constants";
import { getUserFeatureFlagsStatus } from "./helpers";
import FirebaseService from "../../services/FirebaseService";

class FeatureFlagsController {
  getFeatureFlagsByUserId = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      cloudLogger.error("Validation error(s) in the request", req, { errors });
      return res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        details: errors.array(),
        message: "Validation error(s) in the request"
      });
    }

    const userId = req.header(RequestHeaders.USER_ID);
    const organizationId = req.header(RequestHeaders.ORGANIZATION_ID);

    try {
      // Fetch remote config
      cloudLogger.info("Fetching remote config");
      const remoteConfigTemplate = await FirebaseService.getRemoteConfig();
      cloudLogger.info("Getting feature flags by UserId");
      const userFeatureFlagsStatus = getUserFeatureFlagsStatus(remoteConfigTemplate, userId, organizationId);
      cloudLogger.info("Successfully completed getting feature flags by UserId", req);
      res.status(StatusCodes.OK).json({ flags: userFeatureFlagsStatus });
    } catch (error) {
      cloudLogger.error(`Failed to fetch feature flags for userId ${userId}`, req, { error });
      console.error(`Failed to fetch feature flags for userId ${userId}`, JSON.stringify(error));
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };
}

export default new FeatureFlagsController();
