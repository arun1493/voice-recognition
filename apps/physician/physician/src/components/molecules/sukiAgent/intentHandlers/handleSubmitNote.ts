import store from "store2";
import _get from "lodash/get";
import _includes from "lodash/includes";
import { Location } from "react-router-dom";
import { EMPTY_OBJECT, Paths } from "@suki-web/suki-business";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { Dispatch } from "../../../../types";
import { agentActions } from "../../../../redux/agent";
import { modalsActions } from "../../../../redux/modals";
import { compositionReader, metadataReader } from "../../../../readers";
import { LOCAL_STORE, SubmissionModals, SukiAgentState } from "../../../../constants";

function handleSubmitNote(location: Location, dispatch: Dispatch, getState: any) {
  if (!_includes(location?.pathname, Paths.Note)) {
    return;
  }

  const { note } = getState();
  const isReadOnlyNote = note?.readOnly;

  const composition = _get(note, "composition", EMPTY_OBJECT);
  const metadata = compositionReader.metadata(composition);
  const isPartialDictationReadOnly = metadataReader.partialDictationReadOnly(metadata);

  if (isReadOnlyNote || isPartialDictationReadOnly) {
    return;
  }

  if (store.get(LOCAL_STORE.HAS_PROBLEM_SECTION)) {
    dispatch(modalsActions.showSignNoteModal({ type: SubmissionModals.CONFIRM_CODES }));
  } else {
    dispatch(modalsActions.showSignNoteModal({ type: SubmissionModals.INITIAL }));
  }
  playSound(AgentSounds.END_OF_UTTERANCE);
  dispatch(agentActions.setAgentState(SukiAgentState.READY));
}

export default handleSubmitNote;
