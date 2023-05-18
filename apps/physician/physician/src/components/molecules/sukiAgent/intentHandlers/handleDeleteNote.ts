import i18n from "i18next";
import _get from "lodash/get";
import _includes from "lodash/includes";
import { EMPTY_OBJECT, Paths } from "@suki-web/suki-business";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { Dispatch } from "../../../../types";
import { agentActions } from "../../../../redux/agent";
import { toastsActions } from "../../../../redux/toast";
import { modalsActions } from "../../../../redux/modals";
import { SukiAgentState, TOAST_TYPES } from "../../../../constants";
import { compositionReader, metadataReader } from "../../../../readers";

function handleDeleteNote(location: any, dispatch: Dispatch, getState: any) {
  if (!_includes(location?.pathname, Paths.Note)) {
    return;
  }
  const composition = _get(getState(), "note.composition", EMPTY_OBJECT);
  const metadata = compositionReader.metadata(composition);
  const isPartialDictationComposition = metadataReader.partialDictationComposition(metadata);

  playSound(AgentSounds.END_OF_UTTERANCE);
  dispatch(agentActions.setAgentState(SukiAgentState.READY));

  if (isPartialDictationComposition) {
    dispatch(
      toastsActions.add({
        message: i18n.t("modals.deleteModal.deletePartialDictationCompositionError"),
        type: TOAST_TYPES.ERROR
      })
    );
  } else {
    dispatch(modalsActions.showDeleteNoteModal());
  }
}

export default handleDeleteNote;
