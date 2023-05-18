import { Router } from "express";

import PatientChartsController from "../../controllers/patientChartsController";

const patientChartsRouter = Router();

patientChartsRouter
  .route("/sync")
  .get(PatientChartsController.syncChartsData);

patientChartsRouter
  .route("/allergies")
  .get(PatientChartsController.getPatientAllergies);

patientChartsRouter
  .route("/medical-history")
  .get(PatientChartsController.getPatientMedicalHistory);

patientChartsRouter
  .route("/vitals")
  .get(PatientChartsController.getPatientVitals);

patientChartsRouter
  .route("/surgical-history")
  .get(PatientChartsController.getPatientSurgicalHistory);

patientChartsRouter
  .route("/medications")
  .get(PatientChartsController.getPatientMedications);

patientChartsRouter
  .route("/labs")
  .get(PatientChartsController.gePatientLabsData);

export default patientChartsRouter;
