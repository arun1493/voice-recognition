import _split from "lodash/split";
import jwtDecode from "jwt-decode";
import sha512 from "crypto-js/sha512";
import _isEmpty from "lodash/isEmpty";
import OktaJWTVerifier from "@okta/jwt-verifier";
import { Process } from "@suki-web/suki-business";

import { cloudLogger } from "../";
import { redis } from "../../redis";
import { REVOKED_TOKENS_IN_REDIS, TENANTS } from "../../constants";

const DEFAULT_AUD_STRING = "api://default";

type DecodedAccessToken = {
  cid: string;
  tenantName: string;
  iat: number;
  exp: number;
};

const isTokenNotExpired = (next: any, params: any) => {
  const { expirationTimeInSeconds } = params;
  const expirationTimeInMilliSeconds = expirationTimeInSeconds * 1000;
  const currentTimeInMilliSeconds = new Date().getTime();
  if (currentTimeInMilliSeconds > expirationTimeInMilliSeconds) {
    return false;
  }
  return next(params);
};

const isTokenNotRevokedFromCache = async (next: any, params: any) => {
  const { accessToken } = params;
  const encryptedAccessToken = sha512(accessToken, process.env.SUKI_SALT).toString();
  try {
    const isAuthTokenRevoked = await redis.getRedisData(`${REVOKED_TOKENS_IN_REDIS}`).then((accessTokensInRedis) => {
      if (accessTokensInRedis) {
        const accessTokensInJson = JSON.parse(accessTokensInRedis);
        return accessTokensInJson[encryptedAccessToken];
      }
    });
    if (!!isAuthTokenRevoked) {
      return false;
    }
  } catch (error) {
    cloudLogger.error("Error in checking if token us revoked from cache", null, { error });
  }
  return next(params);
};

const isValidAmwellSystemLevelJwt = async (next: any, params: any) => {
  const { accessToken, tenantName } = params;
  if (tenantName === TENANTS.AMWELL) {
    cloudLogger.info("Setting amwell client id from environment variables");
    const amwellClientId = process.env.OKTA_AMWELL_CLIENT_ID;
    if (_isEmpty(amwellClientId)) {
      cloudLogger.error("Amwell Client ID is not setup in environment variables");
      return false;
    }
    const amwellSystemLevelOktaJwtVerifier = new OktaJWTVerifier({
      issuer: process.env.OKTA_ISSUER_URL,
      clientId: amwellClientId,
      assertClaims: {
        cid: amwellClientId
      }
    });

    try {
      cloudLogger.info("Verifying Amwell system level token with Okta JWT Verifier");
      await amwellSystemLevelOktaJwtVerifier.verifyAccessToken(accessToken, DEFAULT_AUD_STRING);
      cloudLogger.info("Amwell system level token validation successful", null, {
        clientId: amwellClientId,
        issuerURL: process.env.OKTA_ISSUER_URL,
        tenantName
      });
      return true;
    } catch (error) {
      cloudLogger.error("Amwell system level access token validation failed", null, { error });
      return false;
    }
  }

  return next(params);
};

const isValidAmwellUserJwt = async (next: any, params: any) => {
  const { accessToken, cid } = params;
  const amwellClientId = process.env.OKTA_AMWELL_CLIENT_ID;

  if (cid === amwellClientId && !_isEmpty(amwellClientId)) {
    const amwellOktaJwtVerifier = new OktaJWTVerifier({
      issuer: process.env.OKTA_ISSUER_URL,
      clientId: amwellClientId,
      assertClaims: {
        cid: amwellClientId
      }
    });

    try {
      cloudLogger.info("Verifying Amwell user access token");
      await amwellOktaJwtVerifier.verifyAccessToken(accessToken, DEFAULT_AUD_STRING);
      return true;
    } catch (error) {
      cloudLogger.error("Amwell user access token validation failed", null, { error });
      return false;
    }
  }

  return next(params);
};

const isValidWebClientJwt = async (next: any, params: any) => {
  const { accessToken, cid } = params;
  const webClientId = process.env.OKTA_WEB_CLIENT_ID;

  if (cid === webClientId && !_isEmpty(webClientId)) {
    const webClientOktaJwtVerifier = new OktaJWTVerifier({
      issuer: process.env.OKTA_ISSUER_URL,
      clientId: webClientId,
      assertClaims: {
        cid: webClientId
      }
    });

    try {
      cloudLogger.info("Verifying Web user access token with Okta JWT Verifier");
      await webClientOktaJwtVerifier.verifyAccessToken(accessToken, DEFAULT_AUD_STRING);
      return true;
    } catch (error) {
      cloudLogger.error("Web user access token validation failed", null, { error });
      return false;
    }
  }

  return next(params);
};

const isValidMobileClientJwt = async (next: any, params: any) => {
  const { accessToken, cid } = params;
  const mobileClientIds = process.env.OKTA_MOBILE_CLIENT_IDS;
  const mobileClientIdList = _split(mobileClientIds, "+");

  try {
    cloudLogger.info("Verifying Mobile user access token");
    if (cid === mobileClientIdList[0] && !_isEmpty(mobileClientIdList[0])) {
      const mobileClientOktaJwtVerifier = new OktaJWTVerifier({
        issuer: process.env.OKTA_ISSUER_URL,
        clientId: mobileClientIdList[0],
        assertClaims: {
          cid: mobileClientIdList[0]
        }
      });
      await mobileClientOktaJwtVerifier.verifyAccessToken(accessToken, DEFAULT_AUD_STRING);
      cloudLogger.info("Mobile user access token validaiton successful");
      return true;
    }

    if (cid === mobileClientIdList[1] && !_isEmpty(mobileClientIdList[1])) {
      const mobileClientOktaJwtVerifier = new OktaJWTVerifier({
        issuer: process.env.OKTA_ISSUER_URL,
        clientId: mobileClientIdList[1],
        assertClaims: {
          cid: mobileClientIdList[1]
        }
      });
      await mobileClientOktaJwtVerifier.verifyAccessToken(accessToken, DEFAULT_AUD_STRING);
      cloudLogger.info("Mobile user access token validaiton successful");
      return true;
    }
  } catch (error) {
    cloudLogger.error("Mobile user access token validation falied", null, { error });
    return false;
  }

  return next(params);
};

const isValidDesktopClientJwt = async (next: any, params: any) => {
  const { accessToken, cid } = params;
  const desktopClientId = process.env.OKTA_DESKTOP_CLIENT_ID;

  if (cid === desktopClientId && !_isEmpty(desktopClientId)) {
    const desktopClientOktaJwtVerifier = new OktaJWTVerifier({
      issuer: process.env.OKTA_ISSUER_URL,
      clientId: desktopClientId,
      assertClaims: {
        cid: desktopClientId
      }
    });

    try {
      cloudLogger.info("Validating Desktop user access token");
      await desktopClientOktaJwtVerifier.verifyAccessToken(accessToken, DEFAULT_AUD_STRING);
      cloudLogger.info("Desktop user access token validation successful");
      return true;
    } catch (error) {
      cloudLogger.error("Desktop user access token validation failed", null, { error });
      return false;
    }
  }

  return next(params);
};

const isInvalidTargetAudience = (next: any, params: any) => {
  cloudLogger.info("ClientId(cid) did not match any known client ID's, hence returning false", null, { params });
  return false;
};

const OKTA_JWT_VERIFICATION_PROCESS = new Process()
  .addHandler(isTokenNotExpired)
  .addHandler(isTokenNotRevokedFromCache)
  .addHandler(isValidAmwellSystemLevelJwt)
  .addHandler(isValidAmwellUserJwt)
  .addHandler(isValidWebClientJwt)
  .addHandler(isValidMobileClientJwt)
  .addHandler(isValidDesktopClientJwt)
  .addHandler(isInvalidTargetAudience);

async function isValidAccessToken(accessToken: string): Promise<boolean> {
  if (_isEmpty(accessToken)) {
    return false;
  }

  const decodedAccessToken: DecodedAccessToken = jwtDecode(accessToken);
  const { cid, exp: expirationTimeInSeconds, tenantName } = decodedAccessToken;

  return OKTA_JWT_VERIFICATION_PROCESS.run({
    accessToken,
    cid,
    expirationTimeInSeconds,
    tenantName
  });
}

export { isValidAccessToken };
