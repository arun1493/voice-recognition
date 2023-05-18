import path from "path";
import * as grpcLibrary from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

import { clients, CLIENTS_LIST } from "../constants";
import { SMSClient } from "../grpc/generated/suki/pb/sms/SMS";
import { ProtoGrpcType as GrpcPDFService } from "../grpc/generated/pdf";
import { ProtoGrpcType as GrpcSMSService } from "../grpc/generated/sms";
import { ProtoGrpcType as GrpcOktaService } from "../grpc/generated/okta";
import { S2_StreamerClient } from "../grpc/generated/suki/pb/s2/S2_Streamer";
import { ProtoGrpcType as GrpcS2StreamerService } from "../grpc/generated/s2";
import { ProtoGrpcType as GrpcMacrosService } from "../grpc/generated/macros";
import { ProtoGrpcType as GrpcUniqueService } from "../grpc/generated/unique";
import { ProtoGrpcType as GrpcEmrService } from "../grpc/generated/emraccounts";
import { ProtoGrpcType as GrpcEMRNotesService } from "../grpc/generated/emrnotes";
import { MsVoiceAgentClient } from "../grpc/generated/suki/pb/voice/MsVoiceAgent";
import { ProtoGrpcType as GrpcPatientsService } from "../grpc/generated/patients";
import { ProtoGrpcType as GrpcUserService } from "../grpc/generated/user_service";
import { ProtoGrpcType as GrpcDiagnosisService } from "../grpc/generated/diagnosis";
import { ProtoGrpcType as GrpcNoteTypesService } from "../grpc/generated/notetypes";
import { PDFServiceClient } from "../grpc/generated/learningmotors/pb/pdf/PDFService";
import { EMRNotesClient } from "../grpc/generated/learningmotors/pb/emrnotes/EMRNotes";
import { UserServiceClient } from "../grpc/generated/learningmotors/pb/user/UserService";
import { ProtoGrpcType as GrpcSectionsService } from "../grpc/generated/sectionsservice";
import { OktaServiceClient } from "../grpc/generated/learningmotors/pb/okta/OktaService";
import { ProtoGrpcType as GrpcAppointmentsService } from "../grpc/generated/appointments";
import { SectionServiceClient } from "../grpc/generated/learningmotors/pb/SectionService";
import { ProtoGrpcType as GrpcVoiceAgentService } from "../grpc/generated/ms_voice_agent";
import { ProtoGrpcType as GrpcPatientChartService } from "../grpc/generated/patientcharts";
import { MacroServiceClient } from "../grpc/generated/learningmotors/pb/macros/MacroService";
import { DiagnosisServiceClient } from "../grpc/generated/suki/pb/diagnosis/DiagnosisService";
import { UniqueServiceClient } from "../grpc/generated/learningmotors/pb/unique/UniqueService";
import { ProtoGrpcType as GrpcImportsExportsService } from "../grpc/generated/imports_exports";
import { MsPatientChartsClient } from "../grpc/generated/suki/pb/patientcharts/MsPatientCharts";
import { ImportsExportsClient } from "../grpc/generated/suki/pb/imports_exports/ImportsExports";
import { ProtoGrpcType as GrpcOrganizationService } from "../grpc/generated/organization_service";
import { AppointmentServiceClient } from "../grpc/generated/learningmotors/pb/AppointmentService";
import { PatientServiceClient } from "../grpc/generated/learningmotors/pb/patients/PatientService";
import { NoteTypesServiceClient } from "../grpc/generated/learningmotors/pb/notetypes/NoteTypesService";
import { EMRAccountsServiceClient } from "../grpc/generated/learningmotors/pb/emraccounts/EMRAccountsService";
import { OrganizationServiceClient } from "../grpc/generated/learningmotors/pb/organization/OrganizationService";

class ClientFactory {
  private PROTO_PATH = path.join(__dirname, "../../../node_modules/protobufs/src/");

  private cachedClients = {};

  private getTarget(clientName: string): string {
    return `${clients[clientName].host}:${clients[clientName].port}`;
  }

  private loadPackageDefinition<T>(proto: protoLoader.PackageDefinition) {
    const packageDefinition = grpcLibrary.loadPackageDefinition(proto) as unknown as T;
    return packageDefinition;
  }

  private loadProto(filepath: string): protoLoader.PackageDefinition {
    const proto = protoLoader.loadSync(path.join(this.PROTO_PATH, filepath), {
      includeDirs: [this.PROTO_PATH],
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    });

    return proto;
  }

  private async waitForReady(client: grpcLibrary.Client, target: string): Promise<void> {
    return new Promise((resolve, reject) => {
      client.waitForReady(Date.now() + 5000, function (err) {
        if (err) {
          console.info("Unable to connect to: %s", target, err);
          reject();
        } else {
          console.info("Connected to: %s", target);
          resolve();
        }
      });
    });
  }

  public getUserPackage() {
    const clientName = CLIENTS_LIST.USERS;
    const filepath = clients[clientName].path;
    const proto = this.loadProto(filepath);
    const packageDefinition = this.loadPackageDefinition<GrpcUserService>(proto);
    return packageDefinition.learningmotors.pb.user;
  }

  async getUserServiceClient(): Promise<UserServiceClient> {
    const clientName = CLIENTS_LIST.USERS;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcUserService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.learningmotors.pb.user.UserService(
        target,
        grpcLibrary.credentials.createInsecure()
      );

      await this.waitForReady(client, target);
      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-users", error);
    }
  }

  async getOktaServiceClient(): Promise<OktaServiceClient> {
    const clientName = CLIENTS_LIST.OKTA;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcOktaService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.learningmotors.pb.okta.OktaService(
        target,
        grpcLibrary.credentials.createInsecure()
      );

      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-okta", error);
    }
  }

  async getSMSServiceClient(): Promise<SMSClient> {
    const clientName = CLIENTS_LIST.SMS;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcSMSService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.suki.pb.sms.SMS(target, grpcLibrary.credentials.createInsecure(), {
        "grpc.max_receive_message_length": 1024 * 1024 * 100
      });

      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-sms", error);
    }
  }

  async getPDFServiceClient(): Promise<PDFServiceClient> {
    const clientName = CLIENTS_LIST.PDF;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcPDFService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.learningmotors.pb.pdf.PDFService(
        target,
        grpcLibrary.credentials.createInsecure()
      );

      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-pdf", error);
    }
  }

  async getNoteTypesServiceClient(): Promise<NoteTypesServiceClient> {
    const clientName = CLIENTS_LIST.NOTE_TYPES;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcNoteTypesService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.learningmotors.pb.notetypes.NoteTypesService(
        target,
        grpcLibrary.credentials.createInsecure()
      );

      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-notetypes", error);
    }
  }

  async getPatientsServiceClient(): Promise<PatientServiceClient> {
    const clientName = CLIENTS_LIST.PATIENTS;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcPatientsService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.learningmotors.pb.patients.PatientService(
        target,
        grpcLibrary.credentials.createInsecure()
      );

      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-patients", error);
    }
  }

  async getAppointmentsServiceClient(): Promise<AppointmentServiceClient> {
    const clientName = CLIENTS_LIST.APPOINTMENTS;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcAppointmentsService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.learningmotors.pb.AppointmentService(
        target,
        grpcLibrary.credentials.createInsecure()
      );

      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-appointments", error);
    }
  }

  async getEmrAccountsServiceClient(): Promise<EMRAccountsServiceClient> {
    const clientName = CLIENTS_LIST.EMR_ACCOUNTS;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcEmrService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.learningmotors.pb.emraccounts.EMRAccountsService(
        target,
        grpcLibrary.credentials.createInsecure()
      );

      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-emracconts", error);
    }
  }

  async getOrganizationsServiceClient(): Promise<OrganizationServiceClient> {
    const clientName = CLIENTS_LIST.ORGANIZATIONS;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcOrganizationService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.learningmotors.pb.organization.OrganizationService(
        target,
        grpcLibrary.credentials.createInsecure()
      );

      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-organizations", error);
    }
  }

  async getMacrosServiceClient(): Promise<MacroServiceClient> {
    const clientName = CLIENTS_LIST.MACROS;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcMacrosService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.learningmotors.pb.macros.MacroService(
        target,
        grpcLibrary.credentials.createInsecure()
      );
      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-macros", error);
    }
  }

  async getDiagnosisServiceClient(): Promise<DiagnosisServiceClient> {
    const clientName = CLIENTS_LIST.DIAGNOSIS;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcDiagnosisService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.suki.pb.diagnosis.DiagnosisService(
        target,
        grpcLibrary.credentials.createInsecure()
      );

      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-diagnosis", error);
    }
  }

  async getPatientChartServiceClient(): Promise<MsPatientChartsClient> {
    const clientName = CLIENTS_LIST.PATIENT_CHARTS;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcPatientChartService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.suki.pb.patientcharts.MsPatientCharts(
        target,
        grpcLibrary.credentials.createInsecure()
      );

      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-patient-charts", error);
    }
  }

  async getSectionsServiceClient(): Promise<SectionServiceClient> {
    const clientName = CLIENTS_LIST.SECTIONS;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcSectionsService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.learningmotors.pb.SectionService(
        target,
        grpcLibrary.credentials.createInsecure()
      );

      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-sections", error);
    }
  }

  async getS2StreamerClient(): Promise<S2_StreamerClient> {
    const clientName = CLIENTS_LIST.S2;
    const client = this.cachedClients[clientName];

    console.log("getting s2 streamer client");
    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcS2StreamerService>(proto);
      const target = this.getTarget(clientName);
      console.log("s2 streamer target", target);
      const client = new packageDefinition.suki.pb.s2.S2_Streamer(target, grpcLibrary.credentials.createInsecure());
      console.log("waiting for connection");
      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-s2", error);
    }
  }

  async getDictationClient(): Promise<MsVoiceAgentClient> {
    const clientName = CLIENTS_LIST.VOICE;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcVoiceAgentService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.suki.pb.voice.MsVoiceAgent(target, grpcLibrary.credentials.createInsecure());
      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-dictation", error);
    }
  }

  async getImportsExportsClient(): Promise<ImportsExportsClient> {
    const clientName = CLIENTS_LIST.IMPORTS_EXPORTS;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcImportsExportsService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.suki.pb.imports_exports.ImportsExports(
        target,
        grpcLibrary.credentials.createInsecure()
      );
      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-imports-exports", error);
    }
  }

  async getUniqueServiceClient(): Promise<UniqueServiceClient> {
    const clientName = CLIENTS_LIST.UNIQUE;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcUniqueService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.learningmotors.pb.unique.UniqueService(
        target,
        grpcLibrary.credentials.createInsecure()
      );

      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-unique", error);
    }
  }

  async getSukiAsrClient(): Promise<MsVoiceAgentClient> {
    const clientName = CLIENTS_LIST.SUKI_ASR;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcVoiceAgentService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.suki.pb.voice.MsVoiceAgent(target, grpcLibrary.credentials.createInsecure());
      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-suki-asr-dictation", error);
    }
  }

  async getEMRNotesClient(): Promise<EMRNotesClient> {
    const clientName = CLIENTS_LIST.EMR_NOTES;
    const client = this.cachedClients[clientName];

    if (client) return client;

    try {
      const filepath = clients[clientName].path;
      const proto = this.loadProto(filepath);
      const packageDefinition = this.loadPackageDefinition<GrpcEMRNotesService>(proto);
      const target = this.getTarget(clientName);

      const client = new packageDefinition.learningmotors.pb.emrnotes.EMRNotes(
        target,
        grpcLibrary.credentials.createInsecure()
      );
      await this.waitForReady(client, target);

      this.cachedClients[clientName] = client;
      return client;
    } catch (error) {
      console.error("Unable to connect to ms-emr-epic-notes", error);
    }
  }
}

export default new ClientFactory();
