import _includes from "lodash/includes";
import { Paths } from "@suki-web/suki-business";
import { Location, NavigateFunction } from "react-router-dom";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { Dispatch } from "../../../../types";
import { getRoute } from "../../../../helpers";
import { agentActions } from "../../../../redux/agent";
import { modalsActions } from "../../../../redux/modals";
import { Pages, SukiAgentState } from "../../../../constants";

function handleShowScripts(navigate: NavigateFunction, location: Location, dispatch: Dispatch) {
  if (_includes(location?.pathname, Paths.Note)) {
    dispatch(modalsActions.showScriptsListModal());
    dispatch(agentActions.setAgentState(SukiAgentState.READY));
    return;
  }

  const scriptsRoute = getRoute(Pages.Scripts);
  if (scriptsRoute) {
    dispatch(modalsActions.hideAllModals());
    navigate(scriptsRoute);
  }

  playSound(AgentSounds.END_OF_UTTERANCE);
  dispatch(agentActions.setAgentState(SukiAgentState.READY));
}

export default handleShowScripts;
