import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { getIds } from "../../helpers";
import logger from "../../helpers/logger";
import { METADATA } from "../../constants";

class LogMessageController {
  logMessage = async (req: Request, res: Response) => {
    const { level, message, payload, role, sessionToken } = req.body;
    const { organizationId, userAgent, userId } = getIds(req);

    const context = {
      role,
      level,
      [METADATA.SUKI_ORGANIZATION_ID]: organizationId,
      [METADATA.SUKI_SESSION_ID]: sessionToken,
      [METADATA.SUKI_USER_AGENT]: userAgent,
      [METADATA.SUKI_USER_ID]: userId
    };

    logger[level](`${message}`, { context, payload });

    res.status(StatusCodes.OK).json({
      done: "OK"
    });
  };
}

export default new LogMessageController();
