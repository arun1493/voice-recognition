// Original file: node_modules/protobufs/src/learningmotors/pb/emraccounts/emraccounts.proto

export interface GetUserByEmrIdentifiersRequest {
  emr_id?: string;
  emr_organization_id?: string;
  emr_organization_source_id?: string;
  suki_organization_id?: string;
}

export interface GetUserByEmrIdentifiersRequest__Output {
  emr_id: string;
  emr_organization_id: string;
  emr_organization_source_id: string;
  suki_organization_id: string;
}
