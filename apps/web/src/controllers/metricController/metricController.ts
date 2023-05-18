import _get from "lodash/get";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { validationResult } from "express-validator";

import { cloudLogger } from "../../helpers";
import PubSubService from "../../services/PubSubService";
import { CLIENT_METRICS, ERROR_STATEMENTS } from "../../constants";

class MetricController {
  pubSubServiceClient: PubSubService;

  constructor() {
    this.pubSubServiceClient = new PubSubService(CLIENT_METRICS);
  }

  postEvents = async (req: Request, res: Response) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = result.array();
      res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        details: errors,
        message: ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]
      });
      return;
    }
    const events = _get(req, "body");
    try {
      cloudLogger.info("Initializing Post events");
      const eventString = JSON.stringify(events);
      const messageId = await this.pubSubServiceClient.publishMessage(eventString);
      cloudLogger.info(`Published message id: ${messageId}`);
      cloudLogger.info("Event published successfully", req, { messageId, events: eventString });
      res.status(StatusCodes.OK).json({ message: "Event published successfully" });
    } catch (err) {
      const errString = JSON.stringify(err);
      const eventString = JSON.stringify(events);
      cloudLogger.error(
        `Error in posting events | ${errString} occurred while publishing event = ${eventString}`,
        req,
        { error: err }
      );

      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ code: StatusCodes.INTERNAL_SERVER_ERROR, message: "Failed to publish events" });
    }
  };
}

export default new MetricController();
