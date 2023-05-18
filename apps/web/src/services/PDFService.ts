import { createMetadata } from "../helpers";
import ClientFactory from "../factories/ClientFactory";
import { PDFServiceClient } from "../grpc/generated/learningmotors/pb/pdf/PDFService";
import { NoteResponse__Output } from "../grpc/generated/learningmotors/pb/pdf/NoteResponse";
import { BulkSaveResponse__Output } from "../grpc/generated/learningmotors/pb/pdf/BulkSaveResponse";
import { BulkPrintResponse__Output } from "../grpc/generated/learningmotors/pb/pdf/BulkPrintResponse";
import { ConditionResponse__Output } from "../grpc/generated/learningmotors/pb/pdf/ConditionResponse";
import { DocumentReferenceResponse__Output } from "../grpc/generated/learningmotors/pb/pdf/DocumentReferenceResponse";

class PDFService {
  public client: PDFServiceClient;

  constructor() {
    ClientFactory.getPDFServiceClient().then((client) => (this.client = client));
  }

  getNotePDF(input, ctx): Promise<NoteResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.note(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getNotesBulkPrintPDF(input, ctx): Promise<BulkPrintResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.BulkPrint(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  convertCompositionToDocumentReference(input, ctx): Promise<DocumentReferenceResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.convertCompositionToDocumentReference(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getNotesBulkSavePDF(input, ctx): Promise<BulkSaveResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.BulkSave(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  convertCompositionToConditions(input, ctx): Promise<ConditionResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.convertCompositionToConditions(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new PDFService();
