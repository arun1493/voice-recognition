// Original file: node_modules/protobufs/src/suki/pb/auther/auther.proto

export interface GetTokensRequest {
  organization_id?: string;
  include_expired?: boolean;
  project_id?: string;
}

export interface GetTokensRequest__Output {
  organization_id: string;
  include_expired: boolean;
  project_id: string;
}
