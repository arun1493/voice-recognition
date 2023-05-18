import { Router } from "express";

import noteLockController from "../../controllers/noteLockController";

const noteLockRouter = Router();

noteLockRouter
  .route("/")
  .get(noteLockController.getNoteLockStatus)

export default noteLockRouter;
