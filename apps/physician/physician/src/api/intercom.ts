import _get from "lodash/get";
import { EMPTY_OBJECT } from "@suki-web/suki-business";

import { logger } from ".";
import axios from "./config";
import { CustomAttributes, InitializeOobeRequest, UpdateOobeTasksRequest } from "../types";

const INTERCOM_URL = "/intercom";

const getIntercomUserData = (userId: string) => {
  return axios
    .get(`${INTERCOM_URL}/user/${userId}`)
    .then((response) => {
      return _get(response, "data.data", EMPTY_OBJECT);
    })
    .catch((error) => {
      logger.error({ message: "Failed to fetch intercom user data", payload: error });
      return EMPTY_OBJECT;
    });
};

const incrementUserSignInsCount = (userId: string) => {
  return axios
    .post(`${INTERCOM_URL}/increment-sign-in`, { userId })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      logger.error({ message: "Failed to update intercom user", payload: error });
    });
};

const updateIntercomCustomAttributes = (customAttributes: CustomAttributes, userId: string) => {
  return axios
    .post(`${INTERCOM_URL}/custom-attribures`, { userId, customAttributes })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      logger.error({ message: "Failed to update intercom user", payload: error });
    });
};

const initializeOOBE = (params: InitializeOobeRequest) => {
  const { oobeTasksStatus, oobeTasksStatusNonIntegrated, tasksCompleted, userId } = params;
  return axios
    .post(`${INTERCOM_URL}/initialize-oobe`, {
      oobeTasksStatus,
      oobeTasksStatusNonIntegrated,
      tasksCompleted,
      userId
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      logger.error({ message: "Failed to initialize intercom user oobe", payload: error });
    });
};

const updateOOBE = (params: UpdateOobeTasksRequest) => {
  return axios
    .post(`${INTERCOM_URL}/oobe-tasks`, params)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      logger.error({ message: "Failed to update intercom user oobe", payload: error });
    });
};

const updateOOBECompletion = (userId: string, isOobeCompleted: boolean) => {
  return axios
    .post(`${INTERCOM_URL}/oobe-completed`, { userId, isOobeCompleted })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      logger.error({ message: "Failed to update intercom user oobe completion", payload: error });
    });
};

export {
  getIntercomUserData,
  incrementUserSignInsCount,
  initializeOOBE,
  updateIntercomCustomAttributes,
  updateOOBECompletion,
  updateOOBE
};
