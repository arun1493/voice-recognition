import _get from "lodash/get";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { ERROR_STATEMENTS, METADATA } from "../../constants";
import NoteLockService from "../../services/NoteLockService";
import { cloudLogger, convertNoteLock, getContext } from "../../helpers";

class NoteLockController {
  getNoteLockStatus = async (req: Request, res: Response) => {
    const noteId = _get(req, "query.noteId");
    const ctx = getContext(req, true);
    const organizationId = ctx[METADATA.SUKI_ORGANIZATION_ID];
    const userId = ctx[METADATA.SUKI_USER_ID];

    try {
      cloudLogger.info("Getting note lock status");
      const response = await NoteLockService.noteLockForEdit({ organizationId, userId, noteId });
      const results = _get(response, "data.ms-nbp.0");
      const convertedNoteLock = convertNoteLock(results);

      cloudLogger.info("Completed getting note lock status", req);
      res.status(StatusCodes.OK).json({ ...convertedNoteLock });
    } catch (error) {
      cloudLogger.error("Error in getting note lock status", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };
}

export default new NoteLockController();
