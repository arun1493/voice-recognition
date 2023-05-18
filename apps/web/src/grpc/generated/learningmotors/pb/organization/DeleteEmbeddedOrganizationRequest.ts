// Original file: node_modules/protobufs/src/learningmotors/pb/organization/embedded_organization.proto

export interface DeleteEmbeddedOrganizationRequest {
  parent_organization_id?: string;
  suki_organization_id?: string;
  tenant_id?: string;
  id?: string;
  delete_suki_organization?: boolean;
}

export interface DeleteEmbeddedOrganizationRequest__Output {
  parent_organization_id: string;
  suki_organization_id: string;
  tenant_id: string;
  id: string;
  delete_suki_organization: boolean;
}
