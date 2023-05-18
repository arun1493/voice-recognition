import { NavigateFunction } from "react-router-dom";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { Dispatch } from "../../../../types";
import { getRoute } from "../../../../helpers";
import { agentActions } from "../../../../redux/agent";
import { modalsActions } from "../../../../redux/modals";
import { Pages, SukiAgentState } from "../../../../constants";

function handleShowMySchedule(navigate: NavigateFunction, dispatch: Dispatch) {
  const scheduleRoute = getRoute(Pages.Schedule);
  dispatch(modalsActions.hideAllModals());
  scheduleRoute && navigate(scheduleRoute);
  playSound(AgentSounds.END_OF_UTTERANCE);
  dispatch(agentActions.setAgentState(SukiAgentState.READY));
}

export default handleShowMySchedule;
