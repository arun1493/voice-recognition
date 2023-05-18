import jwtDecode from "jwt-decode";
import _isEmpty from "lodash/isEmpty";
import { Process } from "@suki-web/suki-business";

import { logger } from "../../api";
import { DecodedIdToken } from "../../types";
import { getOktaIdTokenObject } from "../okta";
import { oktaAuth, oktaConfig } from "../../config";

const isValidWebUserJwt = async (next: any, params: any) => {
  const { aud, idTokenObject } = params;

  const webClientId = process.env.NX_OKTA_WEB_CLIENT_ID;

  if (aud === webClientId) {
    const validationOptions = {
      issuer: oktaConfig.issuer,
      clientId: webClientId
    };

    try {
      await oktaAuth.token.verify(idTokenObject, validationOptions);
      return true;
    } catch (error) {
      logger.error({ message: "Web user ID token validation failed", payload: error });
      return false;
    }
  }

  return next(params);
};

const isValidAmwellUserJwt = async (next: any, params: any) => {
  const { idTokenObject, aud } = params;
  const amwellClientId = process.env.NX_OKTA_AMWELL_CLIENT_ID;

  if (aud === amwellClientId) {
    const validationOptions = {
      issuer: oktaConfig.issuer,
      clientId: amwellClientId
    };

    try {
      await oktaAuth.token.verify(idTokenObject, validationOptions);
      return true;
    } catch (error) {
      logger.error({ message: "Amwell user ID token validation failed", payload: error });
      return false;
    }
  }

  return next(params);
};

const OKTA_JWT_VERIFICATION_PROCESS = new Process().addHandler(isValidWebUserJwt).addHandler(isValidAmwellUserJwt);

function isValidIdToken(idToken: string): boolean {
  if (_isEmpty(idToken)) {
    return false;
  }

  const decodedIdToken: DecodedIdToken = jwtDecode(idToken);
  const { aud } = decodedIdToken;

  const idTokenObject = getOktaIdTokenObject();
  return OKTA_JWT_VERIFICATION_PROCESS.run({
    idTokenObject,
    aud
  });
}

export { isValidIdToken };
