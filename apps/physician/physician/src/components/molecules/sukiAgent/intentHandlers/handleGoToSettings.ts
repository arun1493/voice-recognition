import { NavigateFunction } from "react-router-dom";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { Dispatch } from "../../../../types";
import { getRoute } from "../../../../helpers";
import { agentActions } from "../../../../redux/agent";
import { Pages, SukiAgentState } from "../../../../constants";

function handleGoToSettings(navigate: NavigateFunction, dispatch: Dispatch) {
  const settingsRoute = getRoute(Pages.Settings);
  settingsRoute && navigate(settingsRoute);
  playSound(AgentSounds.END_OF_UTTERANCE);
  dispatch(agentActions.setAgentState(SukiAgentState.READY));
}

export default handleGoToSettings;
