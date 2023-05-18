import { Router } from "express";

import logMessageController from "../../controllers/logMessageController";

const logMessageRouter = Router();

logMessageRouter
  .route("/")
  .post(logMessageController.logMessage)

export default logMessageRouter;
