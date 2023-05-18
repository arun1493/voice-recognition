import { createMetadata } from "../helpers";
import ClientFactory from "../factories/ClientFactory";
import { DiagnosisServiceClient } from "../grpc/generated/suki/pb/diagnosis/DiagnosisService";
import { SearchMLResponse__Output } from "../grpc/generated/suki/pb/diagnosis/SearchMLResponse";
import { LookupEDGResponse__Output } from "../grpc/generated/suki/pb/diagnosis/LookupEDGResponse";
import { GetHCCSuggestionsResponse__Output } from "../grpc/generated/suki/pb/diagnosis/GetHCCSuggestionsResponse";

class DiagnosisService {
  public client: DiagnosisServiceClient;

  constructor() {
    ClientFactory.getDiagnosisServiceClient().then((client) => (this.client = client));
  }

  lookupEDG(input, ctx): Promise<LookupEDGResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.lookupEdg(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  searchDiagnosis(input, ctx): Promise<SearchMLResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.searchMl(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  getHCCSuggestions(input, ctx): Promise<GetHCCSuggestionsResponse__Output> {
    return new Promise((resolve, reject) => {
      return this.client.getHccSuggestions(input, createMetadata(ctx), (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }
}

export default new DiagnosisService();
