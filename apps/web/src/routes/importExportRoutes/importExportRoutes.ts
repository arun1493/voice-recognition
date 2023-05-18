import { Router } from "express";
import importsExportsController from "../../controllers/importsExportsController";
import Multer from "multer";

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024 // no larger 5mb
  }
});

const importExportRouter = Router();

importExportRouter
  .route("/")
  .post(multer.single("csvFile"), importsExportsController.uploadFile)

export default importExportRouter;
