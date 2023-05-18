import store from "store2";
import _get from "lodash/get";
import _clone from "lodash/clone";
import _isNil from "lodash/isNil";
import { batch } from "react-redux";
import _isEmpty from "lodash/isEmpty";

import {
  getIntercomUserData,
  incrementUserSignInsCount,
  initializeOOBE,
  logger,
  updateOOBE,
  updateOOBECompletion
} from "../api";
import {
  INITIAL_TASKS_COUNT,
  OOBE_TASKS_STATUS_STATE,
  OOBE_TASKS_STATUS_STATE_NON_INTEGRATED,
  oobeActions,
  TASKS_TO_BE_COMPLETED,
  TASKS_TO_BE_COMPLETED_NON_INTEGRATED
} from "../redux/oobe";
import { agentActions } from "../redux/agent";
import { EMPTY_OBJECT, LOCAL_STORE, TASK_STATUSES } from "../constants";
import { Dispatch, OobeTasksStatus, UpdateOobeTasksRequest } from "../types";

type CompleteTask = {
  dispatch: Dispatch;
  tasksCompleted: number;
  tasksStatus: OobeTasksStatus;
  taskType: string;
  tasksToBeCompleted: number;
  userId: string;
};

type fetchAndSetParamsType = {
  dispatch: Dispatch;
  oobeTasksStatus: OobeTasksStatus;
  setIsOobeDataLoaded: (value: boolean) => void;
};

type handleOobeParamsType = {
  dispatch: Dispatch;
  oobe: string;
  userId: string;
};

const handleIntegratedUserOobe = (params: handleOobeParamsType) => {
  const { dispatch, oobe, userId } = params;
  const oobeData = JSON.parse(oobe);
  if (_isEmpty(oobeData)) {
    // to initiate oobe data if it is not in Intercom
    initializeOOBE({
      userId,
      oobeTasksStatusNonIntegrated: JSON.stringify(EMPTY_OBJECT),
      oobeTasksStatus: JSON.stringify(OOBE_TASKS_STATUS_STATE),
      tasksCompleted: INITIAL_TASKS_COUNT
    });

    dispatch(oobeActions.setInitialOobeState());
  } else {
    const {
      is_oobe_completed: intercomIsOobeCompleted,
      oobe_tasks_status: intercomOobeTasksStatus,
      tasks_completed: tasksCompleted
    } = oobeData;

    // if data for oobe exists in Intercom
    if (intercomOobeTasksStatus) {
      batch(() => {
        dispatch(oobeActions.setOobeTasksStatus(JSON.parse(intercomOobeTasksStatus)));
        dispatch(oobeActions.setOobeTasksToBeCompleted(TASKS_TO_BE_COMPLETED));
        dispatch(oobeActions.updateOobeCompletion(intercomIsOobeCompleted));
        dispatch(oobeActions.updateCompletedTasksCount(tasksCompleted));
      });
    }
  }
};

const handleNonIntegratedUserOobe = (params: handleOobeParamsType) => {
  const { dispatch, oobe, userId } = params;
  const oobeData = JSON.parse(oobe);
  const oobeTasksStatusNonIntegrated = _get(oobeData, "oobe_tasks_status_non_integrated", EMPTY_OBJECT);

  if (_isEmpty(oobeData) || _isEmpty(oobeTasksStatusNonIntegrated)) {
    initializeOOBE({
      userId,
      oobeTasksStatusNonIntegrated: JSON.stringify(OOBE_TASKS_STATUS_STATE_NON_INTEGRATED),
      oobeTasksStatus: JSON.stringify(EMPTY_OBJECT),
      tasksCompleted: INITIAL_TASKS_COUNT
    });

    dispatch(oobeActions.setInitialNonIntegratedOobeState());
  } else {
    const {
      is_oobe_completed: intercomIsOobeCompleted,
      oobe_tasks_status_non_integrated: oobeTasksStatusNonIntegrated,
      tasks_completed: tasksCompleted
    } = oobeData;

    if (oobeTasksStatusNonIntegrated) {
      batch(() => {
        dispatch(oobeActions.setOobeTasksStatus(JSON.parse(oobeTasksStatusNonIntegrated)));
        dispatch(oobeActions.setOobeTasksToBeCompleted(TASKS_TO_BE_COMPLETED_NON_INTEGRATED));
        dispatch(oobeActions.updateOobeCompletion(intercomIsOobeCompleted));
        dispatch(oobeActions.updateCompletedTasksCount(tasksCompleted));
      });
    }
  }
};

const fetchAndSetOobe = (params: fetchAndSetParamsType) => {
  const { oobeTasksStatus, setIsOobeDataLoaded, dispatch } = params;
  const oktaData = store.get(LOCAL_STORE.OKTA_DATA);
  const userId = _get(oktaData, "idToken.claims.userID");
  const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);

  if (_isEmpty(oobeTasksStatus) && !_isNil(userId)) {
    getIntercomUserData(userId)
      .then((data) => {
        const oobe = _get(data, "custom_attributes.oobe", JSON.stringify(EMPTY_OBJECT));

        try {
          const params = { userId, oobe, dispatch };
          if (isEmrUser) handleIntegratedUserOobe(params);
          else handleNonIntegratedUserOobe(params);
        } catch {
          logger.error({ message: "Error getting OOBE data!" });
        }

        setIsOobeDataLoaded(true);
        incrementUserSignInsCount(userId);
      })
      .catch((error) => {
        logger.error({ message: "Failed to fetch organization data", payload: error });
      });
  }
};

const completeOobe = async (dispatch: Dispatch, userId: string) => {
  try {
    await updateOOBECompletion(userId, true);
    batch(() => {
      dispatch(oobeActions.updateOobeCompletion(true));
      dispatch(agentActions.setCentered());
    });
    const agentEl = document.querySelector("[data-cy=suki-agent]") as HTMLElement;
    agentEl.style.top = "50%";
  } catch (error) {
    logger.error({ message: "Failed to complete tasks", payload: error });
  }
};

const completeOobeTask = async (params: CompleteTask) => {
  const { dispatch, tasksCompleted, tasksStatus, taskType, tasksToBeCompleted, userId } = params;
  const newTasksStatus: OobeTasksStatus = _clone(tasksStatus);

  if (!isTaskCompleted(newTasksStatus, taskType) && isTaskExists(newTasksStatus, taskType)) {
    const newCompletedTasksCount = tasksCompleted + 1;
    const isOobeCompleted = newCompletedTasksCount === tasksToBeCompleted;
    const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);

    try {
      newTasksStatus[taskType] = TASK_STATUSES.COMPLETED;

      batch(() => {
        dispatch(oobeActions.completeTask(taskType));
        dispatch(oobeActions.updateCompletedTasksCount(newCompletedTasksCount));
        dispatch(oobeActions.updateOobeCompletion(isOobeCompleted));
      });

      const params: UpdateOobeTasksRequest = {
        isOobeCompleted,
        tasksCompleted: newCompletedTasksCount,
        oobeTasksStatus: JSON.stringify(newTasksStatus),
        userId
      };

      if (!isEmrUser) {
        params["oobeTasksStatus"] = JSON.stringify(EMPTY_OBJECT);
        params["oobeTasksStatusNonIntegrated"] = JSON.stringify(newTasksStatus);
      }

      await updateOOBE(params);
    } catch (error) {
      logger.error({ message: "Failed to complete task", payload: error });
    }
  }
};

const isTaskCompleted = (tasksStatus: OobeTasksStatus, taskType: string) => {
  return tasksStatus[taskType] === TASK_STATUSES.COMPLETED;
};
const isTaskExists = (tasksStatus: OobeTasksStatus, taskType: string) => {
  return !!tasksStatus[taskType];
};

const getBreakpoint = (width: number) => `${width + 1}px`;

export { completeOobe, completeOobeTask, fetchAndSetOobe, getBreakpoint, isTaskCompleted };
