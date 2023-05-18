import _find from "lodash/find";
import { batch } from "react-redux";

import { Composition } from "../../../types";
import { noteActions } from "../../../redux/note";
import { compositionReader } from "../../../readers";
import { SocketEventHandlerAdditionalProps } from "../../../socket";
import { AgentSounds, playSound } from "../../../components/molecules";

interface CompositionOrNoteResponse {
  composition: Composition;
  sectionInFocusId: string;
}

function handleUndo(payload: CompositionOrNoteResponse, { dispatch }: SocketEventHandlerAdditionalProps): void {
  const sectionsS2 = compositionReader.sections(payload?.composition);
  const sectionInFocusId = payload?.sectionInFocusId;

  playSound(AgentSounds.END_OF_UTTERANCE);

  batch(() => {
    dispatch(noteActions.setS2Sections(sectionsS2));
    dispatch(noteActions.setActiveSectionId(sectionInFocusId));
  });
}

export { handleUndo };
