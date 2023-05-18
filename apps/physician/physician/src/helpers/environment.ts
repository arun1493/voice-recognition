import { LOCAL_API_BASE_URL } from "../constants";

enum Environment {
  Development = "development",
  Local = "local",
  Production = "production",
  Stage = "stage",
  Test = "test"
}

const getOrigin = (): string => window.location.origin;

const getAPIBaseUrl = (): string => {
  if (process.env.NODE_ENV !== "local") {
    return process.env.NX_SUKI_API_BASE_URL as string;
  }

  return LOCAL_API_BASE_URL;
};

const isDevelopmentEnvironment = (): boolean => {
  return process.env.NX_DEPLOYMENT_ENVIRONMENT === Environment.Development;
};

const isTestEnvironment = (): boolean => {
  return process.env.NX_DEPLOYMENT_ENVIRONMENT === Environment.Test;
};

const isStageEnvironment = (): boolean => {
  return process.env.NX_DEPLOYMENT_ENVIRONMENT === Environment.Stage;
};

const isProductionEnvironment = (): boolean => {
  return process.env.NX_DEPLOYMENT_ENVIRONMENT === Environment.Production;
};

const isDevelopmentOrLocalEnvironment = (): boolean => {
  if (process.env.NX_DEPLOYMENT_ENVIRONMENT === Environment.Development || process.env.NODE_ENV === Environment.Local) {
    return true;
  }

  return false;
};

export {
  Environment,
  getAPIBaseUrl,
  getOrigin,
  isProductionEnvironment,
  isDevelopmentEnvironment,
  isDevelopmentOrLocalEnvironment,
  isStageEnvironment,
  isTestEnvironment
};
