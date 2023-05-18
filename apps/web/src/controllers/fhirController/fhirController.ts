import _get from "lodash/get";
import _set from "lodash/set";
import _isNil from "lodash/isNil";
import jwtDecode from "jwt-decode";
import _isEmpty from "lodash/isEmpty";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import {
  buildScope,
  cloudLogger,
  convertEMROrganizationFromProto,
  filterUserFhirConfig,
  isReqParamsValid,
  isValidIdToken,
  isValidPlatform
} from "../../helpers";
import { redis } from "../../redis";
import EmrAccountsService from "../../services/EmrAccountsService";
import GoogleCloudStorageService from "../../services/GoogleCloudStorageService";
import { ERROR_STATEMENTS, FHIR_BUCKET_NAMES, METADATA, USER_FHIR_TOKEN } from "../../constants";

type AuthJwt = {
  email?: string;
  organizationID?: string;
  userID?: string;
};

const FILE_NAME = "versions/fhirConfig.json";

const BUCKET_NAME = FHIR_BUCKET_NAMES[process.env.DEPLOYMENT_ENVIRONMENT];

class FhirController {
  googleCloudStorage: GoogleCloudStorageService;

  constructor() {
    this.googleCloudStorage = new GoogleCloudStorageService(BUCKET_NAME);
  }

  getFhirConfig = async (req: Request, res: Response) => {
    const { platform } = req.params;
    const authToken = _get(req, "headers.authorization");

    if (!isValidPlatform(platform)) {
      cloudLogger.error("[fhirConfig]: Invalid platform passed in url", req, { platform });
      res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        details: `Invalid platform ${platform}`,
        message: ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]
      });
      return;
    }

    if (!isValidIdToken(authToken)) {
      cloudLogger.error("[FHIR Config]: Authentication failed", req);
      res.status(StatusCodes.UNAUTHORIZED).json({
        code: StatusCodes.UNAUTHORIZED,
        message: ERROR_STATEMENTS[StatusCodes.UNAUTHORIZED]
      });
      return;
    }

    const jwt = req.header("authorization");
    const decoded = jwt && (jwtDecode(jwt) as any);
    const organizationID = decoded && decoded.organizationID;
    const userID = decoded && decoded.userID;

    const context = {
      [METADATA.SUKI_JWT]: jwt,
      [METADATA.SUKI_ORGANIZATION_ID]: organizationID,
      [METADATA.SUKI_ROLE]: _get(req, "suki-role"),
      [METADATA.SUKI_SESSION_ID]: _get(req, "Suki-Session-ID"),
      [METADATA.SUKI_TRACE_ID]: _get(req, "Suki-Trace-ID"),
      [METADATA.SUKI_S2_CLIENT]: _get(req, "suki-s2-client") || false,
      [METADATA.SUKI_IS_EMR]: _get(req, "suki-is-emr"),
      [METADATA.SUKI_USER_AGENT]: _get(req, "suki-user-agent") || _get(req, "headers.user-agent"),
      [METADATA.SUKI_USER_ID]: userID,
      [METADATA.SUKI_PRIMARY_EMR]: _get(req, "suki-primary-emr"),
      [METADATA.SUKI_SECONDARY_EMR]: _get(req, "suki-secondary-emr")
    };

    const { email } = jwtDecode(jwt) as AuthJwt;
    let emrOrganization;

    try {
      cloudLogger.info("[fhirConfig]: Fetching EMR Organization details for user", req, { email });
      const rpcInput = { scope: buildScope(context) };
      const emrResponse = await EmrAccountsService.getOrganization(rpcInput, context);
      cloudLogger.info("Received the EMR Organization", req, { context });
      emrOrganization = convertEMROrganizationFromProto(emrResponse.organization);
    } catch (error) {
      cloudLogger.error("[fhirConfig]: Failed to fetch emr organization details", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: `Failed to fetch EMR organization details for user ${email}`,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
      return;
    }

    if (_isEmpty(emrOrganization)) {
      cloudLogger.error(`[fhirConfig]:EMR organization not found for user ${email}`, req);
      res.status(StatusCodes.NOT_FOUND).json({
        code: StatusCodes.NOT_FOUND,
        details: `EMR organization not found for user ${email}`,
        message: ERROR_STATEMENTS[StatusCodes.NOT_FOUND]
      });
      return;
    }

    const { secondaryType } = emrOrganization;
    if (_isEmpty(secondaryType)) {
      cloudLogger.error(`No Secondary EMR type found for user ${email}`, req);
      res.status(StatusCodes.NOT_FOUND).json({
        code: StatusCodes.NOT_FOUND,
        details: `No Secondary EMR type found for user ${email}`,
        message: ERROR_STATEMENTS[StatusCodes.NOT_FOUND]
      });
      return;
    }

    let fhirConfigList;
    try {
      cloudLogger.info("[fhirConfig]: Fetching FHIR Config");

      const fhirConfigResponse = await this.googleCloudStorage.fetchFile(FILE_NAME);
      fhirConfigList = fhirConfigResponse[secondaryType] || [];
      cloudLogger.info("Received the FHIR Config list", req, { context, fhirConfigList });
    } catch (error) {
      cloudLogger.error("Error in getting fhirConfig. Failed to fetch FHIR config from google storage", req, { error });
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: "Failed to fetch FHIR config",
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
      return;
    }

    if (_isEmpty(fhirConfigList)) {
      cloudLogger.error(`No FHIR config exists for ${secondaryType}`, req);
      res.status(StatusCodes.NOT_FOUND).json({
        code: StatusCodes.NOT_FOUND,
        details: `No FHIR config exists for ${secondaryType}`,
        message: ERROR_STATEMENTS[StatusCodes.NOT_FOUND]
      });
      return;
    }
    cloudLogger.info(`[fhirConfig]: Filtering FHIR configs for user ${email}`);
    const userFhirConfig = filterUserFhirConfig(fhirConfigList, email, platform);
    if (_isEmpty(userFhirConfig)) {
      cloudLogger.error(`No FHIR config found for user ${email} for ${secondaryType}`, req);
      res.status(StatusCodes.NOT_FOUND).json({
        code: StatusCodes.NOT_FOUND,
        details: `No FHIR config found for user ${email} for ${secondaryType}`,
        message: ERROR_STATEMENTS[StatusCodes.NOT_FOUND]
      });
      return;
    }
    cloudLogger.info(`Received the FHIR config`, req, { context, emr: secondaryType, config: userFhirConfig });
    res.status(StatusCodes.OK).json({
      emr: secondaryType,
      config: userFhirConfig
    });
  };

  /* Get Saved EHR Tokens from redis */
  getEmrTokens = async (req: Request, res: Response) => {
    const emr = _get(req, "params.emr");
    const authToken = _get(req, "headers.authorization");

    if (!isReqParamsValid(req, res)) return;

    if (!isValidIdToken(authToken)) {
      cloudLogger.error("JWT Authentication failed while getting EMR Tokens", req);
      res.status(StatusCodes.UNAUTHORIZED).json({
        code: StatusCodes.UNAUTHORIZED,
        message: ERROR_STATEMENTS[StatusCodes.UNAUTHORIZED]
      });
      return;
    }

    const { userID } = jwtDecode(authToken) as AuthJwt;
    const fhirTokens = JSON.parse(await redis.getRedisData(USER_FHIR_TOKEN));
    let userFhirTokens = _get(fhirTokens, `${userID}.${emr}`, {});

    if (_isEmpty(userFhirTokens)) {
      userFhirTokens = {
        fhirAccessToken: "",
        fhirIdToken: "",
        fhirRefreshToken: ""
      };
    }
    cloudLogger.info("Received the EMR Tokens", req);
    res.status(StatusCodes.OK).json({ fhirTokens: userFhirTokens });
  };

  updateEmrTokens = async (req: Request, res: Response) => {
    cloudLogger.info("Setting EMR Tokens on redis");
    const emr = _get(req, "params.emr");
    const authToken = _get(req, "headers.authorization");

    if (!isReqParamsValid(req, res)) return;

    if (!isValidIdToken(authToken)) {
      cloudLogger.error("[FHIR Config]: Authentication failed while updating EMR Tokens", req);
      res.status(StatusCodes.UNAUTHORIZED).json({
        code: StatusCodes.UNAUTHORIZED,
        message: ERROR_STATEMENTS[StatusCodes.UNAUTHORIZED]
      });
      return;
    }

    cloudLogger.info("Updating the EMR Tokens");
    const decoded = authToken && (jwtDecode(authToken) as any);
    const userID = decoded && decoded.userID;
    const { fhirAccessToken, fhirIdToken, fhirRefreshToken } = req.body || {};
    const fhirTokens = JSON.parse(await redis.getRedisData(USER_FHIR_TOKEN)) || {};

    if (!_isNil(fhirAccessToken)) {
      _set(fhirTokens, `${userID}.${emr}.fhirAccessToken`, fhirAccessToken);
    }
    if (!_isNil(fhirIdToken)) {
      _set(fhirTokens, `${userID}.${emr}.fhirIdToken`, fhirIdToken);
    }
    if (!_isNil(fhirRefreshToken)) {
      _set(fhirTokens, `${userID}.${emr}.fhirRefreshToken`, fhirRefreshToken);
    }

    cloudLogger.info("Updated the EMR Tokens successfully", req);
    redis.setRedisData(USER_FHIR_TOKEN, JSON.stringify(fhirTokens));
    res.sendStatus(200);
  };
}

export default new FhirController();
