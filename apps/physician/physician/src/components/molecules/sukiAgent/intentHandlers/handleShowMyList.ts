import { NavigateFunction } from "react-router-dom";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { Dispatch } from "../../../../types";
import { getRoute } from "../../../../helpers";
import { agentActions } from "../../../../redux/agent";
import { modalsActions } from "../../../../redux/modals";
import { Pages, SukiAgentState } from "../../../../constants";

function handleShowMyList(navigate: NavigateFunction, dispatch: Dispatch) {
  const listRoute = getRoute(Pages.List);
  dispatch(modalsActions.hideAllModals());
  listRoute && navigate(listRoute);
  playSound(AgentSounds.END_OF_UTTERANCE);
  dispatch(agentActions.setAgentState(SukiAgentState.READY));
}

export default handleShowMyList;
