// Original file: node_modules/protobufs/src/suki/pb/imports_exports/imports_exports.proto

export interface ImportScheduleJobRequest {
  organization_id?: string;
  user_id?: string;
  file_name?: string;
  file_url?: string;
}

export interface ImportScheduleJobRequest__Output {
  organization_id: string;
  user_id: string;
  file_name: string;
  file_url: string;
}
