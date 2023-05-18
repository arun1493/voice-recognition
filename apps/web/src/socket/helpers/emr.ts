import _isNil from "lodash/isNil";

import { SUKI_E2E_TESTING_ORGANIZATION_ID } from "../../constants";

/**
 * Returns True if EMR details exists, not undefined or null. Otherwise false
 * To simplify we are only validating "id" and "type"
 * @param emrOrganization
 * @returns { Boolean }
 */
const isEmrIntegrated = (emrOrganization, sukiOrganizationId) =>
  sukiOrganizationId === SUKI_E2E_TESTING_ORGANIZATION_ID ||
  (!_isNil(emrOrganization?.id) && !_isNil(emrOrganization?.type));

export { isEmrIntegrated };
