import _get from "lodash/get";
import _map from "lodash/map";
import _reduce from "lodash/reduce";
import _isEmpty from "lodash/isEmpty";
import _includes from "lodash/includes";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "@suki-web/suki-business";

const formatParameterValueFromStringToJSON = (formattedFeatureFlags, remoteConfigParameter: any, parameterKey) => {
  const parameterValueString = _get(remoteConfigParameter, "defaultValue.value", "");
  if (_isEmpty(parameterValueString)) {
    return {
      ...formattedFeatureFlags,
      [parameterKey]: {
        key: parameterKey,
        description: remoteConfigParameter?.description,
        value: EMPTY_OBJECT
      }
    };
  }
  const parameterValueObject = JSON.parse(parameterValueString);

  return {
    ...formattedFeatureFlags,
    [parameterKey]: {
      key: parameterKey,
      description: remoteConfigParameter?.description,
      value: parameterValueObject
    }
  };
};

const formatParametersValueFromStringToJSON = (remoteConfig: any) => {
  const featureFlagParameters = _get(remoteConfig, "parameters", EMPTY_ARRAY);
  const featureFlags = _reduce(featureFlagParameters, formatParameterValueFromStringToJSON, {});
  return featureFlags;
};

const getUserFeatureFlagsStatus = (remoteConfig, userId, organizationId) => {
  const featureFlags = formatParametersValueFromStringToJSON(remoteConfig);
  return _map(featureFlags, ({ value = {}, key }) => {
    const { sukiUserIds, sukiOrganizationIds } = value.access || {};
    if (_includes(sukiUserIds, userId) || _includes(sukiOrganizationIds, organizationId)) {
      return {
        key,
        enabled: true
      };
    }
    return {
      key,
      enabled: false
    };
  });
};

export { formatParametersValueFromStringToJSON, getUserFeatureFlagsStatus };
