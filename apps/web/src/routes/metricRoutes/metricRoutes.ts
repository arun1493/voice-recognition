import { Router } from "express";

import { metricValidations } from "../../helpers";
import metricController from "../../controllers/metricController";

const metricRoutes = Router();

metricRoutes
  .route('/')
  .post(metricValidations, metricController.postEvents);

export default metricRoutes;
