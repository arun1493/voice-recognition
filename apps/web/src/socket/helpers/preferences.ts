import _get from "lodash/get";
import _find from "lodash/find";
import { EMPTY_ARRAY } from "@suki-web/suki-business";

import { buildScope, cloudLogger } from "../../helpers";
import UniqueService from "../../services/UniqueService";
import { CLIENTS_LIST, METADATA } from "../../constants";
import { DICTATION_URL_ENDPOINTS, PreferenceIds } from "../constants";

const getPreferences = async (idToken, organizationId, userId) => {
  const context = {
    [METADATA.SUKI_JWT]: idToken,
    [METADATA.SUKI_ORGANIZATION_ID]: organizationId,
    [METADATA.SUKI_S2_CLIENT]: true
  };

  const rpcInput = {
    scope: buildScope(context),
    user_id: userId
  };

  try {
    const preferencesResponse = await UniqueService.getPreferences(rpcInput, context);
    const preferences = _get(preferencesResponse, "preferences", EMPTY_ARRAY);
    return preferences;
  } catch (error) {
    throw error;
  }
};

const isBackendEndPointPreference = (preferences: any) => (preference) =>
  preference?.id === PreferenceIds.SUKI_BACKEND_ENDPOINT;

const getDictationUriPreference = async (idToken, organizationId, userId) => {
  let preferences;
  try {
    preferences = await getPreferences(idToken, organizationId, userId);
    const backendUriPreferences = _find(preferences, isBackendEndPointPreference(preferences));
    const dictationUrlFromPreferences = _get(
      backendUriPreferences,
      "enum_preference.value",
      DICTATION_URL_ENDPOINTS.MS_DICTATION_ENDPOINT
    );
    return dictationUrlFromPreferences;
  } catch (error) {
    throw error;
  }
};

const getClientNameFromDictationUrlPreference = (dictationUrlFromPreference) => {
  cloudLogger.info("Dictation url fetched from admin preferences", null, { dictationUrl: dictationUrlFromPreference });
  cloudLogger.info("Dictation url endpoints", null, { DICTATION_URL_ENDPOINTS });
  const dictationUrl = dictationUrlFromPreference.slice(0, -4);
  switch (dictationUrl) {
    case DICTATION_URL_ENDPOINTS.MS_DICTATION_ENDPOINT:
      return CLIENTS_LIST.VOICE;
    case DICTATION_URL_ENDPOINTS.MS_SUKI_ASR_ENDPOINT:
      return CLIENTS_LIST.SUKI_ASR;
    default:
      return CLIENTS_LIST.VOICE;
  }
};

export { getClientNameFromDictationUrlPreference, getDictationUriPreference, getPreferences };
