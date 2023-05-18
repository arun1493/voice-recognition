import { batch } from "react-redux";
import { NavigateFunction } from "react-router-dom";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { Dispatch } from "../../../../types";
import { getRoute } from "../../../../helpers";
import { agentActions } from "../../../../redux/agent";
import { modalsActions } from "../../../../redux/modals";
import { Pages, SukiAgentState } from "../../../../constants";

function handleHelp(navigate: NavigateFunction, dispatch: Dispatch) {
  playSound(AgentSounds.END_OF_UTTERANCE);
  batch(() => {
    dispatch(agentActions.setAgentState(SukiAgentState.READY));
    dispatch(modalsActions.hideAllModals());
  });
  const helpRoute = getRoute(Pages.Help);
  helpRoute && navigate(helpRoute);
}

export default handleHelp;
