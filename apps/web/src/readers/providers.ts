import _property from "lodash/property";

import { getProviderEmail, getProviderFirstName, getProviderLastName, getProviderSuffix } from "../helpers";

const id = _property("id");
const metadata = _property("meta");
const resourceType = _property("resourceType");
const telecom = _property("telecom");
const specialties = _property("specialties");
const firstName = (details) => getProviderFirstName(details);
const lastName = (details) => getProviderLastName(details);
const suffix = (details) => getProviderSuffix(details);
const email = (details) => getProviderEmail(details);

export default {
  id,
  metadata,
  firstName,
  lastName,
  suffix,
  resourceType,
  telecom,
  email,
  specialties
};
