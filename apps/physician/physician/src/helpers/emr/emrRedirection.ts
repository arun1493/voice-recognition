import FHIR from "fhirclient";
import _isEmpty from "lodash/isEmpty";
import { fhirConfigReader } from "@suki-web/suki-business";

import { getOrigin } from "..";
import { logger } from "../../api";
import { SecondaryEmr } from "../../constants";
import { EmrConfigProps, EmrProps } from "../../redux/emr";

const generateEpicRedirectUrl = (epicFhirConfig: EmrConfigProps) => {
  try {
    const authorizeUrl = fhirConfigReader.authorizeUrl(epicFhirConfig);
    const clientId = fhirConfigReader.clientId(epicFhirConfig);
    const encodedClientId = encodeURIComponent(clientId);
    const redirectUrl = getOrigin();
    const encodedRedirectUrl = encodeURIComponent(redirectUrl);

    const epicUrl = `${authorizeUrl}&redirect_uri=${encodedRedirectUrl}&client_id=${encodedClientId}&state=abc123`;
    return epicUrl;
  } catch (error) {
    logger.error({ message: "EPIC EMR Redirection Error: Failed to generate url", payload: error });
    return "";
  }
};

const handleEpicRedirection = (epicFhirConfig: EmrConfigProps) => {
  const epicRedirectUrl = generateEpicRedirectUrl(epicFhirConfig);
  if (!_isEmpty(epicRedirectUrl)) window.location.href = epicRedirectUrl;
};

const isValidCernerConfiguration = (cernerFhirConfig: EmrConfigProps) => {
  const url = fhirConfigReader.url(cernerFhirConfig);
  const spec = fhirConfigReader.spec(cernerFhirConfig);
  const tenantId = fhirConfigReader.tenantId(cernerFhirConfig);
  const clientId = fhirConfigReader.clientId(cernerFhirConfig);
  const redirectUrl = getOrigin();

  return !(_isEmpty(url) || _isEmpty(spec) || _isEmpty(tenantId) || _isEmpty(clientId) || _isEmpty(redirectUrl));
};

const handleCernerRedirection = (cernerFhirConfig: EmrConfigProps) => {
  try {
    if (isValidCernerConfiguration(cernerFhirConfig)) {
      const url = fhirConfigReader.url(cernerFhirConfig);
      const spec = fhirConfigReader.spec(cernerFhirConfig);
      const tenantId = fhirConfigReader.tenantId(cernerFhirConfig);
      const clientId = fhirConfigReader.clientId(cernerFhirConfig);
      const redirectUrl = getOrigin();
      const issuer = `${url}/${spec}/${tenantId}`;

      FHIR.oauth2.authorize({
        client_id: clientId,
        scope: "openid profile online_access",
        iss: issuer,
        redirectUri: redirectUrl
      });
    } else {
      alert("Cannot find the Cerner tenant to redirect to. Please contact support@suki.ai for assistance.");
    }
  } catch (error) {
    logger.error({ message: "CERNER EMR Redirection Error: Failed to generate url", payload: error });
  }
};

const EMR_VS_REDIRECT_HANDLERS: any = {
  [SecondaryEmr.EPIC_EMR]: handleEpicRedirection,
  [SecondaryEmr.CERNER_EMR]: handleCernerRedirection
};

const handleEmrRedirection = (emrIntegrationDetails: EmrProps) => {
  if (emrIntegrationDetails) {
    const { emr, config } = emrIntegrationDetails;
    if (emr && config) {
      const redirectHandler = EMR_VS_REDIRECT_HANDLERS[emr];
      redirectHandler && redirectHandler(config);
    }
  }
};

export { handleEmrRedirection };
