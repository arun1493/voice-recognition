import { Router } from "express";

import AppointmentsController from "../../controllers/appointmentsController";

const appointmentsRouter = Router();

appointmentsRouter
  .route("/")
  .post(AppointmentsController.createOrUpdateAppointment);

export default appointmentsRouter;
