import { Router } from "express";

import PatientNotesController from "../../controllers/patientNotesController";

const PatientNotesRouter = Router();

PatientNotesRouter
  .route("/")
  .get(PatientNotesController.getAllPatientNotes);

PatientNotesRouter
  .route("/:noteId")
  .get(PatientNotesController.getNote);

PatientNotesRouter
  .route("/compositionOrNote/:noteId")
  .get(PatientNotesController.getCompositionOrNote);

export default PatientNotesRouter;
