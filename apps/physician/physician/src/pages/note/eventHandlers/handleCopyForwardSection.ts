import { batch } from "react-redux";

import { sectionReader } from "../../../readers";
import { noteActions } from "../../../redux/note";
import { agentActions } from "../../../redux/agent";
import { SukiAgentState } from "../../../constants";
import { AgentSounds, playSound } from "../../../components/molecules";

function handleCopyForwardSection(payload: any, { dispatch, getReduxStoreState }: any): void {
  const { sections } = payload;

  const { note } = getReduxStoreState();

  const { activeSectionId } = note;

  playSound(AgentSounds.END_OF_UTTERANCE);

  batch(() => {
    dispatch(noteActions.updateSection({ sectionData: sections[0] }));
    dispatch(agentActions.setAgentState(SukiAgentState.READY));
  });

  // Only updating section will not update the active section id, we will wait until the updates are done in the editor
  // and set the active sectionId at the end, which will set the cursorPosition correctly after update happens inside
  // respective editor.

  if (activeSectionId) {
    setTimeout(() => {
      const sectionId = sectionReader.sectionId(sections[0]);
      dispatch(noteActions.setActiveSectionId(sectionId));
    }, 0);
  }
}

export { handleCopyForwardSection };
