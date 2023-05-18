// Original file: node_modules/protobufs/src/learningmotors/pb/user/user.proto

export interface GetUserRegistrationsRequest {
  organization_id?: string;
  ids?: string[];
  emails?: string[];
}

export interface GetUserRegistrationsRequest__Output {
  organization_id: string;
  ids: string[];
  emails: string[];
}
