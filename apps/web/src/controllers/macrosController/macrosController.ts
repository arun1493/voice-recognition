import _get from "lodash/get";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import {
  buildScope,
  clearedAliasMacro,
  cloudLogger,
  convertBlocksToProto,
  convertMacroFromProto,
  convertMacroToProto,
  convertSpecialtiesToProto,
  convertTagsToProto,
  getContentType,
  getContext,
  getIds,
  getMacroName,
  sortScriptsByName
} from "../../helpers";
import { ERROR_STATEMENTS } from "../../constants";
import MacrosServices from "../../services/MacrosService";

class MacrosController {
  getMacros = async (req: Request, res: Response) => {
    const id = _get(req, "params.scriptId");
    const name = _get(req, "query.name");
    const specialties = _get(req, "query.specialties", []);
    const includeFields = _get(req, "query.includeFields", false);
    const { userId } = getIds(req);
    const ctx = getContext(req);

    if (!id && !userId && !name) {
      cloudLogger.error(
        "[getMacros]: Invalid input. Must specify at least: userId, a list of macro ids, or a name.",
        req
      );
      res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        message: "Invalid input. Must specify at least: userId, a list of macro ids, or a name."
      });
    }

    const rpcInput = {
      scope: buildScope(ctx),
      ids: id && [id],
      user_id: userId,
      include_fields: includeFields,
      name,
      specialties: convertSpecialtiesToProto(specialties),
      specialtiesReqFlag: specialties?.length
    };

    try {
      cloudLogger.info("Getting macros");
      const response = await MacrosServices.getMacros(rpcInput, ctx);
      const macros = response?.macros?.map((macro) => convertMacroFromProto(macro));
      cloudLogger.info("Sorting scripts by name");
      sortScriptsByName(macros);
      cloudLogger.info("Completed getting macros", req, { count: macros?.length, rpcInput });
      res.status(StatusCodes.OK).json({
        count: macros?.length,
        results: macros
      });
    } catch (error) {
      cloudLogger.error("Error in getting macros", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  createMacro = async (req: Request, res: Response) => {
    const tags = _get(req, "body.tags");
    const specialties = _get(req, "body.specialties", []);
    const source = _get(req, "body.source");
    const blocks = _get(req, "body.blocks", []);
    const { userId } = getIds(req);

    const ctx = getContext(req);

    const rpcInput = {
      scope: buildScope(ctx),
      macro: {
        user_id: userId,
        tags: convertTagsToProto(tags),
        blocks: convertBlocksToProto(blocks),
        specialties: convertSpecialtiesToProto(specialties),
        source,
        content_type: getContentType(blocks)
      }
    };

    try {
      cloudLogger.info("Creating macros");
      const response = await MacrosServices.createMacro(rpcInput, ctx);
      const macro = convertMacroFromProto(response.macro);
      cloudLogger.info("Completed creating macros", req);
      res.status(StatusCodes.OK).json({
        macro
      });
    } catch (error) {
      cloudLogger.error("Error in creating macros", req), { error };
      res.status(StatusCodes.BAD_REQUEST).json({ error });
    }
  };

  deleteMacros = async (req: Request, res: Response) => {
    const id = _get(req, "params.scriptId");
    const ctx = getContext(req);

    const rpcInput = {
      scope: buildScope(ctx),
      ids: [id]
    };

    try {
      cloudLogger.info("Deleting macros");
      await MacrosServices.deleteMacros(rpcInput, ctx);
      cloudLogger.info("Completed deleting macros", req, { rpcInput });
      res.status(StatusCodes.OK).json({ id });
    } catch (error) {
      cloudLogger.error("Error in deleting macros", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  updateMacro = async (req: Request, res: Response) => {
    const id = _get(req, "params.scriptId");
    const macro = _get(req, "body.macro");
    const preserveAliases = _get(req, "body.preserveAliases");
    const { userId } = getIds(req);
    const ctx = getContext(req);

    macro.id = id;
    macro.userId = userId;

    if (!userId && !id) {
      cloudLogger.error(
        "[updateMacro]: Invalid input. Must specify at least: userId, a list of macro ids, or a name",
        req
      );
      res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        message: "Invalid input. Must specify at least: userId, a list of macro ids, or a name"
      });
    }

    let macroInput = { ...macro };

    try {
      cloudLogger.info("Updating macro.");
      if (!preserveAliases) {
        cloudLogger.info("Getting macro name");
        const macroName = getMacroName(macro);

        cloudLogger.info("Getting RPC input");
        const rpcInput = {
          scope: buildScope(ctx),
          ids: id && [id],
          user_id: userId,
          include_fields: true
        };

        const response = await MacrosServices.getMacros(rpcInput, ctx);
        cloudLogger.info("Getting macros from response");
        const macros = response?.macros?.map((macro) => convertMacroFromProto(macro));
        cloudLogger.info("Sorting scripts by name");
        sortScriptsByName(macros);
        const oldMacro = macros[0];
        const oldMacroName = getMacroName(oldMacro);

        cloudLogger.info("Comparing macro name to old macro name");
        if (macroName !== oldMacroName) {
          macroInput = clearedAliasMacro(macroInput);
        }
      }

      cloudLogger.info("Getting RPC input");
      const rpcInput = {
        scope: buildScope(ctx),
        macro: convertMacroToProto(macroInput)
      };

      const response = await MacrosServices.updateMacro(rpcInput, ctx);
      const newMacro = convertMacroFromProto(response.macro);
      cloudLogger.info("Completed updating macro", req);
      res.status(StatusCodes.OK).json({ macro: newMacro });
    } catch (error) {
      cloudLogger.error("Error in updating macros", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };
}

export default new MacrosController();
