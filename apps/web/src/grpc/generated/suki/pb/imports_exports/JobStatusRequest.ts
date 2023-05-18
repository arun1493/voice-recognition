// Original file: node_modules/protobufs/src/suki/pb/imports_exports/imports_exports.proto

export interface JobStatusRequest {
  organization_id?: string;
  user_id?: string;
  job_ids?: string[];
  pre_signed_urls?: boolean;
}

export interface JobStatusRequest__Output {
  organization_id: string;
  user_id: string;
  job_ids: string[];
  pre_signed_urls: boolean;
}
