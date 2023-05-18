// Original file: node_modules/protobufs/src/learningmotors/pb/emraccounts/emraccounts.proto

export interface APICredentials {
  key?: string;
  secret?: string;
  version?: string;
  username?: string;
  password?: string;
  base_url?: string;
  fhir_base_url?: string;
  auth_base_url?: string;
}

export interface APICredentials__Output {
  key: string;
  secret: string;
  version: string;
  username: string;
  password: string;
  base_url: string;
  fhir_base_url: string;
  auth_base_url: string;
}
