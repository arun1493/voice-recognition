import _property from "lodash/property";

import { EmbedUserDetails } from "../types";

const id = _property<EmbedUserDetails, string>("id");
const tenantName = _property<EmbedUserDetails, string>("tenant_name");
const partnerId = _property<EmbedUserDetails, string>("partner_id");
const sukiUserId = _property<EmbedUserDetails, string>("suki_user_id");
const sukiOrganizationId = _property<EmbedUserDetails, string>("suki_organization_id");
const oktaUsername = _property<EmbedUserDetails, string>("okta_username");
const oktaPassword = _property<EmbedUserDetails, string>("okta_creds");

export default {
  id,
  oktaPassword,
  oktaUsername,
  partnerId,
  sukiOrganizationId,
  sukiUserId,
  tenantName
};
