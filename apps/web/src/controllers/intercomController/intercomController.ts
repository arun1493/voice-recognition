import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { EMPTY_OBJECT } from "@suki-web/suki-business";

import { cloudLogger } from "../../helpers";
import IntercomService from "../../services/IntercomService";

class IntercomController {
  getIntercomUser = async (req: Request, res: Response) => {
    const userId = _get(req, "params.userId");

    try {
      cloudLogger.info("Getting intercom user");
      const response = (await IntercomService.fetchIntercomUser(userId)) || EMPTY_OBJECT;
      cloudLogger.info(" Successfully completed getting the intercom user", req);
      res.status(StatusCodes.OK).json({
        data: response
      });
    } catch (error) {
      cloudLogger.error("Error in getting intercom user", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "[Intercom]: Failed to fetch intercom user data"
      });
    }
  };

  initializeOOBE = async (req: Request, res: Response) => {
    const oobeTasksStatus = _get(req, "body.oobeTasksStatus");
    const oobeTasksStatusNonIntegrated = _get(req, "body.oobeTasksStatusNonIntegrated");
    const tasksCompleted = _get(req, "body.tasksCompleted");
    const userId = _get(req, "body.userId");

    try {
      cloudLogger.info("Initializing OOBE");
      const oobe = {
        is_oobe_completed: false,
        oobe_tasks_status: oobeTasksStatus,
        tasks_completed: tasksCompleted
      };
      if (!_isEmpty(oobeTasksStatusNonIntegrated)) {
        oobe["oobe_tasks_status_non_integrated"] = oobeTasksStatusNonIntegrated;
      }

      cloudLogger.info("[initializeOOBE]: Updating intercom user attributes");
      const response = await IntercomService.updateIntercomUserAttributes(userId, {
        oobe: JSON.stringify(oobe)
      });

      cloudLogger.info("Successfully initialized OOBE", req, { oobeDetails: oobe });
      res.status(StatusCodes.OK).json({
        data: response
      });
    } catch (error) {
      cloudLogger.error("Error in initializing OOBE", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "[Intercom]: Failed to initialize oobe"
      });
    }
  };

  updateIntercomCustomAttributes = async (req: Request, res: Response) => {
    const userId = _get(req, "body.userId");
    const customAttributes = _get(req, "body.customAttributes");

    try {
      cloudLogger.info("Updating intercom custom attributes");
      const response = await IntercomService.updateIntercomUserAttributes(userId, customAttributes);
      cloudLogger.info("Successfully updated intercom custom attributes", req, {
        customAttributes
      });
      res.status(StatusCodes.OK).json({
        data: response
      });
    } catch (error) {
      cloudLogger.error("Error in updating intercom custom attributes", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "[Intercom]: Failed to update intercom user"
      });
    }
  };

  incrementUserSignInsCount = async (req: Request, res: Response) => {
    const userId = _get(req, "body.userId");

    try {
      cloudLogger.info("Incrementing user signin count");
      const userResponse = await IntercomService.fetchIntercomUser(userId);
      const userCustomAttributes = userResponse?.custom_attributes || EMPTY_OBJECT;
      const numSignIns = userCustomAttributes?.num_sign_ins || 0;
      const response = await IntercomService.updateIntercomUserAttributes(userId, {
        num_sign_ins: numSignIns + 1
      });
      cloudLogger.info("Successfully incremented user signin count", req, {
        numSignIns
      });
      res.status(StatusCodes.OK).json({
        data: response
      });
    } catch (error) {
      cloudLogger.error("Error in incrementing user signin count", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "[Intercom]: Failed to increment user sign ins"
      });
    }
  };

  updateOOBE = async (req: Request, res: Response) => {
    const isOobeCompleted = _get(req, "body.isOobeCompleted");
    const oobeTasksStatus = _get(req, "body.oobeTasksStatus");
    const oobeTasksStatusNonIntegrated = _get(req, "body.oobeTasksStatusNonIntegrated");
    const tasksCompleted = _get(req, "body.tasksCompleted");
    const userId = _get(req, "body.userId");

    try {
      cloudLogger.info("Updating OOBE");
      const userResponse = await IntercomService.fetchIntercomUser(userId);
      const userOobe = _get(userResponse, "custom_attributes.oobe", "");
      const oobe = {
        ...JSON.parse(userOobe),
        oobe_tasks_status: oobeTasksStatus,
        is_oobe_completed: isOobeCompleted,
        tasks_completed: tasksCompleted
      };

      if (!_isEmpty(oobeTasksStatusNonIntegrated)) {
        oobe["oobe_tasks_status_non_integrated"] = oobeTasksStatusNonIntegrated;
      }

      cloudLogger.info("[updateOOBE]: Updating intercom user attributes");
      const response = await IntercomService.updateIntercomUserAttributes(userId, {
        oobe: JSON.stringify(oobe)
      });

      cloudLogger.info("Successfully updated OOBE", req, {
        userOobe
      });
      res.status(StatusCodes.OK).json({
        data: response
      });
    } catch (error) {
      cloudLogger.error("Error in updating oobe", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "[Intercom]: Failed to update user OOBE data"
      });
    }
  };

  updateOOBECompletion = async (req: Request, res: Response) => {
    const userId = _get(req, "body.userId");
    const isOobeCompleted = _get(req, "body.isOobeCompleted");

    try {
      cloudLogger.info("Initialized updateOOBECompletion");
      const userResponse = await IntercomService.fetchIntercomUser(userId);
      const userOobe = _get(userResponse, "custom_attributes.oobe", "");

      const oobe = {
        ...JSON.parse(userOobe),
        is_oobe_completed: isOobeCompleted
      };
      const response = await IntercomService.updateIntercomUserAttributes(userId, {
        oobe: JSON.stringify(oobe)
      });

      cloudLogger.info("Finished updateOOBECompletion", req, { oobeDetails: oobe });
      res.status(StatusCodes.OK).json({
        data: response
      });
    } catch (error) {
      cloudLogger.error("Error in udpating OOBE completion", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "[Intercom]: Failed to update oobe completion"
      });
    }
  };
}

export default new IntercomController();
