import { Router } from "express";

import PDFController from "../../controllers/PDFController";

const pdfRouter = Router();

pdfRouter
  .route("/note")
  .get(PDFController.getNotePDFUri)

pdfRouter
  .route("/notes-print")
  .post(PDFController.getNotesPDFToPrintUri)

pdfRouter
  .route("/notes-save")
  .post(PDFController.getNotesPDFToSaveUri)

export default pdfRouter;

