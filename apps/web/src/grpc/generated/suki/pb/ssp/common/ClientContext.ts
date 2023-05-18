// Original file: node_modules/protobufs/src/suki/pb/ssp/common/util.proto

export interface ClientContext {
  user_id?: string;
  organization_id?: string;
  jwt_token?: string;
  device_id?: string;
  project_id?: string;
}

export interface ClientContext__Output {
  user_id: string;
  organization_id: string;
  jwt_token: string;
  device_id: string;
  project_id: string;
}
