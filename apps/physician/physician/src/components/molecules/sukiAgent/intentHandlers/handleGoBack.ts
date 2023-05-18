import _get from "lodash/get";
import _includes from "lodash/includes";
import { Paths } from "@suki-web/suki-business";
import { Location, NavigateFunction } from "react-router-dom";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { Dispatch } from "../../../../types";
import { agentActions } from "../../../../redux/agent";
import { SukiAgentState } from "../../../../constants";
import { modalsActions } from "../../../../redux/modals";
import { getReduxStoreState } from "../../../../redux/store";
import { compositionReader, metadataReader } from "../../../../readers";
import { handleNavigateBackFromNote, handleNavigateBackFromPatientProfile } from "../../../../helpers";

function handleGoBack(location: Location, navigate: NavigateFunction, dispatch: Dispatch) {
  if (_includes(location?.pathname, Paths.Home)) {
    playSound(AgentSounds.ERROR);
    return;
  }

  playSound(AgentSounds.END_OF_UTTERANCE);
  dispatch(agentActions.setAgentState(SukiAgentState.READY));
  dispatch(modalsActions.hideAllModals());

  if (_includes(location?.pathname, Paths.List) || _includes(location?.pathname, Paths.Schedule)) {
    navigate(Paths.Home);
    return;
  }

  if (_includes(location?.pathname, Paths.Note)) {
    const composition = _get(getReduxStoreState(), "note.composition");
    const metadata = compositionReader.metadata(composition);
    const patient = metadataReader.patient(metadata);
    handleNavigateBackFromNote(location, navigate, patient);
    return;
  }

  if (_includes(location?.pathname, Paths.PatientProfile)) {
    handleNavigateBackFromPatientProfile(location, navigate);
    return;
  }

  navigate(-1);
}

export default handleGoBack;
