// Original file: node_modules/protobufs/src/suki/pb/auther/auther.proto

export interface DeactivateTokenRequest {
  organization_id?: string;
  jwt?: string;
}

export interface DeactivateTokenRequest__Output {
  organization_id: string;
  jwt: string;
}
