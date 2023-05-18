import { Router } from "express";

import { featureFlagsValidations } from "../../helpers";
import featureFlagsController from "../../controllers/featureFlagsController";

const featureFlagsRouter = Router();

featureFlagsRouter
  .route("/")
  .get(featureFlagsValidations, featureFlagsController.getFeatureFlagsByUserId)


export default featureFlagsRouter;

