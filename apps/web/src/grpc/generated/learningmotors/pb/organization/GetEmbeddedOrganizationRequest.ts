// Original file: node_modules/protobufs/src/learningmotors/pb/organization/embedded_organization.proto

export interface GetEmbeddedOrganizationRequest {
  parent_organization_id?: string;
  suki_organization_id?: string;
  tenant_id?: string;
  id?: string;
}

export interface GetEmbeddedOrganizationRequest__Output {
  parent_organization_id: string;
  suki_organization_id: string;
  tenant_id: string;
  id: string;
}
