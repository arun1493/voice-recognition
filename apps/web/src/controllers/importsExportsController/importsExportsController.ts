import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { cloudLogger, getIds } from "../../helpers";
import ImportsExportsService from "../../services/ImportsExportsService";
import GoogleCloudStorageService from "../../services/GoogleCloudStorageService";
import { ERROR_STATEMENTS, JobStatuses, SUKI_X_BUCKET_NAMES } from "../../constants";

const BUCKET_NAME = SUKI_X_BUCKET_NAMES[process.env.DEPLOYMENT_ENVIRONMENT];

class ImportsExportsController {
  googleCloudStorage: GoogleCloudStorageService;

  constructor() {
    this.googleCloudStorage = new GoogleCloudStorageService(BUCKET_NAME);
  }

  waitForJobStatus = async (req: Request, res: Response, jobId, rpcInputJobStatus, userCtx) => {
    cloudLogger.info("Waiting for job status");
    setTimeout(async () => {
      const jobStatus = await ImportsExportsService.getJobStatus(rpcInputJobStatus, userCtx);
      const job = jobStatus?.jobs?.find((el) => el.id === jobId);
      cloudLogger.info(`[waitForJobStatus]: pulling job status - ${job}`);

      if (job?.status === JobStatuses.ERROR) {
        cloudLogger.error("[waitForJobStatus]: job error, failed to import appointments", req);
        res
          .status(StatusCodes.NO_CONTENT)
          .json({ payload: "[waitForJobStatus]: job error, failed to import appointments" });
      } else if (job?.status === JobStatuses.COMPLETED) {
        cloudLogger.info("Job status: completed", req, { jobDetails: job });
        res.status(StatusCodes.OK).json({ payload: job?.import_job_details });
      } else {
        cloudLogger.info("Waiting for job status", req);
        this.waitForJobStatus(req, res, jobId, rpcInputJobStatus, userCtx);
      }
    }, 5000);
  };

  uploadFile = async (req: Request, res: Response) => {
    cloudLogger.info("[uploadFIle]: processing");

    const { organizationId, userId } = getIds(req);

    console.log(req.file, organizationId, userId);

    if (!req?.file) {
      cloudLogger.error("File is missing", req);
      res.status(StatusCodes.BAD_REQUEST).json({ payload: "File is missing" });
    }
    if (!organizationId || !userId) {
      cloudLogger.error(
        `${
          !organizationId && !userId ? "organizationId and userId" : !organizationId ? "organizationId" : "userId"
        } is missing`,
        req
      );
      res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        message: `${
          !organizationId && !userId ? "organizationId and userId" : !organizationId ? "organizationId" : "userId"
        } is missing`
      });
    }

    try {
      cloudLogger.info("[uploadFile]: File found, trying to upload...");
      const { originalname, buffer } = req.file;

      const rpcInputImportSchedule = {
        user_id: userId,
        organization_id: organizationId,
        file_name: originalname,
        file_url: `gs://${BUCKET_NAME}/${organizationId}/${userId}/${originalname}`
      };
      const userCtx = {
        suki_user_id: userId,
        suki_organization_id: organizationId
      };

      const fileName = `${organizationId}/${userId}/${originalname}`;
      await this.googleCloudStorage.uploadFile(buffer, fileName);

      const response = await ImportsExportsService.importScheduleJob(rpcInputImportSchedule, userCtx);
      cloudLogger.info("[uploadFile]: importScheduleJob response");

      const rpcInputJobStatus = {
        user_id: userId,
        organization_id: organizationId,
        job_ids: [response?.job?.id]
      };

      cloudLogger.info("Successfully completed uploading file", req, {
        fileName,
        fileUrl: rpcInputImportSchedule.file_url
      });
      this.waitForJobStatus(req, res, response?.job?.id, rpcInputJobStatus, userCtx);
    } catch (error) {
      cloudLogger.error("Error in uploading file", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
      return;
    }
  };
}

export default new ImportsExportsController();
