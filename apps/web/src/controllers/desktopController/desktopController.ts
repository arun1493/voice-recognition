import _isEmpty from "lodash/isEmpty";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { cloudLogger } from "../../helpers";
import { ERROR_STATEMENTS } from "../../constants";
import ReleaseNotesService from "../../services/ReleaseNotesService";

class DesktopController {
  getWindowsReleaseNotes = async (req: Request, res: Response) => {
    try {
      cloudLogger.info("Getting windows release notes");
      const releaseNotesResponse = await ReleaseNotesService.fetchReleaseNotesJson();

      if (_isEmpty(releaseNotesResponse)) {
        cloudLogger.error("No windows release notes found", req);
        res.status(StatusCodes.NOT_FOUND).json({
          code: StatusCodes.NOT_FOUND,
          message: "No Windows release notes found."
        });
        return;
      }

      cloudLogger.info("Completed getting windows notes", req);
      res.status(StatusCodes.OK).json({ releaseData: releaseNotesResponse?.[0] });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };
}

export default new DesktopController();
