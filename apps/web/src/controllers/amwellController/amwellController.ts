import _get from "lodash/get";
import _find from "lodash/find";
import _head from "lodash/head";
import _isNil from "lodash/isNil";
import _isEmpty from "lodash/isEmpty";
import decodedSystemToken from "jwt-decode";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { validationResult } from "express-validator";
import { EMPTY_OBJECT, NoteSources } from "@suki-web/suki-business";

import {
  buildScope,
  cloudLogger,
  convertCompositionFromProtoForAppointmentStatus,
  convertPersonToProto,
  convertUserFromProto,
  createEmbedUserCreationPayload,
  getContext,
  getDateFromString,
  getIdTokenFromSessionToken,
  getOktaAuthInstance,
  isCompositionForEncounterId,
  isValidAmwellSystemToken,
  isValidIdToken,
  omitProtoBufErrorFields,
  validateEncounterDetails
} from "../../helpers";
import {
  DEFAULT_ORGANIZATION_ID,
  DEFAULT_USER_ID,
  EMBED_URL,
  ENCODING,
  ERROR_STATEMENTS,
  GrpcErrorCodes
} from "../../constants";
import SMSService from "../../services/SMSService";
import PDFService from "../../services/PDFService";
import UserService from "../../services/UserService";
import MacrosService from "../../services/MacrosService";
import PatientsService from "../../services/PatientsService";
import { embedUserReader, providerReader } from "../../readers";
import AppointmentsService from "../../services/AppointmentsService";
import { AMWELL_DEFAULT_USER_PARTNER_ID } from "../../constants/embedded";
import { EmbeddedUser__Output } from "../../grpc/generated/learningmotors/pb/user/EmbeddedUser";

type JwtType = {
  tenantName: string;
  organizationID: string;
};

class AmwellController {
  authorizeProviders = async (req: Request, res: Response) => {
    const jwt = _get(req, "headers.auth");

    if (_isEmpty(jwt)) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        message: `${ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]}: Invalid/Empty system level jwt token passed in headers`
      });
    }

    try {
      cloudLogger.info("Authorizing providers");
      const isValidToken = await isValidAmwellSystemToken(jwt);
      if (!isValidToken) {
        cloudLogger.error(
          `${
            ERROR_STATEMENTS[StatusCodes.UNAUTHORIZED]
          }: System level token validation failed | Invalid token | Unauthorized`,
          req
        );
        return res.status(StatusCodes.UNAUTHORIZED).json({
          code: StatusCodes.UNAUTHORIZED,
          message: `${ERROR_STATEMENTS[StatusCodes.UNAUTHORIZED]}: System level token validation failed`
        });
      }
    } catch (error) {
      cloudLogger.error(
        "Error in authorizing providers | Internal server error | System level token validation failed",
        req,
        { error }
      );
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: `${ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]}: System level token validation failed`
      });
    }

    let embeddedUser;
    const decodedJwt = decodedSystemToken(jwt);
    const tenantName = _get(decodedJwt, "tenantName");
    const cid = _get(decodedJwt, "cid");
    const organizationId = _get(decodedJwt, "organizationID", DEFAULT_ORGANIZATION_ID);
    const partnerId = _get(req, "body.id");

    if (_isEmpty(partnerId)) {
      cloudLogger.error(`${ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]}: partnerId cannot be empty or null`, req);
      return res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        message: `${ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]}: partnerId cannot be empty or null`
      });
    }

    try {
      cloudLogger.info("Getting context");
      const ctx = getContext({ organizationId }, false, true);
      const rpcInput = {
        partner_id: partnerId,
        tenant_name: tenantName
      };
      const response = await UserService.getEmbeddedUser(rpcInput, ctx);
      cloudLogger.info("Getting embedded user", req, { rpcInput: rpcInput });
      embeddedUser = _get(response, "embedded_user", EMPTY_OBJECT);
    } catch (error) {
      if (error.code === GrpcErrorCodes.NOT_FOUND) {
        cloudLogger.error("Error in authorizing providers | User not found", req, { error });
        return res.status(StatusCodes.NOT_FOUND).json({
          code: StatusCodes.NOT_FOUND,
          message: `${ERROR_STATEMENTS[StatusCodes.NOT_FOUND]}: User Not Found`
        });
      }

      cloudLogger.error("Error in authorizing providers | Internal server error", req, { error });
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }

    cloudLogger.info("Getting username and password");
    const username = embedUserReader.oktaUsername(embeddedUser) as string;
    const base64EncodedPassword = embedUserReader.oktaCreds(embeddedUser);
    const password = Buffer.from(base64EncodedPassword as any, ENCODING.BASE64).toString(ENCODING.BINARY);
    let signIn;

    try {
      cloudLogger.info("Getting okta auth instance");
      const oktaInstance = getOktaAuthInstance(cid);
      signIn = await oktaInstance.signIn({ username, password });
    } catch (error) {
      cloudLogger.error("Error in authorizing providers | Internal server error | User authentication failed", req, {
        error
      });
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: `${ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]}: User authentication failed`
      });
    }

    let jwtToken;
    try {
      jwtToken = await getIdTokenFromSessionToken(signIn?.sessionToken, cid);
      cloudLogger.info("Received JWT token", req, { jwtToken });
    } catch (error) {
      cloudLogger.error("Error in authorizing providers | Unauthorized | User authentication failed", req, { error });
      return res.status(StatusCodes.UNAUTHORIZED).json({
        code: StatusCodes.UNAUTHORIZED,
        details: error,
        message: `${ERROR_STATEMENTS[StatusCodes.UNAUTHORIZED]}: User authentication failed`
      });
    }

    cloudLogger.info("Completed authorizing providers", req);
    return res.status(StatusCodes.OK).json({
      token: `${signIn.sessionToken}.${jwtToken}`,
      token_type: "JWT",
      expires_in: 3600
    });
  };

  getUserByEmailAddress = async (email: string, organizationId: string) => {
    const userCtx = getContext({ organizationId }, false, true);
    const scope = buildScope(userCtx);
    const userRpcInput = {
      scope,
      email
    };

    try {
      cloudLogger.info("Getting user by email address");
      const userDetailsResponse = await UserService.getUserByEmailAddress(userRpcInput, userCtx);
      const users = _get(userDetailsResponse, "users", []);
      const user = _head(users);
      cloudLogger.info("Completed getting user by email address", null, { user });
      return _isEmpty(user) ? {} : convertUserFromProto(user);
    } catch (error) {
      cloudLogger.error("Error in getting user by email address");
      return error;
    }
  };

  provisionProviders = async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const errorCode = errors.mapped()?.authorization?.msg?.errorCode;
      cloudLogger.error("Validation error(s) in the request", req, { errors });
      return res.status(StatusCodes.BAD_REQUEST).json({
        code: errorCode ? errorCode : StatusCodes.BAD_REQUEST,
        errors: errors.array(),
        message: "Validation error(s) in the request"
      });
    }

    const systemToken = _get(req, "headers.authorization");

    let embedUser;
    let amwellDefaultUser;
    const providerDetails = req.body;
    const providerEmail = providerReader.email(providerDetails);
    const partnerId = providerReader.id(providerDetails) as string;

    const token = decodedSystemToken(systemToken) as JwtType;
    const { organizationID: organizationId, tenantName } = token;

    const embeddedUserCtx = getContext({ organizationId }, false, true);

    if (partnerId !== AMWELL_DEFAULT_USER_PARTNER_ID) {
      try {
        cloudLogger.info("Getting provision providers");
        cloudLogger.info("Getting RPC input");
        const rpcInput = {
          partner_id: AMWELL_DEFAULT_USER_PARTNER_ID,
          tenant_name: tenantName
        };
        cloudLogger.info("Getting embedded user");
        const response = await UserService.getEmbeddedUser(rpcInput, embeddedUserCtx);
        cloudLogger.info("Getting amwell default user");
        amwellDefaultUser = _get(response, "embedded_user", EMPTY_OBJECT);
      } catch (error) {
        if (error.code === GrpcErrorCodes.NOT_FOUND) {
          cloudLogger.error("Error in provision providers | Not found | Amwell default user not found", req, { error });
          return res.status(StatusCodes.NOT_FOUND).json({
            code: StatusCodes.NOT_FOUND,
            message: "Amwell default user not found"
          });
        }
        cloudLogger.error("Error in provision providers | Internal server error", req, { error });
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          code: StatusCodes.INTERNAL_SERVER_ERROR,
          message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
        });
      }
    }

    try {
      cloudLogger.info("Getting RPC input");
      const rpcInput = {
        partner_id: partnerId,
        tenant_name: tenantName
      };
      const response = await UserService.getEmbeddedUser(rpcInput, embeddedUserCtx);
      cloudLogger.info("Getting embedded_user");
      embedUser = _get(response, "embedded_user", EMPTY_OBJECT);
      const embedUserPartnerId = embedUserReader.partnerId(embedUser);
      const embedUserEmail = embedUserReader.oktaUsername(embedUser);
      if (!_isEmpty(embedUser) && embedUserPartnerId === partnerId) {
        const message = `User with same ${embedUserEmail === providerEmail ? "ID and email" : "ID"} already exists.`;
        cloudLogger.error(message, req);
        return res.status(StatusCodes.CONFLICT).json({
          code: StatusCodes.CONFLICT,
          message: `${ERROR_STATEMENTS[StatusCodes.CONFLICT]}: ${message}`
        });
      }
    } catch (error) {
      if (error.code === GrpcErrorCodes.NOT_FOUND) {
        cloudLogger.error("Error in provision providers | Not found | Failed to fetch user details", req, { error });
        embedUser = EMPTY_OBJECT as EmbeddedUser__Output;
      } else {
        cloudLogger.error("Error in provision providers | Internal server error | Failed to fetch user details", req, {
          error
        });
        return res.status(error.code).json({
          ...error,
          message: `${ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]}: Failed to fetch User details`
        });
      }
    }

    try {
      cloudLogger.info("Getting user details");
      const userDetails = await this.getUserByEmailAddress(providerEmail, organizationId);
      const userEmail = _get(userDetails, "email");
      if (userEmail === providerEmail) {
        cloudLogger.error(
          `${ERROR_STATEMENTS[StatusCodes.CONFLICT]}: The provider email is already registered as a Suki user`,
          req
        );
        return res.status(StatusCodes.CONFLICT).json({
          code: StatusCodes.CONFLICT,
          message: `${ERROR_STATEMENTS[StatusCodes.CONFLICT]}: The provider email is already registered as a Suki user`
        });
      }
    } catch (error) {
      cloudLogger.error("Error in provision providers | Internal server error | Failed to fetch user details", req, {
        error
      });
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "Failed to fetch User details"
      });
    }

    try {
      cloudLogger.info("Getting specialities");
      let specialties = providerReader.specialties(providerDetails) as string[];
      if (_isEmpty(specialties)) {
        specialties = ["NA"];
      }

      cloudLogger.info("Getting provider user details");
      const providerUserDetails = { ...providerDetails, specialties };
      cloudLogger.info("Getting embedded context");
      const embeddedCtx = getContext({ organizationId, userId: DEFAULT_USER_ID }, true, true);
      cloudLogger.info("Getting scope");
      const scope = buildScope(embeddedCtx);
      cloudLogger.info("Creating embed user cretion payload");
      const embedUserCreationPayload = createEmbedUserCreationPayload(
        providerUserDetails,
        tenantName,
        organizationId,
        scope
      );

      cloudLogger.info("Getting response from create embedded user");
      const response = await UserService.createEmbeddedUser(embedUserCreationPayload, embeddedCtx);
      embedUser = _get(response, "embedded_user", EMPTY_OBJECT);
    } catch (error) {
      cloudLogger.error("Error in provision providers | Internal server error | Failed to create embed user", req, {
        error
      });
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "Failed to create embed user"
      });
    }

    let scriptsProvisionResponse;
    if (partnerId !== AMWELL_DEFAULT_USER_PARTNER_ID) {
      try {
        cloudLogger.info("partnerId is not amwell default user partenr id");
        cloudLogger.info("Getting user and organization details");
        const userEmail = embedUserReader.oktaUsername(embedUser);
        const userId = embedUserReader.sukiUserId(embedUser);
        const organizationId = embedUserReader.sukiOrganizationId(embedUser);

        const userToBeCopiedFromSukiUserId = embedUserReader.sukiUserId(amwellDefaultUser);

        const userDetails = await this.getUserByEmailAddress(userEmail as string, organizationId as string);
        const specialties = providerReader.specialties(userDetails);

        cloudLogger.info("Getting RPC input");
        const rpcInput = {
          user_id: userId,
          org_id: organizationId,
          default_user_id: userToBeCopiedFromSukiUserId,
          specialties
        };

        cloudLogger.info("Getting context");
        const ctx = getContext({ organizationId }, false, true);
        cloudLogger.info("Getting script provison response");
        scriptsProvisionResponse = await MacrosService.syncOrganizationDefaultMacros(rpcInput, ctx);
      } catch (error) {
        cloudLogger.error("Error in provision providers | Bad request", req, { error });
        return res.status(StatusCodes.BAD_REQUEST).json({
          ...error
        });
      }
    }

    cloudLogger.info("User successfully provisioned", req);
    return res.status(StatusCodes.OK).json({
      code: StatusCodes.OK,
      message: "User successfully provisioned",
      data: {
        tenant: tenantName,
        id: embedUserReader.partnerId(embedUser),
        email: embedUserReader.oktaUsername(embedUser)
      }
    });
  };

  createSukiEncounter = async (req: Request, res: Response) => {
    const authToken = _get(req, "headers.auth");

    if (_isEmpty(authToken)) {
      cloudLogger.error(
        `Error in creating Suki encounter | Bad Request | ${
          ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]
        }: Empty/Invalid auth token passed in headers`,
        req
      );
      return res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        message: `${ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]}: Empty/Invalid auth token passed in headers`
      });
    }

    const encounterDetails = _get(req, "body.encounter", {});
    if (_isEmpty(encounterDetails)) {
      cloudLogger.error(
        `Error in creating Suki encounter | Bad Request | ${
          ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]
        }: Empty/Invalid encounter details passed in body`,
        req
      );
      return res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        message: `${ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]}: Empty/Invalid encounter details passed in body`
      });
    }

    const firstDotPosition = authToken.indexOf(".");
    const jwt = authToken.slice(firstDotPosition + 1);
    if (_isEmpty(jwt)) {
      cloudLogger.error(
        `Error in creating Suki encounter | Bad Request | ${
          ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]
        }: Empty/Invalid auth token passed in headers`,
        req
      );
      return res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        message: `${ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]}: Empty/Invalid auth token passed in headers`
      });
    }

    try {
      cloudLogger.info("Checking if JWT token is valid");
      const isValidToken = await isValidIdToken(jwt);

      if (!isValidToken) {
        cloudLogger.error(
          `Error in creating Suki encounter | Unauthorized | ${
            ERROR_STATEMENTS[StatusCodes.UNAUTHORIZED]
          }: System level token validation failed`,
          req
        );
        return res.status(StatusCodes.UNAUTHORIZED).json({
          code: StatusCodes.UNAUTHORIZED,
          message: `${ERROR_STATEMENTS[StatusCodes.UNAUTHORIZED]}: System level token validation failed`
        });
      }
    } catch (error) {
      cloudLogger.error(
        "Error in creating suki encounter | Internal server error | User JWT authentication failed",
        req,
        { error }
      );
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: `${ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]}: User JWT authentication failed`
      });
    }

    cloudLogger.info("JWT token decoded, getting user info");
    const decodedJwt = decodedSystemToken(jwt);
    const userId = _get(decodedJwt, "userID");
    const organizationId = _get(decodedJwt, "organizationID");
    const partnerId = _get(decodedJwt, "partnerId");

    cloudLogger.info("Destructuring patient and encounterId from encounter details");
    const { patient, identifier: encounterId } = encounterDetails;
    const error = validateEncounterDetails(encounterDetails);
    if (error) {
      cloudLogger.error(
        `Error in creating Suki encounter | Bad Request | ${
          ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]
        }: Error validating encounter details`,
        req
      );
      return res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        message: `${ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]}: ${error}`
      });
    }

    const ctx = getContext({ organizationId, userId }, true, true);

    let appointmentId;
    try {
      cloudLogger.info("Getting RPC input");
      const rpcInput = {
        include_metadata: true,
        include_sections: true,
        organization_id: organizationId,
        source: {
          source_type: NoteSources.USER
        },
        user_id: userId
      };

      const response = SMSService.getComposition(rpcInput, ctx);
      cloudLogger.info("Getting Compositions");
      const compositions = _get(response, "compositions", []).map(convertCompositionFromProtoForAppointmentStatus);
      const composition = _find(compositions, isCompositionForEncounterId(encounterId)) || {};
      cloudLogger.info("Getting appointment id");
      appointmentId = _get(composition, "metadata.appointment.id");
    } catch (error) {
      cloudLogger.error("Error in creating suki encounter | Internal server error", req, { error });
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }

    if (!_isNil(appointmentId)) {
      cloudLogger.info("Sending suki_url as appointment id is not Nil");
      const iframeUrl = `${EMBED_URL}/?src=embed&tenantName=Amwell&token=${authToken}&appointmentId=${appointmentId}`;
      return res.status(StatusCodes.OK).json({
        suki_url: iframeUrl
      });
    }

    let appointmentDetails;
    try {
      cloudLogger.info("Destructuring encounter details");
      const { identifier: encounterId } = encounterDetails;
      const scope = buildScope(ctx);

      cloudLogger.info("Getting RPC input");
      const rpcInput = {
        scope: scope,
        owner_id: userId,
        emr_encounter_ids: [encounterId]
      };
      const response = await AppointmentsService.getAppointments(rpcInput, ctx);
      cloudLogger.info("Getting appointment details");
      appointmentDetails = _get(response, "appointments.0", {});
      appointmentId = appointmentDetails.id;
    } catch (error) {
      cloudLogger.error(
        `Error in creating suki encounter | Bad request | User JWT authentication failed | Error fetching appointments for encounterId: ${encounterId}`,
        req,
        { error }
      );
      return res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        message: `${
          ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]
        }: Error fetching appointments for encounterId: ${encounterId}`
      });
    }

    if (!_isNil(appointmentId)) {
      cloudLogger.info("Sending suki_url as appointment id is not Nil");
      const iframeUrl = `${EMBED_URL}/?src=embed&tenantName=Amwell&token=${authToken}&appointmentId=${appointmentId}`;
      return res.status(StatusCodes.OK).json({
        suki_url: iframeUrl
      });
    }

    let patientDetails;
    try {
      const scope = buildScope(ctx);
      const rpcInput = {
        scope,
        emr_ids: [patient.id]
      };
      const response = await PatientsService.getPatients(rpcInput, ctx);
      cloudLogger.info("Getting patient details");
      patientDetails = _get(response, "patients.0");
    } catch (error) {
      cloudLogger.error("Error in creating suki encounter", req, { error });
    }

    if (_isEmpty(patientDetails)) {
      try {
        const scope = buildScope(ctx);
        const patient = _get(encounterDetails, "patient", {});
        cloudLogger.info("Destructuring patient details");
        const { identifier: patientId, name, birthDate, gender } = patient;

        const newPatientDetails = {
          firstName: _head(name?.given),
          lastName: name?.family,
          suffix: _head(name?.suffix),
          birthDate,
          gender
        };

        const rpcInput = {
          scope,
          patients: [
            {
              person: convertPersonToProto(newPatientDetails),
              emr_id: patientId
            }
          ]
        };
        cloudLogger.info("Creating or updating patients");
        const response = await PatientsService.createOrUpdatePatients(rpcInput, ctx);
        cloudLogger.info("Getting patient details");
        patientDetails = _get(response, "patients", {});

        if (_isEmpty(patientDetails)) {
          cloudLogger.error(
            "Error in creating suki encounter | Bad request | Error creating patient in the system",
            req
          );
          return res.status(StatusCodes.BAD_REQUEST).json({
            code: StatusCodes.BAD_REQUEST,
            details: error,
            message: `${ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]}: Error creating patient in the system`
          });
        }
      } catch (error) {
        cloudLogger.error("Error in creating suki encounter | Bad request", req, { error });
        return res.status(StatusCodes.BAD_REQUEST).json({
          code: StatusCodes.BAD_REQUEST,
          message: `${ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]}: ${error}`
        });
      }
    }

    try {
      const scope = buildScope(ctx);

      const encounterId = encounterDetails?.identifier;
      const now = new Date();
      const later = new Date(now.getTime() + 30 * 60000);
      cloudLogger.info("Getting RPC input");
      const rpcInput = {
        scope: scope,
        appointment: {
          owner_id: userId,
          patient_id: patientDetails.id,
          starts_at: getDateFromString(now),
          ends_at: getDateFromString(later),
          reason: "",
          emr_encounter_id: encounterId,
          emr_encounter_status: "OPEN",
          emr_user_id: partnerId
        }
      };
      const response = await AppointmentsService.createOrUpdateAppointment(rpcInput, ctx);
      cloudLogger.info("Getting appointment id");
      appointmentId = _get(response, "appointment.id");
    } catch (error) {
      cloudLogger.error("Error in creating suki encounter | Bad request | Failed to create new appointment", req, {
        error
      });
      return res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        details: error,
        message: `${ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]}: Failed to create new appointment`
      });
    }

    const iframeUrl = `${EMBED_URL}/?src=embed&tenantName=Amwell&token=${authToken}&appointmentId=${appointmentId}`;
    cloudLogger.info("Suki Encounter created successfully");
    return res.status(StatusCodes.OK).json({
      suki_url: iframeUrl
    });
  };

  getProviderNote = async (req: Request, res: Response) => {
    const encounterId = _get(req, "query.encounterId");
    const authToken = _get(req, "headers.token");
    const error = _isEmpty(authToken)
      ? "Empty/Invalid auth token passed in headers"
      : _isEmpty(encounterId)
      ? "Invalid/Empty encounterId received"
      : "";

    if (error) {
      cloudLogger.error("Error in getting provider note | Bad request", req, { error });
      return res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        message: `${ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]}: ${error}`
      });
    }

    cloudLogger.info("Checking first dot position");
    const firstDotPosition = authToken.indexOf(".");
    const jwt = authToken.slice(firstDotPosition + 1);

    if (_isEmpty(jwt)) {
      cloudLogger.error(
        "Error in getting provider note | Bad request | Empty/Invalid jwt token passed in headers",
        req
      );
      return res.status(StatusCodes.BAD_REQUEST).json({
        code: StatusCodes.BAD_REQUEST,
        message: `${ERROR_STATEMENTS[StatusCodes.BAD_REQUEST]}: Empty/Invalid jwt token passed in headers`
      });
    }

    try {
      cloudLogger.info("Checking if token is valid");
      const isValidToken = await isValidIdToken(jwt);

      if (!isValidToken) {
        cloudLogger.error("Error in getting provider note | Unauthorized | System level token validation failed", req);
        return res.status(StatusCodes.UNAUTHORIZED).json({
          code: StatusCodes.UNAUTHORIZED,
          message: `${ERROR_STATEMENTS[StatusCodes.UNAUTHORIZED]}: System level token validation failed`
        });
      }
    } catch (error) {
      cloudLogger.error("Error in creating suki encounter | Unauthorized | User JWT authentication failed", req, {
        error
      });
      return res.status(StatusCodes.UNAUTHORIZED).json({
        code: StatusCodes.UNAUTHORIZED,
        details: error,
        message: `${ERROR_STATEMENTS[StatusCodes.UNAUTHORIZED]}: User JWT authentication failed`
      });
    }

    let composition;
    const decodedJwt = decodedSystemToken(jwt);
    const organizationId = _get(decodedJwt, "organizationID");
    const userId = _get(decodedJwt, "userID");
    const ctx = getContext({ organizationId, userId }, true, true);

    try {
      cloudLogger.info("Getting RPC input");
      const rpcInput = {
        include_metadata: true,
        include_sections: true,
        organization_id: organizationId,
        source: {
          source_type: NoteSources.USER
        },
        user_id: userId
      };
      cloudLogger.info("Getting composition response");
      const response = SMSService.getComposition(rpcInput, ctx);
      const compositions = _get(response, "compositions", []).map(convertCompositionFromProtoForAppointmentStatus);
      cloudLogger.info(`Finding composition for encounter id ${encounterId}`);
      composition = _find(compositions, isCompositionForEncounterId(encounterId)) || {};
    } catch (error) {
      cloudLogger.error("Error in creating suki encounter | Internal server error", req, { error });
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }

    let fhirformattedComposition;
    try {
      cloudLogger.info("Getting RPC input");
      const rpcInput = {
        composition: composition
      };
      cloudLogger.info("Getting RPC input filtered");
      const rpcInputFiltered = omitProtoBufErrorFields(rpcInput);
      cloudLogger.info("Getting FHIR Formatted Composition");
      fhirformattedComposition = await PDFService.convertCompositionToDocumentReference(rpcInputFiltered, ctx);
    } catch (error) {
      cloudLogger.error("Error in creating suki encounter | Internal server error", req, { error });
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }

    let icdCodesDetails;
    try {
      cloudLogger.info("Getting RPC input");
      const rpcInput = {
        composition
      };
      cloudLogger.info("Getting RPC input filtered");
      const rpcInputFiltered = omitProtoBufErrorFields(rpcInput);
      cloudLogger.info("Getting ICD codes details");
      icdCodesDetails = await PDFService.convertCompositionToConditions(rpcInputFiltered, ctx);
    } catch (error) {
      cloudLogger.error("Error in creating suki encounter | Internal server error", req, { error });
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        details: error,
        message: ERROR_STATEMENTS[StatusCodes.INTERNAL_SERVER_ERROR]
      });
    }

    cloudLogger.info("Getting formatted codes");
    const formattedCodes = JSON.parse(_get(icdCodesDetails, "conditions_json"));
    cloudLogger.info("Completed getting provider note", req);
    return res.status(StatusCodes.OK).json({
      notes: JSON.parse(_get(fhirformattedComposition, "document_reference_json")),
      codes: _isNil(formattedCodes) ? [] : formattedCodes
    });
  };
}

export default new AmwellController();
