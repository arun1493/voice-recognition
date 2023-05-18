import {
  isDevelopmentEnvironment,
  isProductionEnvironment,
  isStageEnvironment,
  isTestEnvironment
} from "./environment";

const LEGACY_DEV_URL = "https://app.suki-dev.com";
const LEGACY_TEST_URL = "https://app.suki-test.com";
const LEGACY_STAGE_URL = "https://app.suki-stage.com";
const LEGACY_PROD_URL = "https://app.suki.ai";

const getLegacyBaseUrl = () => {
  if (isDevelopmentEnvironment()) {
    return LEGACY_DEV_URL;
  } else if (isTestEnvironment()) {
    return LEGACY_TEST_URL;
  } else if (isStageEnvironment()) {
    return LEGACY_STAGE_URL;
  } else if (isProductionEnvironment()) {
    return LEGACY_PROD_URL;
  } else {
    return LEGACY_DEV_URL;
  }
};

export { getLegacyBaseUrl };
