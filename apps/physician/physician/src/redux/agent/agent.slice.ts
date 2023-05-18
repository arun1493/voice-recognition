import { createSelector, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { SukiAgentSize, SukiAgentState, SukiAgentStateType } from "../../constants";

const AGENT_FEATURE_KEY = "agent";

interface AgentState {
  isActive: boolean;
  isAnimated: boolean;
  isHidden: boolean;
  position: "center" | "bottom";
  size: SukiAgentSize;
  status: SukiAgentStateType;
}

const initialAgentState: AgentState = {
  isActive: false,
  isAnimated: false,
  isHidden: false,
  position: "center",
  size: SukiAgentSize.LG,
  status: SukiAgentState.MUTED
};

const agentSlice = createSlice({
  name: AGENT_FEATURE_KEY,
  initialState: initialAgentState,
  reducers: {
    setActiveStatus: (state, { payload: isActive }) => {
      state.isActive = isActive;
    },
    toggleActive: (state) => {
      state.isActive = !state.isActive;
    },
    setCentered: (state) => {
      state.position = "center";
    },
    setBottom: (state) => {
      state.position = "bottom";
    },
    setSize: (state, { payload = SukiAgentSize.LG }) => {
      state.size = payload;
    },
    setAnimated: (state) => {
      state.isAnimated = true;
    },
    setNotAnimated: (state) => {
      state.isAnimated = false;
    },
    setIsHidden: (state, { payload }) => {
      state.isHidden = payload;
    },
    setAgentState: (state, { payload }) => {
      state.status = payload;
    }
  }
});

const agentReducer = agentSlice.reducer;

const agentActions = agentSlice.actions;

const getAgentState = (rootState: RootState): AgentState => rootState[AGENT_FEATURE_KEY];

const selectAgentPosition = createSelector(getAgentState, (state) => state?.position);
const selectIsAgentActive = createSelector(getAgentState, (state) => state?.isActive);
const selectIsAgentAnimated = createSelector(getAgentState, (state) => state?.isAnimated);
const selectAgentSize = createSelector(getAgentState, (state) => state?.size);
const selectIsAgentHidden = createSelector(getAgentState, (state) => state?.isHidden);
const selectAgentStatus = createSelector(getAgentState, (state) => state?.status);

export {
  AGENT_FEATURE_KEY,
  agentActions,
  agentReducer,
  AgentState,
  initialAgentState,
  selectAgentPosition,
  selectAgentSize,
  selectAgentStatus,
  selectIsAgentActive,
  selectIsAgentAnimated,
  selectIsAgentHidden
};
