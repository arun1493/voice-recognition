import { Router } from "express";

import preferenceController from "../../controllers/preferenceController";

const preferenceRouter = Router();

preferenceRouter
  .route("/")
  .get(preferenceController.getPreferences)
  .post(preferenceController.updatePreferences)

export default preferenceRouter;
