import _get from "lodash/get";
import _find from "lodash/find";
import { NavigateFunction } from "react-router-dom";
import { SlotTypes } from "@suki-web/suki-business";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { Dispatch } from "../../../../types";
import { getRoute } from "../../../../helpers";
import { agentActions } from "../../../../redux/agent";
import { Pages, SukiAgentState } from "../../../../constants";

function handleGoToPatientProfile(navigate: NavigateFunction, dispatch: Dispatch, slots: any) {
  const patientSlot = _find(slots, (slot) => slot.type === SlotTypes.PATIENT);

  if (patientSlot && !patientSlot.ambiguous) {
    const patientId = _get(patientSlot, "values[0].patient.id");
    const patientProfileRoute = getRoute(Pages.PatientProfile, { patientId });
    patientProfileRoute && navigate(patientProfileRoute);
  }

  playSound(AgentSounds.END_OF_UTTERANCE);
  dispatch(agentActions.setAgentState(SukiAgentState.READY));
}

export default handleGoToPatientProfile;
