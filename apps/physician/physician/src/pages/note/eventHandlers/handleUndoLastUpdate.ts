import _get from "lodash/get";
import _find from "lodash/find";
import _isEqual from "lodash/isEqual";

import { NoteSection } from "../../../types";
import { sectionReader } from "../../../readers";
import { noteActions } from "../../../redux/note";
import { agentActions } from "../../../redux/agent";
import { SukiAgentState } from "../../../constants";
import { SocketEventHandlerAdditionalProps } from "../../../socket";
import { AgentSounds, playSound } from "../../../components/molecules";

type UndoLastUpdateResponse = {
  sections: NoteSection[];
};

function handleUndoLastUpdate(
  payload: UndoLastUpdateResponse,
  { dispatch, getReduxStoreState }: SocketEventHandlerAdditionalProps
): void {
  const {
    sections: [sectionData]
  } = payload;

  const sectionId = sectionReader.sectionId(sectionData);
  const plainText = sectionReader.plainText(sectionData);

  const currentSections = _get(getReduxStoreState(), "note.composition.sectionsS2");
  const currentSection = _find(currentSections, (section: NoteSection) => section.id === sectionId);
  const currentSectionPlainText = sectionReader.plainText(currentSection);

  if (_isEqual(currentSectionPlainText, plainText)) {
    playSound(AgentSounds.ERROR);
    dispatch(agentActions.setAgentState(SukiAgentState.READY));
    return;
  }

  dispatch(noteActions.updateSection({ sectionData }));
  dispatch(agentActions.setAgentState(SukiAgentState.READY));
}

export { handleUndoLastUpdate };
