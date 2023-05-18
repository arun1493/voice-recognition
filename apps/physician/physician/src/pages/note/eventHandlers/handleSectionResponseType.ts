import i18n from "i18next";
import { batch } from "react-redux";
import { ClientReceiveEventTypes } from "@suki-web/suki-business";

import { agentActions } from "../../../redux/agent";
import { toastsActions } from "../../../redux/toast";
import { SukiAgentState, TOAST_TYPES } from "../../../constants";
import { AgentSounds, playSound } from "../../../components/molecules";

function handleSectionResponseType(payload: any, { dispatch }: any): void {
  if (payload === ClientReceiveEventTypes.NO_SECTION_IN_FOCUS_FOR_ANY_SECTION_MACRO) {
    playSound(AgentSounds.ERROR);
    batch(() => {
      dispatch(
        toastsActions.add({ message: i18n.t("modals.scriptDetails.insertion.notInFocus"), type: TOAST_TYPES.ERROR })
      );
      dispatch(agentActions.setAgentState(SukiAgentState.READY));
    });
  } else if (payload === ClientReceiveEventTypes.NO_MATCHING_SECTION_FOUND_FOR_MACRO) {
    playSound(AgentSounds.ERROR);
    batch(() => {
      dispatch(
        toastsActions.add({ message: i18n.t("modals.scriptDetails.insertion.noSectionFound"), type: TOAST_TYPES.ERROR })
      );
      dispatch(agentActions.setAgentState(SukiAgentState.READY));
    });
  } else if (payload === ClientReceiveEventTypes.SAME_SECTION_NAME_ADDED) {
    playSound(AgentSounds.ERROR);
    batch(() => {
      dispatch(toastsActions.add({ message: i18n.t("errors.s2.sameSectionNameAdded"), type: TOAST_TYPES.ERROR }));
      dispatch(agentActions.setAgentState(SukiAgentState.READY));
    });
  }
}

export { handleSectionResponseType };
