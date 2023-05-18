import { createMetadata } from "../helpers";
import ClientFactory from "../factories/ClientFactory";
import { ImportsExportsClient } from "../grpc/generated/suki/pb/imports_exports/ImportsExports";
import { JobStatusResponse__Output } from "../grpc/generated/suki/pb/imports_exports/JobStatusResponse";
import { ImportScheduleJobResponse__Output } from "../grpc/generated/suki/pb/imports_exports/ImportScheduleJobResponse";

class ImportsExportsService {
  public client: ImportsExportsClient;

  constructor() {
    ClientFactory.getImportsExportsClient().then((client) => (this.client = client));
  }

  importScheduleJob(input, ctx): Promise<ImportScheduleJobResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.importScheduleJob(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getJobStatus(input, ctx): Promise<JobStatusResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.jobStatus(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new ImportsExportsService();
