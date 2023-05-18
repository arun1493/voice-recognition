import _get from "lodash/get";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { EMPTY_ARRAY } from "@suki-web/suki-business";

import {
  buildScope,
  cloudLogger,
  convertPreferencesFromProto,
  convertPreferencesToProto,
  getContext
} from "../../helpers";
import { ERROR_STATEMENTS } from "../../constants";
import UniqueService from "../../services/UniqueService";

class PreferenceController {
  getPreferences = async (req: Request, res: Response) => {
    const userId = _get(req, "query.userId");
    const context = getContext(req, true);

    const rpcInput: any = {
      scope: buildScope(context),
      user_id: userId
    };

    try {
      cloudLogger.info("Getting preferences");
      const preferencesResponse = await UniqueService.getPreferences(rpcInput, context);
      let preferences = _get(preferencesResponse, "preferences", EMPTY_ARRAY);
      preferences = preferences.map(convertPreferencesFromProto);
      cloudLogger.info("Completed getting preferences", req, { preferences });
      res.status(StatusCodes.OK).json({ preferences: preferences });
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  updatePreferences = async (req: Request, res: Response) => {
    const context = getContext(req, true);
    const userId = _get(req.body, "body.userId");
    const preferences = _get(req.body, "body.preferences");
    const rpcInput = {
      scope: buildScope(context),
      user_id: userId,
      preferences: [convertPreferencesToProto(preferences)]
    };

    try {
      await UniqueService.updatePreferences(rpcInput, context);
      res.status(StatusCodes.OK);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };
}

export default new PreferenceController();
