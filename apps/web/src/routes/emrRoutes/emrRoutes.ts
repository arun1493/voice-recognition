import { Router } from "express";

import { validateSukiUserId } from "../../helpers";
import EmrNotesController from "../../controllers/emrNotesController";

const emrRouter = Router();

emrRouter
  .route("/epic-notes-refresh")
  .post([validateSukiUserId], EmrNotesController.refreshEmrNotes);

export default emrRouter;
