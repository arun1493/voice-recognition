import store from "store2";
import _includes from "lodash/includes";
import { Location } from "react-router-dom";
import { Paths } from "@suki-web/suki-business";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { Dispatch } from "../../../../types";
import { agentActions } from "../../../../redux/agent";
import { modalsActions } from "../../../../redux/modals";
import { LOCAL_STORE, SukiAgentState, WHAT_CAN_I_SAY_TYPE } from "../../../../constants";

function getWhatCanISayModalType(location: Location) {
  const { pathname } = location;
  const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);

  if (_includes(pathname, Paths.Note)) {
    return WHAT_CAN_I_SAY_TYPE.NOTE;
  }
  if (isEmrUser && _includes(pathname, Paths.PatientProfile)) {
    return WHAT_CAN_I_SAY_TYPE.INTEGRATED_PATIENT_PROFILE;
  }
  return WHAT_CAN_I_SAY_TYPE.GENERAL;
}

function handleWhatCanISay(location: Location, dispatch: Dispatch) {
  playSound(AgentSounds.END_OF_UTTERANCE);
  dispatch(agentActions.setAgentState(SukiAgentState.READY));

  const type = getWhatCanISayModalType(location);
  dispatch(modalsActions.showWhatCanISayModal(type));
}

export default handleWhatCanISay;
