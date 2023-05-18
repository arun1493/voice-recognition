// Original file: node_modules/protobufs/src/learningmotors/pb/user/embedded_user.proto

export interface EmbeddedUser {
  id?: string;
  tenant_name?: string;
  partner_id?: string;
  suki_user_id?: string;
  suki_organization_id?: string;
  okta_username?: string;
  okta_creds?: string;
}

export interface EmbeddedUser__Output {
  id: string;
  tenant_name: string;
  partner_id: string;
  suki_user_id: string;
  suki_organization_id: string;
  okta_username: string;
  okta_creds: string;
}
