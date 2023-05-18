import { Router } from "express";

import desktopController from "../../controllers/desktopController";

const desktopRouter = Router();

desktopRouter
  .route("/windows-release-notes")
  .get(desktopController.getWindowsReleaseNotes)

export default desktopRouter;
