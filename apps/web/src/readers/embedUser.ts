import _property from "lodash/property";

const id = _property("id");
const tenantName = _property("tenant_name");
const partnerId = _property("partner_id");
const sukiUserId = _property("suki_user_id");
const sukiOrganizationId = _property("suki_organization_id");
const oktaUsername = _property("okta_username");
const oktaCreds = _property("okta_creds");

export default {
  id,
  oktaCreds,
  oktaUsername,
  partnerId,
  sukiOrganizationId,
  sukiUserId,
  tenantName
};
