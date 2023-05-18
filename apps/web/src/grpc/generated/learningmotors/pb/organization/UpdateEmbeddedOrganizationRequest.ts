// Original file: node_modules/protobufs/src/learningmotors/pb/organization/embedded_organization.proto

export interface UpdateEmbeddedOrganizationRequest {
  parent_organization_id?: string;
  suki_organization_id?: string;
  tenant_id?: string;
  tenant_name?: string;
}

export interface UpdateEmbeddedOrganizationRequest__Output {
  parent_organization_id: string;
  suki_organization_id: string;
  tenant_id: string;
  tenant_name: string;
}
