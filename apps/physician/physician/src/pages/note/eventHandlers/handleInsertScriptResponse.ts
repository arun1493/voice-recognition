import { batch } from "react-redux";

import { NoteSection } from "../../../types";
import { sectionReader } from "../../../readers";
import { noteActions } from "../../../redux/note";
import { SukiAgentState } from "../../../constants";
import { agentActions } from "../../../redux/agent";
import { modalsActions } from "../../../redux/modals";
import { AgentSounds, playSound } from "../../../components/molecules";

interface InsertScriptResponse {
  sections: NoteSection[];
}

function handleInsertScriptResponse(payload: InsertScriptResponse, { dispatch }: any): void {
  const { sections } = payload;

  batch(() => {
    dispatch(modalsActions.hideAllModals());
    dispatch(noteActions.updateSection({ sectionData: sections[0] }));
  });

  playSound(AgentSounds.END_OF_UTTERANCE);
  dispatch(agentActions.setAgentState(SukiAgentState.READY));

  // Only updating section will not update the active section id, we will wait until the updates are done in the editor
  // and set the active sectionId at the end, which will set the cursorPosition correctly after update happens inside
  // respective editor.
  const sectionId = sectionReader.sectionId(sections[0]);
  setTimeout(() => {
    dispatch(noteActions.setActiveSectionId(sectionId));
  }, 0);
}

export { handleInsertScriptResponse };
