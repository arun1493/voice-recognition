import { Router } from "express";

import AmwellController from "../../controllers/amwellController";
import { providerValidations, validateAmwellSystemToken } from "../../helpers";

const amwellRoutes = Router();

amwellRoutes
  .route("/providers")
  .post([validateAmwellSystemToken, ...providerValidations], AmwellController.provisionProviders)

amwellRoutes
  .route("/providers/authorize")
  .post(AmwellController.authorizeProviders)

amwellRoutes
  .route("/providers/note")
  .get(AmwellController.getProviderNote)

amwellRoutes
  .route("/encounters")
  .post(AmwellController.createSukiEncounter)

export default amwellRoutes;
