import { createMetadata } from "../helpers";
import ClientFactory from "../factories/ClientFactory";
import { MsPatientChartsClient } from "../grpc/generated/suki/pb/patientcharts/MsPatientCharts";
import { SyncChartsDataResponse__Output } from "../grpc/generated/suki/pb/patientcharts/SyncChartsDataResponse";
import { GetDynamicChartsDataResponse__Output } from "../grpc/generated/suki/pb/patientcharts/GetDynamicChartsDataResponse";

class PatientChartsService {
  public client: MsPatientChartsClient;

  constructor() {
    ClientFactory.getPatientChartServiceClient().then((client) => (this.client = client));
  }

  syncChartsData(input, ctx): Promise<SyncChartsDataResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.syncChartsData(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getDynamicChartsData(input, ctx): Promise<GetDynamicChartsDataResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.getDynamicChartsData(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new PatientChartsService();
