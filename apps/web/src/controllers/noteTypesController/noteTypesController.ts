import _get from "lodash/get";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import {
  buildScope,
  cloudLogger,
  convertNoteTypeFromProto,
  convertNoteTypeToProto,
  convertSpecialtiesToProto,
  getContext,
  sortByStringKey
} from "../../helpers";
import NoteTypesService from "../../services/NoteTypesService";
import { EMR_DESTINATION, ERROR_STATEMENTS, METADATA } from "../../constants";

class NoteTypesController {
  getNoteTypes = async (req: Request, res: Response) => {
    const id = _get(req, "params.id");
    const specialties = _get(req, "query.specialties", []);
    const ctx = getContext(req, true);

    const rpcInput = {
      scope: buildScope(ctx),
      ids: id && [id],
      user_id: ctx[METADATA.SUKI_USER_ID],
      specialtiesReqFlag: !!specialties.length,
      specialties: convertSpecialtiesToProto(specialties)
    };

    try {
      cloudLogger.info("Getting note types");
      const response = await NoteTypesService.getNoteTypes(rpcInput, ctx);
      const noteTypes = _get(response, "note_types", []).map(convertNoteTypeFromProto);
      const results = sortByStringKey(noteTypes, "name");

      cloudLogger.info("Successfully completed getting the note types", req, {
        count: results.length,
        noteid: id
      });
      res.status(StatusCodes.OK).json({ count: results.length, results });
    } catch (error) {
      cloudLogger.error("Error in getting note types", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  deleteNoteTypes = async (req: Request, res: Response) => {
    const id = _get(req, "params.id");
    const ctx = getContext(req, true);

    const rpcInput = {
      scope: buildScope(ctx),
      ids: [id]
    };

    try {
      cloudLogger.info("Deleting the note types");
      await NoteTypesService.deleteNoteTypes(rpcInput, ctx);
      cloudLogger.info("Deleted the note types", req, { rpcInput: rpcInput });
      res.status(StatusCodes.OK).json({ id });
    } catch (error) {
      cloudLogger.error("Error in deleting note types", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  createNoteType = async (req: Request, res: Response) => {
    const noteType = _get(req, "body.noteType");
    const destinations = _get(noteType, "destinations", []);

    if (destinations.indexOf(EMR_DESTINATION.SUKI_ONLY) > -1 && destinations.length > 1) {
      cloudLogger.error(`${EMR_DESTINATION.SUKI_ONLY} must be the only destination, if present`, req);
      return null;
    }

    const ctx = getContext(req, true);

    const rpcInput = {
      scope: buildScope(ctx),
      note_type: convertNoteTypeToProto(noteType)
    };

    try {
      cloudLogger.info("Creating note type");
      const response = await NoteTypesService.createNoteTypes(rpcInput, ctx);
      const noteType = convertNoteTypeFromProto(response.note_type);
      cloudLogger.info("Created the note type", req);
      res.status(StatusCodes.OK).json({ noteType });
    } catch (error) {
      cloudLogger.error("Error in creating note types", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  updateNoteType = async (req: Request, res: Response) => {
    const id = _get(req, "params.id");
    const noteType = _get(req, "body.noteType");
    const destinations = _get(req, "body.noteType.destinations", []);

    if (destinations.indexOf(EMR_DESTINATION.SUKI_ONLY) > -1 && destinations.length > 1) {
      cloudLogger.error(`${EMR_DESTINATION.SUKI_ONLY} must be the only destination, if present`, req);
      return null;
    }

    const ctx = getContext(req, true);

    const rpcInput = {
      scope: buildScope(ctx),
      note_type: { ...convertNoteTypeToProto(noteType), id }
    };

    try {
      cloudLogger.info("Updating note type");
      const response = await NoteTypesService.updateNoteTypes(rpcInput, ctx);
      const noteType = convertNoteTypeFromProto(response.note_type);
      cloudLogger.info("Updated the note type", req, { noteType });
      res.status(StatusCodes.OK).json({ noteType });
    } catch (error) {
      cloudLogger.error("Error in updating note types", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };
}

export default new NoteTypesController();
