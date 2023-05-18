import _get from "lodash/get";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CompositionOrNote, EMPTY_ARRAY, EMPTY_OBJECT, NoteSources } from "@suki-web/suki-business";

import {
  cloudLogger,
  convertCompositionFromProto,
  convertPatientNoteFromProto,
  convertSmsCompositionFromProtoForS2Clients,
  getContext,
  getConvertedPatientNotes,
  getIds,
  sortNotesByDate
} from "../../helpers";
import SMSService from "../../services/SMSService";
import { DEFAULT_PAGE_LIMIT, ERROR_STATEMENTS, NOTE_STATUS } from "../../constants";

class PatientNotesController {
  getNote = async (req: Request, res: Response) => {
    const id = _get(req, "params.noteId");
    const { organizationId } = getIds(req);

    const ctx = getContext(req);

    const rpcInput = {
      id,
      organizationId
    };

    try {
      cloudLogger.info("Getting note");
      const response = await SMSService.getCompositionOrNote(rpcInput, ctx);
      const convertedNote = convertPatientNoteFromProto(response?.note);
      if (!response?.note?.composition_id) {
        convertedNote.metadata.status = NOTE_STATUS.IMPORTED_FROM_EMR as any;
      }

      cloudLogger.info("Received the note", req);
      res.status(StatusCodes.OK).json(convertedNote);
    } catch (error) {
      cloudLogger.error("Error in getting note", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  getCompositionOrNote = async (req: Request, res: Response) => {
    const id = _get(req, "params.noteId");
    const { organizationId } = getIds(req);

    const ctx = getContext(req);

    const rpcInput = {
      id,
      organization_id: organizationId
    };

    try {
      cloudLogger.info("Getting composition or note");
      const response = await SMSService.getCompositionOrNote(rpcInput, ctx);
      const { composition, composition_or_note, note } = response;
      let convertedResponse = EMPTY_OBJECT;
      if (composition_or_note === CompositionOrNote.COMPOSITION) {
        convertedResponse = convertSmsCompositionFromProtoForS2Clients(composition, true);
        cloudLogger.info("Received the composition");
      } else if (composition_or_note === CompositionOrNote.NOTE) {
        const convertedNote = convertPatientNoteFromProto(response?.note);
        cloudLogger.info("Received the note");
        if (!response?.note?.composition_id) {
          convertedNote.metadata.status = NOTE_STATUS.IMPORTED_FROM_EMR as any;
        }
        convertedResponse = { ...convertedNote };
      }

      cloudLogger.info("Successfully received the composition or note", req);
      res.status(StatusCodes.OK).json({ type: composition_or_note, data: convertedResponse });
    } catch (error) {
      cloudLogger.error("Error in composition or note", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  getAllPatientNotes = async (req: Request, res: Response) => {
    const includeCompositions = _get(req, "query.includeCompositions", true);
    const offset = _get(req, "query.offset", 0);
    const limit = _get(req, "query.limit", DEFAULT_PAGE_LIMIT);
    const patientId = _get(req, "query.patientId");
    const id = _get(req, "query.id");
    const { organizationId } = getIds(req);

    const ctx = getContext(req);

    let count = 0;
    const notes = [];
    let pageResponse = null;

    const rpcInput = {
      organization_id: organizationId,
      page_request: {
        type: "CURSOR",
        cursors: {
          limit,
          offset
        }
      },
      ids: id && [id],
      patient_id: patientId,
      include_sections: true
    };

    try {
      cloudLogger.info("Getting all patients notes");
      const response = await SMSService.getNote(rpcInput, ctx);
      const patientNotes = _get(response, "notes", EMPTY_ARRAY);
      cloudLogger.info("Received Response from SMS Service on Get Note", req);

      const convertedPatientNotes = getConvertedPatientNotes(patientNotes);
      cloudLogger.info("Converted Patient Notes", req);

      notes.push(...convertedPatientNotes);
      count += convertedPatientNotes.length;
      cloudLogger.info("Pushed converted patient notes into notes");
      pageResponse = null;
    } catch (error) {
      cloudLogger.error("Error in getting all patients notes", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }

    if (includeCompositions) {
      const compositionsInput = {
        ...rpcInput,
        include_metadata: true,
        include_pd_read_only: true,
        source: {
          source_type: NoteSources.USER
        }
      };

      compositionsInput.page_request = limit
        ? {
            type: "CURSOR",
            cursors: {
              limit,
              offset
            }
          }
        : null;

      try {
        cloudLogger.info("Waiting for response from SMS Service on Get Composition");
        const response = await SMSService.getComposition(compositionsInput, ctx);
        const compositions = _get(response, "compositions", EMPTY_ARRAY);
        cloudLogger.info("Received response from SMS Service on Get Composition");

        if (compositions.length) {
          notes.push(...compositions.map(convertCompositionFromProto));
          count += compositions.length;
        } else if (id && id.length) {
          const response = await SMSService.getNote(rpcInput, ctx);
          const patientNotes = _get(response, "notes", EMPTY_ARRAY);
          cloudLogger.info("Received Response from SMS Service after Get Composition to Get Note");

          const convertedPatientNotes = getConvertedPatientNotes(patientNotes);
          cloudLogger.info("Converted Patient Notes in Composition");

          notes.push(...convertedPatientNotes);
          count += convertedPatientNotes.length;
        }
      } catch (error) {
        cloudLogger.error("Error in getting all patients notes", req, { error });
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          code: StatusCodes.INTERNAL_SERVER_ERROR,
          details: error,
          message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
        });
      }
    }

    const results = notes.length ? sortNotesByDate(notes) : [];

    cloudLogger.info("Successfully received all patient notes");
    res.status(StatusCodes.OK).json({
      count,
      results,
      pageResponse: pageResponse
    });
  };
}

export default new PatientNotesController();
