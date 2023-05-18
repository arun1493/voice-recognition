import { createSelector, createSlice } from "@reduxjs/toolkit";

import { OobeData } from "../../types";
import { RootState } from "../../redux/store";
import { TASK_STATUSES } from "../../constants";
import { OOBE_TASKS_STATUS_STATE, OOBE_TASKS_STATUS_STATE_NON_INTEGRATED } from ".";

const INITIAL_TASKS_COUNT = 0;
const OOBE_FEATURE_KEY = "oobe";
const NOTES_TO_BE_COMPLETED = 5;
const TASKS_TO_BE_COMPLETED = 5;
const TASKS_TO_BE_COMPLETED_NON_INTEGRATED = 7;

const initialOobeState: OobeData = {
  isOobeCompleted: false,
  notesToBeCompleted: NOTES_TO_BE_COMPLETED,
  tasksStatus: {},
  tasksCompleted: INITIAL_TASKS_COUNT,
  tasksToBeCompleted: TASKS_TO_BE_COMPLETED
};

const oobeSlice = createSlice({
  name: OOBE_FEATURE_KEY,
  initialState: initialOobeState,
  reducers: {
    updateCompletedTasksCount: (state, action) => {
      state.tasksCompleted = action.payload;
      if (state.tasksCompleted === state.tasksToBeCompleted && state.tasksToBeCompleted !== 0)
        state.isOobeCompleted = true;
    },
    updateOobeCompletion: (state, action) => {
      state.isOobeCompleted = action.payload;
    },
    updateTotalNotesCount: (state, action) => {
      state.notesToBeCompleted = action.payload;
    },
    updateTotalTasksCount: (state, action) => {
      state.tasksToBeCompleted = action.payload;
    },
    setInitialOobeState: (state) => {
      state.tasksCompleted = INITIAL_TASKS_COUNT;
      state.tasksToBeCompleted = TASKS_TO_BE_COMPLETED;
      state.tasksStatus = OOBE_TASKS_STATUS_STATE;
    },
    setInitialNonIntegratedOobeState: (state) => {
      state.tasksCompleted = INITIAL_TASKS_COUNT;
      state.tasksToBeCompleted = TASKS_TO_BE_COMPLETED_NON_INTEGRATED;
      state.tasksStatus = OOBE_TASKS_STATUS_STATE_NON_INTEGRATED;
    },
    setOobeTasksStatus: (state, action) => {
      state.tasksStatus = action.payload;
    },
    setOobeTasksToBeCompleted: (state, action) => {
      state.tasksToBeCompleted = action.payload;
    },
    completeTask: (state, action) => {
      state.tasksStatus[action.payload] = TASK_STATUSES.COMPLETED;
    }
  }
});

const oobeReducer = oobeSlice.reducer;

const oobeActions = oobeSlice.actions;

const getOobeState = (rootState: RootState): OobeData => rootState[OOBE_FEATURE_KEY];

const selectOobeState = createSelector(getOobeState, (state) => state);

const selectOobeTasksStatus = createSelector(getOobeState, (state) => state.tasksStatus);

const selectIsOobeCompleted = createSelector(getOobeState, (state) => state.isOobeCompleted);

const selectCompletedTasksCount = createSelector(getOobeState, (state) => state.tasksCompleted);

export {
  INITIAL_TASKS_COUNT,
  initialOobeState,
  oobeActions,
  oobeSlice,
  OOBE_FEATURE_KEY,
  oobeReducer,
  selectCompletedTasksCount,
  selectIsOobeCompleted,
  selectOobeState,
  selectOobeTasksStatus,
  TASKS_TO_BE_COMPLETED,
  TASKS_TO_BE_COMPLETED_NON_INTEGRATED
};
