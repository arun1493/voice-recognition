import { Router } from "express";

import intercomController from "../../controllers/intercomController";

const intercomRouter = Router();

intercomRouter
  .route("/user/:userId")
  .get(intercomController.getIntercomUser)

  intercomRouter
  .route("/increment-sign-in")
  .post(intercomController.incrementUserSignInsCount)

intercomRouter
  .route("/custom-attribures")
  .post(intercomController.updateIntercomCustomAttributes)

intercomRouter
  .route("/initialize-oobe")
  .post(intercomController.initializeOOBE)

intercomRouter
  .route("/oobe-tasks")
  .post(intercomController.updateOOBE)

intercomRouter
  .route("/oobe-completed")
  .post(intercomController.updateOOBECompletion)

export default intercomRouter;
