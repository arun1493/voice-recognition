import { Server } from "socket.io";
import jwtDecode from "jwt-decode";

import { redis } from "../redis";
import { MsS2EventManager } from "./msS2";
import { MsSukiAsrEventManager } from "./msSukiAsr";
import { MsDictationEventManager } from "./msDictation";
import EmrAccountsService from "../services/EmrAccountsService";
import { CLIENTS_LIST, EMR_SECONDARY_TYPE, EMR_TYPE } from "../constants";
import { getClientNameFromDictationUrlPreference, getDictationUriPreference, isEmrIntegrated } from "./helpers";
import { buildScope, cloudLogger, convertEMROrganizationFromProto, getContext, isValidAccessToken } from "../helpers";

const initializeSocket = (httpServer: any) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    },
    transports: ["websocket"]
  });

  redis.initializeRedis(io);

  const msS2Namespace = io.of("/");
  const msDictationNamespace = io.of("/dictation");

  /*
  Middlewares gets executed once for every new connection. Adding middleware to
  check the validity of the access token. Please refer to https://socket.io/docs/v4/middlewares/
  for further details.
  */
  msS2Namespace.use(async (socket, next) => {
    const accessToken = socket?.handshake?.auth?.accessToken;
    const idToken = socket?.handshake?.auth?.idToken;
    const sessionToken = socket?.handshake?.auth?.sessionToken;
    const userAgent = socket?.handshake?.auth?.userAgent;
    const clientName = socket?.handshake?.auth?.clientName;

    try {
      cloudLogger.info(`[${userAgent}] Initializing socket`);
      const isValidToken = await isValidAccessToken(accessToken);
      if (isValidToken) {
        cloudLogger.info(`[${userAgent}] Token is valid`);
        const { userID: userId, organizationID: organizationId, email }: any = jwtDecode(idToken);

        // Fetching EMR Organization details for the logged in user
        cloudLogger.info(`[${userAgent}] Fetching EMR Organization details`);
        const ctx = getContext({ organizationId }, false, true);
        const rpcInput = { scope: buildScope(ctx) };
        const emrOrganizationResponse = await EmrAccountsService.getOrganization(rpcInput, ctx);
        const emrOrganization = convertEMROrganizationFromProto(emrOrganizationResponse.organization);
        const isEmrOrganization = isEmrIntegrated(emrOrganization, organizationId);
        const primaryEmr = emrOrganization?.type || EMR_TYPE.UNKNOWN;
        const secondaryEmr = emrOrganization?.secondaryType || EMR_SECONDARY_TYPE.UNKNOWN_EMR;

        socket.data.accessToken = accessToken;
        socket.data.email = email;
        socket.data.idToken = idToken;
        socket.data.isEmrOrganization = isEmrOrganization;
        socket.data.organizationId = organizationId;
        socket.data.primaryEmr = primaryEmr;
        socket.data.secondaryEmr = secondaryEmr;
        socket.data.sessionToken = sessionToken;
        socket.data.userAgent = userAgent;
        socket.data.userId = userId;
        socket.data.clientName = clientName;
        next();
      } else {
        next(new Error("Invalid Token"));
      }
    } catch (error) {
      next(new Error(`[${userAgent}] Failed to fetch EMR Organization details`));
    }
  });

  cloudLogger.info(`Establishing socket connection`);
  msS2Namespace.on("connection", async (socket) => {
    socket.join(socket.data.sessionToken);
    cloudLogger.info(`[${socket.data.userAgent}] Socket connection successfully established`);
    const eventManager = new MsS2EventManager(socket);

    socket.on("disconnect", (reason) => {
      cloudLogger.info("Socket connection disconnected", null, { reason });
      eventManager.terminateS2Connection();
    });
  });

  /**
   * Namespace for handling requests for ms-dictation
   */
  msDictationNamespace.use(async (socket, next) => {
    let dictationUrlFromPreferences;
    const accessToken = socket?.handshake?.auth?.accessToken;
    const idToken = socket?.handshake?.auth?.idToken as string;
    const { userID: userId, organizationID: organizationId }: any = jwtDecode(idToken);
    try {
      dictationUrlFromPreferences = await getDictationUriPreference(idToken, organizationId, userId);
    } catch (error) {
      console.log(error);
    }

    try {
      cloudLogger.info(`[${socket.data.userAgent}] Checking if token is valid for ms-dictation`);
      const isValidToken = await isValidAccessToken(accessToken);
      if (isValidToken) {
        cloudLogger.info(`[${socket.data.userAgent}] Token is valid for ms-dictation`, null, { accessToken, idToken });
        socket.data.accessToken = accessToken;
        socket.data.idToken = idToken;
        socket.data.organizationId = organizationId;
        socket.data.userId = userId;
        socket.data.dictationUrlFromPreferences = dictationUrlFromPreferences;
        next();
      } else {
        cloudLogger.error(`[${socket.data.userAgent}] Invalid token`, null, { accessToken, idToken });
        next(new Error(`[${socket.data.userAgent}] Invalid Token`));
      }
    } catch (error) {
      cloudLogger.error(`[${socket.data.userAgent}] Falied to validate the access token`, null, { error });
      next(new Error(`[${socket.data.userAgent}] Failed to validate the access token`));
    }
  });

  msDictationNamespace.on("connection", async (socket) => {
    cloudLogger.info(`[${socket.data.userAgent}] Establishing session for ms-dictation namespace`);
    socket.join(socket.data.sessionToken);
    cloudLogger.info(`[${socket.data.userAgent}] Successfully established session for ms-dictation namespace`, null, {
      socketData: socket.data
    });
    let eventManager;
    const clientName = getClientNameFromDictationUrlPreference(socket?.data?.dictationUrlFromPreferences);
    cloudLogger.info("Client name obtained after comparing dictation url is", null, { clientName: clientName });

    if (clientName == CLIENTS_LIST.SUKI_ASR) {
      eventManager = new MsSukiAsrEventManager(socket);
    } else {
      eventManager = new MsDictationEventManager(socket);
    }

    socket.on("disconnect", (reason) => {
      console.log("Socket connection disconnected", reason);
      eventManager.terminateDialog();
    });
  });
};

export default initializeSocket;
