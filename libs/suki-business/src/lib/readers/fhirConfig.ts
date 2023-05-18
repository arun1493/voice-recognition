import _property from "lodash/property";

const appId = _property("appId");
const appType = _property("appType");
const authorizeUrl = _property<any, string>("authorizeUrl");
const clientId = _property<any, string>("clientId");
const clientSecret = _property<any, string>("clientSecret");
const emailPatterns = _property("emailPatterns");
const env = _property<any, string>("env");
const metadataUrl = _property("metadataUrl");
const platform = _property("platform");
const redirectUri = _property<any, string>("redirectUri");
const spec = _property("spec");
const tenantId = _property<any, string>("tenantId");
const tenantName = _property<any, string>("tenantName");
const url = _property<any, string>("url");

const fhirConfigReader = {
  appId,
  appType,
  authorizeUrl,
  clientId,
  clientSecret,
  emailPatterns,
  env,
  metadataUrl,
  platform,
  redirectUri,
  spec,
  tenantId,
  tenantName,
  url
};

export { fhirConfigReader };
