import _get from "lodash/get";
import _last from "lodash/last";
import _includes from "lodash/includes";
import { EMPTY_OBJECT, Paths } from "@suki-web/suki-business";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { Dispatch } from "../../../../types";
import { agentActions } from "../../../../redux/agent";
import { SukiAgentState } from "../../../../constants";
import { isNoteCompleted, printNote } from "../../../../helpers";
import { compositionReader, metadataReader } from "../../../../readers";

function handlePrintNote(location: any, dispatch: Dispatch, getState: any) {
  if (!_includes(location?.pathname, Paths.Note)) {
    return;
  }
  const composition = _get(getState(), "note.composition", EMPTY_OBJECT);
  const compositionId = compositionReader.compositionId(composition);
  const metadata = compositionReader.metadata(composition);
  const noteStatus = metadataReader.status(metadata);
  const noteId = _last(location?.pathname?.split("/")) as string;
  const noteParams = isNoteCompleted(noteStatus) ? { noteId } : { compositionId };

  printNote(noteParams);
  playSound(AgentSounds.END_OF_UTTERANCE);
  dispatch(agentActions.setAgentState(SukiAgentState.READY));
}

export default handlePrintNote;
