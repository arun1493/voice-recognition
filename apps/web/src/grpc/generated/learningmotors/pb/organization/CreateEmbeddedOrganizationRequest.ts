// Original file: node_modules/protobufs/src/learningmotors/pb/organization/embedded_organization.proto

import type {
  Organization as _learningmotors_pb_organization_Organization,
  Organization__Output as _learningmotors_pb_organization_Organization__Output
} from "../../../learningmotors/pb/organization/Organization";

export interface CreateEmbeddedOrganizationRequest {
  parent_organization_id?: string;
  organization?: _learningmotors_pb_organization_Organization | null;
  tenant_id?: string;
  tenant_name?: string;
}

export interface CreateEmbeddedOrganizationRequest__Output {
  parent_organization_id: string;
  organization: _learningmotors_pb_organization_Organization__Output | null;
  tenant_id: string;
  tenant_name: string;
}
