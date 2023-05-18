// Original file: node_modules/protobufs/src/suki/pb/auther/auther.proto

export interface ValidateTokenRequest {
  token?: string;
  organization_id?: string;
  project_id?: string;
}

export interface ValidateTokenRequest__Output {
  token: string;
  organization_id: string;
  project_id: string;
}
