import jwtDecode from "jwt-decode";
import _isEmpty from "lodash/isEmpty";
import OktaJWTVerifier from "@okta/jwt-verifier";

import { TENANTS } from "../../constants";

type DecodedIdToken = {
  aud: string;
  nonce: string;
  tenantName: string;
};

const isValidAmwellSystemLevelJwt = async (params: any) => {
  const { token, nonce, tenantName } = params;
  if (tenantName === TENANTS.AMWELL) {
    const amwellClientId = process.env.OKTA_AMWELL_CLIENT_ID;
    if (_isEmpty(amwellClientId)) {
      console.error("Amwell Client ID is not setup in environment variables");
      return false;
    }
    const amwellSystemLevelOktaJwtVerifier = new OktaJWTVerifier({
      issuer: process.env.OKTA_ISSUER_URL,
      clientId: amwellClientId
    });

    try {
      await amwellSystemLevelOktaJwtVerifier.verifyIdToken(token, "api://default", nonce);
      return true;
    } catch (error) {
      console.log("Amwell system level ID token validation failed", error);
      return false;
    }
  }
};

function isValidAmwellSystemToken(token: string) {
  if (_isEmpty(token)) {
    return false;
  }

  try {
    const decodedIdToken: DecodedIdToken = jwtDecode(token);
    const { nonce, tenantName } = decodedIdToken;
    return isValidAmwellSystemLevelJwt({
      token,
      nonce,
      tenantName
    });
  } catch (error) {
    console.log("SystemToken Validation Failed", error);
    return false;
  }
}

export { isValidAmwellSystemToken };
