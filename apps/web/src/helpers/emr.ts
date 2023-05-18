import _get from "lodash/get";
import _find from "lodash/find";
import _some from "lodash/some";
import _values from "lodash/values";
import _isEmpty from "lodash/isEmpty";
import _includes from "lodash/includes";
import { StatusCodes } from "http-status-codes";
import { fhirConfigReader } from "@suki-web/suki-business";

import {
  FhirEnvironment,
  getCurrentEnvironment,
  isDevelopmentEnvironment,
  isProductionEnvironment
} from "./environment";
import { handleErrorResponse } from ".";
import { EMR_SECONDARY_TYPE, PLATFORMS } from "../constants";

const convertEMROrganizationFromProto = (o) => ({
  sukiOrganizationId: _get(o, "suki_organization_id"),
  id: _get(o, "emr_organization_id"),
  type: _get(o, "emr_type"),
  secondaryType: _get(o, "emr_secondary_type"),
  capabilities: convertEMRCapabilitiesFromProto(_get(o, "capabilities")),
  configurations: convertEMRConfigurationsFromProto(_get(o, "configurations"))
});

const convertEMRConfigurationsFromProto = (configurations) => ({
  isRedRoverOrg: _get(configurations, "is_red_rover_org", false),
  isSubmitNotesAsPreliminary: _get(configurations, "submit_notes_as_preliminary", false)
});

const convertEMRCapabilitiesFromProto = (capabilities) => ({
  multipleNotesAllowed: _get(capabilities, "multiple_notes_allowed"),
  destinations: _get(capabilities, "destinations", []),
  predefinedSections: _get(capabilities, "predefined_sections"),
  sections: _get(capabilities, "sections", []).map(convertEMRSectionFromProto)
});

type Section = { id?: string; name?: string };

const convertEMRSectionFromProto = (section: Section = {}) => ({
  id: section.id,
  name: section.name
});

const isFhirConfigEmailPatternsMatchingUserEmail = (userEmail, platform) => (fhirConfig) => {
  const emailPatterns = fhirConfigReader.emailPatterns(fhirConfig);
  const fhirEnvironment = fhirConfigReader.env(fhirConfig);
  return (
    isMatchingEnvironment(fhirEnvironment) &&
    fhirConfigReader.platform(fhirConfig) === platform &&
    isMatchingEmailPatterns(emailPatterns, userEmail)
  );
};

const isMatchingEnvironment = (fhirEnvironment: string) => {
  if (isProductionEnvironment()) {
    return fhirEnvironment === FhirEnvironment.Production;
  } else if (isDevelopmentEnvironment()) {
    return fhirEnvironment === FhirEnvironment.Development;
  }

  return getCurrentEnvironment() === fhirEnvironment;
};

const isMatchingEmailPatterns = (emailPatterns, email) =>
  _some(emailPatterns, (emailPattern) => _includes(email, emailPattern));

const isValidPlatform = (platform) => _includes(_values(PLATFORMS), platform);

const isValidSecondaryEmrType = (type) => _includes(_values(EMR_SECONDARY_TYPE), type);

const filterUserFhirConfig = (fhirConfigList, userEmail, platform) =>
  _find(fhirConfigList, isFhirConfigEmailPatternsMatchingUserEmail(userEmail, platform));

const isReqParamsValid = (req, res) => {
  const emr = _get(req, "params.emr");
  const authToken = _get(req, "headers.authorization");

  if (!isValidSecondaryEmrType(emr)) {
    handleErrorResponse(res)(StatusCodes.BAD_REQUEST, `[SET FHIR TOKEN]: Invalid EMR passed in url - ${emr}`);
    return false;
  }
  if (_isEmpty(authToken)) {
    handleErrorResponse(res)(StatusCodes.BAD_REQUEST, "SET FHIR TOKEN]: Invalid/Empty jwt token passed in headers");
    return false;
  }

  return true;
};

export {
  convertEMROrganizationFromProto,
  convertEMRSectionFromProto,
  filterUserFhirConfig,
  isFhirConfigEmailPatternsMatchingUserEmail,
  isReqParamsValid,
  isValidPlatform,
  isValidSecondaryEmrType
};
