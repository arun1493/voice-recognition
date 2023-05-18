import _isEmpty from "lodash/isEmpty";

import {
  convertEnhancedReviewToProto,
  convertGenderToProto,
  convertRolesToProto,
  convertSpecialtiesToProto
} from "../conversions";
import { oktaClientId } from "../okta";
import { providerReader } from "../../readers";
import { EnhancedReviewOptions, RoleType, TENANTS } from "../../constants";

const getTenantOktaApplicationId = (tenantName) => {
  if (tenantName === TENANTS.AMWELL) {
    const clientIDs = process.env.OKTA_CLIENT_IDS;
    return clientIDs.split(":")[2];
  }
  return oktaClientId;
};

const createTenantDetailsPayload = (tenantName) => ({
  tenant_name: tenantName,
  okta_application_id: getTenantOktaApplicationId(tenantName)
});

const createPersonPayload = (providerDetails) => ({
  first_name: providerReader.firstName(providerDetails),
  last_name: providerReader.lastName(providerDetails),
  gender: convertGenderToProto(""),
  suffix: providerReader.suffix(providerDetails)
});

const createUserPayload = (providerDetails, organizationId) => ({
  roles: convertRolesToProto([{ type: RoleType.USER }]),
  person: createPersonPayload(providerDetails),
  email: providerReader.email(providerDetails),
  specialties: convertSpecialtiesToProto(providerReader.specialties(providerDetails)),
  user_type: providerReader.suffix(providerDetails),
  organization_id: organizationId,
  enhanced_review: convertEnhancedReviewToProto(EnhancedReviewOptions.OFF)
});

const createEmbedUserCreationPayload = (providerDetails, tenantName, organizationId, scope) => ({
  scope: scope,
  tenant_details: createTenantDetailsPayload(tenantName),
  user: createUserPayload(providerDetails, organizationId),
  partner_id: providerReader.id(providerDetails)
});

export { createEmbedUserCreationPayload, createTenantDetailsPayload, createUserPayload };
