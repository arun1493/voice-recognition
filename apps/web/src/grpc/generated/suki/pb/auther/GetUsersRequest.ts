// Original file: node_modules/protobufs/src/suki/pb/auther/auther.proto

export interface GetUsersRequest {
  organization_id?: string;
  ids?: string[];
  emails?: string[];
}

export interface GetUsersRequest__Output {
  organization_id: string;
  ids: string[];
  emails: string[];
}
