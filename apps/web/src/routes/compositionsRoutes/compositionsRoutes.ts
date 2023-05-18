import { Router } from "express";

import CompositionsController from "../../controllers/compositionsController";

const compositionsRouter = Router();

compositionsRouter
  .route("/unfinished-count")
  .get(CompositionsController.getUnfinishedCompositions);

  compositionsRouter
  .route("/completed-notes")
  .get(CompositionsController.getCompletedNotes);

compositionsRouter
  .route("/:compositionId")
  .delete(CompositionsController.deleteComposition);

export default compositionsRouter;
