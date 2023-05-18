import { Router } from "express";

import RegistrationController from "../../controllers/registrationController";

const registrationRouter = Router();

registrationRouter
  .route("/")
  .post(RegistrationController.createUserRegistration)
  .get(RegistrationController.getUserRegistrations)

registrationRouter
  .route("/create-password")
  .post(RegistrationController.createPassword)

registrationRouter
  .route("/verification-email")
  .post(RegistrationController.sendVerificationEmail)

registrationRouter
  .route("/validate-token")
  .post(RegistrationController.validateRegistrationVerificationToken)

export default registrationRouter;
