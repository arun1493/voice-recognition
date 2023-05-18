import { Router } from "express";

import embedController from "../../controllers/embedController";

const embedRouter = Router();
  
embedRouter
  .route("/embed-user")
  .post(embedController.getEmbedUser);

export default embedRouter;
