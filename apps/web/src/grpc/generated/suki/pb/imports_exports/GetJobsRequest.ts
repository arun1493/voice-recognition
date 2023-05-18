// Original file: node_modules/protobufs/src/suki/pb/imports_exports/imports_exports.proto

export interface GetJobsRequest {
  organization_id?: string;
  user_id?: string;
  pre_signed_urls?: boolean;
}

export interface GetJobsRequest__Output {
  organization_id: string;
  user_id: string;
  pre_signed_urls: boolean;
}
