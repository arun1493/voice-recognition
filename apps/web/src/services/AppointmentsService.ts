import { createMetadata } from "../helpers";
import ClientFactory from "../factories/ClientFactory";
import { AppointmentServiceClient } from "../grpc/generated/learningmotors/pb/AppointmentService";
import { GetAppointmentsResponse__Output } from "../grpc/generated/learningmotors/pb/GetAppointmentsResponse";
import { CreateOrUpdateAppointmentResponse__Output } from "../grpc/generated/learningmotors/pb/CreateOrUpdateAppointmentResponse";
import { UpdateAppointmentCompositionResponse__Output } from "../grpc/generated/learningmotors/pb/UpdateAppointmentCompositionResponse";

class AppointmentsService {
  public client: AppointmentServiceClient;

  constructor() {
    ClientFactory.getAppointmentsServiceClient().then((client) => (this.client = client));
  }

  getAppointments(input, ctx): Promise<GetAppointmentsResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.getAppointments(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  removeCompositionFromAppointment(input, ctx): Promise<UpdateAppointmentCompositionResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.removeCompositionFromAppointment(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  createOrUpdateAppointment(input, ctx): Promise<CreateOrUpdateAppointmentResponse__Output> {
    return new Promise((resolve, reject) => {
      this.client.createOrUpdateAppointment(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new AppointmentsService();
