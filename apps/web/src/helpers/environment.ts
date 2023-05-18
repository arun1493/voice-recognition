enum Environment {
  Development = "development",
  Local = "local",
  Production = "production",
  Stage = "stage",
  Test = "test"
}

enum FhirEnvironment {
  Development = "dev",
  Production = "prod"
}

const isDevelopmentEnvironment = (): boolean => {
  return process.env.DEPLOYMENT_ENVIRONMENT === Environment.Development;
};

const isProductionEnvironment = (): boolean => {
  return process.env.DEPLOYMENT_ENVIRONMENT === Environment.Production;
};

const isDevelopmentOrLocalEnvironment = (): boolean => {
  if (process.env.DEPLOYMENT_ENVIRONMENT === Environment.Development || process.env.NODE_ENV === Environment.Local) {
    return true;
  }

  return false;
};

const getCurrentEnvironment = (): string => {
  return process.env.DEPLOYMENT_ENVIRONMENT;
};

export {
  Environment,
  FhirEnvironment,
  getCurrentEnvironment,
  isProductionEnvironment,
  isDevelopmentEnvironment,
  isDevelopmentOrLocalEnvironment
};
