import { Router } from "express";

import DiagnosisController from "../../controllers/diagnosisController";

const diagnosisRouter = Router();

diagnosisRouter
  .route("/search")
  .get(DiagnosisController.searchDiagnosis);

diagnosisRouter
  .route("/suggestions")
  .get(DiagnosisController.getHCCSuggestions);

export default diagnosisRouter;
