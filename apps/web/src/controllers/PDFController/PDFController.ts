import _get from "lodash/get";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import PDFService from "../../services/PDFService";
import { ERROR_STATEMENTS } from "../../constants";
import { buildScope, cloudLogger, getContext } from "../../helpers";

class PDFController {
  getNotePDFUri = async (req: Request, res: Response) => {
    const ctx = getContext(req, true);
    const compositionId = _get(req, "query.compositionId");
    const noteId = _get(req, "query.noteId");

    const rpcInput = {
      scope: buildScope(ctx),
      composition_id: compositionId,
      note_id: noteId
    };

    try {
      cloudLogger.info("Getting note pdf uri");
      const response = await PDFService.getNotePDF(rpcInput, ctx);
      const pdfUri = _get(response, "pdf.uri");

      if (!pdfUri) {
        cloudLogger.error("[getNotePDFUri]: pdf uri is empty", req);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          code: StatusCodes.INTERNAL_SERVER_ERROR,
          message: "pdf uri is empty"
        });
        return;
      }

      cloudLogger.info("Completed getting note pdf uri", req, { rpcInput, uri: pdfUri });
      res.status(StatusCodes.OK).json({ uri: pdfUri });
    } catch (error) {
      cloudLogger.error("Error in getting note PDF uri", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  getNotesPDFToPrintUri = async (req: Request, res: Response) => {
    const ctx = getContext(req, true);
    const compositionIds = _get(req, "body.compositionIds");
    const patientsNotesIds = _get(req, "body.patientsNotesIds");

    const rpcInput = {
      scope: buildScope(ctx),
      composition_ids: compositionIds,
      patient_note_ids: patientsNotesIds
    };

    try {
      cloudLogger.info("Getting notes pdf to print uri");
      const response = await PDFService.getNotesBulkPrintPDF(rpcInput, ctx);
      const pdfUri = _get(response, "pdf.uri");

      if (!pdfUri) {
        cloudLogger.error("[getNotePDFToPrintUri]: pdf uri is empty", req);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          code: StatusCodes.INTERNAL_SERVER_ERROR,
          message: "pdf uri is empty"
        });
        return;
      }

      cloudLogger.info("Completed getting note pdf to print uri", req, { rpcInput, uri: pdfUri });
      res.status(StatusCodes.OK).json({ uri: pdfUri });
    } catch (error) {
      cloudLogger.error("Error in getting notes PDF to print uri", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };

  getNotesPDFToSaveUri = async (req: Request, res: Response) => {
    const ctx = getContext(req, true);
    const compositionIds = _get(req, "body.compositionIds");
    const patientsNotesIds = _get(req, "body.patientsNotesIds");

    const rpcInput = {
      scope: buildScope(ctx),
      composition_ids: compositionIds,
      patient_note_ids: patientsNotesIds
    };

    try {
      cloudLogger.info("Getting note pdf to save uri");
      const response = await PDFService.getNotesBulkSavePDF(rpcInput, ctx);
      const pdfUri = _get(response, "zip.uri");

      if (!pdfUri) {
        cloudLogger.error("[getNotePDFToSaveUri]: pdf uri is empty", req);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          code: StatusCodes.INTERNAL_SERVER_ERROR,
          message: "pdf uri is empty"
        });
        return;
      }

      cloudLogger.info("Completed getting note pdf to save uri", req, { rpcInput, uri: pdfUri });
      res.status(StatusCodes.OK).json({ uri: pdfUri });
    } catch (error) {
      cloudLogger.error("Error in getting notes PDF to save uri", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }
  };
}

export default new PDFController();
