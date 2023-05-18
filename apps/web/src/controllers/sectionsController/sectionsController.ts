import _get from "lodash/get";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { EMPTY_ARRAY } from "@suki-web/suki-business";

import SectionService from "../../services/SectionService";
import { ERROR_STATEMENTS, METADATA } from "../../constants";
import { buildScope, cloudLogger, convertSectionFromProto, getContext } from "../../helpers";

class SectionsController {
  getSections = async (req: Request, res: Response) => {
    const ctx = getContext(req, true);

    const rpcInput = {
      scope: buildScope(ctx),
      user_id: ctx[METADATA.SUKI_USER_ID]
    };

    try {
      cloudLogger.info("Getting sections");
      const response = await SectionService.getSections(rpcInput, ctx);
      const sections = _get(response, "sections", EMPTY_ARRAY).map(convertSectionFromProto);

      cloudLogger.info("Completed getting sections", req);
      res.status(StatusCodes.OK).json({ count: sections.length, results: sections });
    } catch (error) {
      cloudLogger.error("Error in getting sections", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };
}

export default new SectionsController();
