import { Router } from "express";

import PatientsController from "../../controllers/patientsController";
import AppointmentsController from "../../controllers/appointmentsController";

const patientsRouter = Router();

patientsRouter
  .route("/search")
  .get(PatientsController.searchPatients);

patientsRouter
  .route("/schedule")
  .get(AppointmentsController.getAppointments);

patientsRouter
  .route("/list")
  .get(PatientsController.getPatientList)
  .post(PatientsController.addToPatientList);

patientsRouter
  .route("/list/:patientId")
  .delete(PatientsController.removeFromPatientList);

patientsRouter
  .route("/:patientId")
  .get(PatientsController.getPatientById);

patientsRouter
  .route("/")
  .put(PatientsController.createOrUpdatePatients)
  .post(PatientsController.createOrUpdatePatients);

export default patientsRouter;
