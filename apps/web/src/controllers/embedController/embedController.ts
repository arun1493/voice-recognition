import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { ERROR_STATEMENTS } from "../../constants";
import UserService from "../../services/UserService";
import { cloudLogger, getContext } from "../../helpers";

class EmbedController {
  getEmbedUser = async (req: Request, res: Response) => {
    const partnerId = _get(req, "body.partnerId");
    const tenantName = _get(req, "body.tenantName");

    if (_isEmpty(partnerId) || _isEmpty(tenantName)) {
      cloudLogger.error(
        `Invalid or Empty partnerId/tenantName passed in body tenantName: ${tenantName} and partnerId: ${partnerId}`,
        req
      );
      res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        message: "Invalid or Empty partnerId/tenantName passed in body"
      });
      return;
    }

    const ctx = getContext(req);
    const embedUserPayload = {
      partner_id: partnerId,
      tenant_name: tenantName
    };

    try {
      cloudLogger.info("Getting embed user");
      const embedUserDetails = await UserService.getEmbeddedUser(embedUserPayload, ctx);
      const embeddedUser = _get(embedUserDetails, "embedded_user");
      cloudLogger.info("Successfully completed getting the embedded user", req, { embedUserPayload });
      res.status(StatusCodes.OK).json({ embeddedUser });
    } catch (error) {
      cloudLogger.error("Error in getting embed user", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };
}

export default new EmbedController();
