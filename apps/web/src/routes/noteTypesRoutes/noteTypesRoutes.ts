import { Router } from "express";

import NoteTypesController from "../../controllers/noteTypesController";

const noteTypesRouter = Router();

noteTypesRouter
  .route("/")
  .get(NoteTypesController.getNoteTypes)
  .post(NoteTypesController.createNoteType);

noteTypesRouter
  .route("/:id")
  .get(NoteTypesController.getNoteTypes)
  .put(NoteTypesController.updateNoteType)
  .delete(NoteTypesController.deleteNoteTypes);

export default noteTypesRouter;