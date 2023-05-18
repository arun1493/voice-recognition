import _split from "lodash/split";
import jwtDecode from "jwt-decode";
import _isEmpty from "lodash/isEmpty";
import OktaJWTVerifier from "@okta/jwt-verifier";
import { Process } from "@suki-web/suki-business";

type DecodedIdToken = {
  aud: string;
  nonce: string;
  tenantName: string;
};

const isValidAmwellUserJwt = async (next: any, params: any) => {
  const { aud, idToken, nonce } = params;
  const amwellClientId = process.env.OKTA_AMWELL_CLIENT_ID;

  if (aud === amwellClientId && !_isEmpty(amwellClientId)) {
    const amwellOktaJwtVerifier = new OktaJWTVerifier({
      issuer: process.env.OKTA_ISSUER_URL,
      clientId: amwellClientId
    });

    try {
      await amwellOktaJwtVerifier.verifyIdToken(idToken, amwellClientId, nonce);
      return true;
    } catch (error) {
      console.log("Amwell user ID token validation failed", error);
      return false;
    }
  }

  return next(params);
};

const isValidWebClientJwt = async (next: any, params: any) => {
  const { aud, nonce, idToken } = params;
  const webClientId = process.env.OKTA_WEB_CLIENT_ID;

  if (aud === webClientId && !_isEmpty(webClientId)) {
    const webClientOktaJwtVerifier = new OktaJWTVerifier({
      issuer: process.env.OKTA_ISSUER_URL,
      clientId: webClientId
    });

    try {
      await webClientOktaJwtVerifier.verifyIdToken(idToken, webClientId, nonce);
      return true;
    } catch (error) {
      console.log("Web user ID token validation failed", error);
      return false;
    }
  }

  return next(params);
};

const isValidMobileClientJwt = async (next: any, params: any) => {
  const { aud, nonce, idToken } = params;
  const mobileClientIds = process.env.OKTA_MOBILE_CLIENT_IDS;
  const mobileClientIdList = _split(mobileClientIds, "+");

  try {
    if (aud === mobileClientIdList[0] && !_isEmpty(mobileClientIdList[0])) {
      const mobileClientOktaJwtVerifier = new OktaJWTVerifier({
        issuer: process.env.OKTA_ISSUER_URL,
        clientId: mobileClientIdList[0]
      });
      await mobileClientOktaJwtVerifier.verifyIdToken(idToken, mobileClientIdList[0], nonce);
      return true;
    }

    if (aud === mobileClientIdList[1] && !_isEmpty(mobileClientIdList[1])) {
      const mobileClientOktaJwtVerifier = new OktaJWTVerifier({
        issuer: process.env.OKTA_ISSUER_URL,
        clientId: mobileClientIdList[1]
      });
      await mobileClientOktaJwtVerifier.verifyIdToken(idToken, mobileClientIdList[1], nonce);
      return true;
    }
  } catch (error) {
    console.log("Mobile user ID token validation failed", error);
    return false;
  }

  return next(params);
};

const isValidDesktopClientJwt = async (next: any, params: any) => {
  const { aud, nonce, idToken } = params;
  const desktopClientId = process.env.OKTA_DESKTOP_CLIENT_ID;

  if (aud === desktopClientId && !_isEmpty(desktopClientId)) {
    const desktopClientOktaJwtVerifier = new OktaJWTVerifier({
      issuer: process.env.OKTA_ISSUER_URL,
      clientId: desktopClientId
    });

    try {
      await desktopClientOktaJwtVerifier.verifyIdToken(idToken, desktopClientId, nonce);
      return true;
    } catch (error) {
      console.log("Web user ID token validation failed", error);
      return false;
    }
  }
  return next(params);
};

const isInvalidTargetAudience = (next: any, params: any) => {
  console.log("Aud did not match any mentioned criteria, hence returning false", params);
  return false;
};

const OKTA_JWT_VERIFICATION_PROCESS = new Process()
  .addHandler(isValidAmwellUserJwt)
  .addHandler(isValidWebClientJwt)
  .addHandler(isValidMobileClientJwt)
  .addHandler(isValidDesktopClientJwt)
  .addHandler(isInvalidTargetAudience);

function isValidIdToken(idToken: string): boolean {
  if (_isEmpty(idToken)) {
    return false;
  }

  try {
    const decodedIdToken: DecodedIdToken = jwtDecode(idToken);
    const { aud, nonce, tenantName } = decodedIdToken;

    return OKTA_JWT_VERIFICATION_PROCESS.run({
      aud,
      idToken,
      nonce,
      tenantName
    });
  } catch (error) {
    console.log("ID Token Validation Failed", error);
    return false;
  }
}

export { isValidIdToken };
