import { Router } from "express";

import fhirController from "../../controllers/fhirController";

const fhirRouter = Router();

fhirRouter
  .route("/config/:platform")
  .get(fhirController.getFhirConfig);

fhirRouter
  .route("/token/:emr")
  .get(fhirController.getEmrTokens)
  .post(fhirController.updateEmrTokens);

export default fhirRouter;
