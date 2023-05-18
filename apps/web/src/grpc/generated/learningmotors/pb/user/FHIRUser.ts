// Original file: node_modules/protobufs/src/learningmotors/pb/user/fhiruser.proto

export interface FHIRUser {
  id?: string;
  suki_user_id?: string;
  suki_organization_id?: string;
  okta_username?: string;
  okta_creds?: string;
  fhir_tenant_id?: string;
  emr_user_id?: string;
}

export interface FHIRUser__Output {
  id: string;
  suki_user_id: string;
  suki_organization_id: string;
  okta_username: string;
  okta_creds: string;
  fhir_tenant_id: string;
  emr_user_id: string;
}
