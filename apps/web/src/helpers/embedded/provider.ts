import _get from "lodash/get";
import _find from "lodash/find";

import { EMAIL, OFFICIAL } from "../../constants/embedded";

/**
 * Verifies if the communication details are email details.
 * @param {Object} communicationDetails
 * @returns {Boolean} returns True if email details, else false.
 */
const isEmailDetails = (communicationDetails = { system: null }) => communicationDetails.system === EMAIL;

/**
 * Returns provider email details from provider payload.
 * @param {Object} providerDetails Provider details payload from Embed Customers.
 * @returns {Object} returns email details.
 */
const getProviderEmailDetails = (providerDetails) => {
  const telecomDetails = _get(providerDetails, "telecom", []);
  return _find(telecomDetails, isEmailDetails) || {};
};

/**
 * Returns provider email address from provider payload.
 * @param {Object} providerDetails Provider details payload from Embed Customers.
 * @returns {String} returns email.
 */
const getProviderEmail = (providerDetails) => {
  const emailDetails = getProviderEmailDetails(providerDetails);
  return emailDetails?.value;
};

/**
 * Verifies if the provider name details are for official use.
 * @param {Object} nameDetails
 * @returns {Boolean} returns True if for official use, else false.
 */
const isOfficialName = (nameDetails) => nameDetails?.use === OFFICIAL;

/**
 * Returns Official name details from provider payload.
 * @param {Object} providerDetails Provider details payload from Embed Customers.
 * @returns {Object} returns official name details if found, else empty object.
 */
const getOfficialNameDetails = (providerDetails) => {
  const nameDetails = _get(providerDetails, "name", []);
  return _find(nameDetails, isOfficialName) || {};
};

/**
 * Returns provider official first name.
 * @param {Object} providerDetails Provider details payload from Embed Customers.
 * @returns {String} Official first name of the provider.
 */
const getProviderFirstName = (providerDetails) => {
  const officialNameDetails = getOfficialNameDetails(providerDetails);
  return _get(officialNameDetails, "given");
};

/**
 * Returns provider official last name.
 * @param {Object} providerDetails Provider details payload from Embed Customers.
 * @returns {String} Official last name of the provider.
 */
const getProviderLastName = (providerDetails) => {
  const officialNameDetails = getOfficialNameDetails(providerDetails);
  return officialNameDetails.family;
};

/**
 * Returns provider suffix.
 * @param {Object} providerDetails Provider details payload from Embed Customers.
 * @returns {String} Provider suffix.
 */
const getProviderSuffix = (providerDetails) => {
  const officialNameDetails = getOfficialNameDetails(providerDetails);
  return _get(officialNameDetails, "suffix.0");
};

export {
  getOfficialNameDetails,
  getProviderEmailDetails,
  getProviderEmail,
  getProviderFirstName,
  getProviderLastName,
  getProviderSuffix,
  isEmailDetails,
  isOfficialName
};
