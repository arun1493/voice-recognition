import { Router } from "express";

import diagnosisController from "../../controllers/diagnosisController";

const edgCodesRouter = Router();

edgCodesRouter
  .route("/")
  .get(diagnosisController.lookupEDG);

export default edgCodesRouter;
