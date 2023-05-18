import _isEmpty from "lodash/isEmpty";
import { ClientEmitEventTypes } from "@suki-web/suki-business";

import { noteActions } from "../../../redux/note";
import { NoteActionHandlerArguments } from "../../../types";
import { EMPTY_OBJECT, EMPTY_STRING } from "../../../constants";
import { AgentSounds, playSound } from "../../../components/molecules";

const handleSectionBlur = ({ getState, dispatch, transmitEvent, payload }: NoteActionHandlerArguments) => {
  const { agent, note } = getState();
  const { isActive } = agent;
  const { isIgnoredOnBlur, activeSectionId } = note;
  const { forceBlur = false } = payload || EMPTY_OBJECT;

  const activeElement = document.activeElement;

  if (!activeElement && !forceBlur) return;

  const isQuillEditor = activeElement?.classList?.contains("ql-editor");
  const isProblemSection = activeElement?.classList?.contains("problem-section");

  if (forceBlur || (!isQuillEditor && !isProblemSection && !isIgnoredOnBlur)) {
    dispatch(noteActions.setActiveSectionId(EMPTY_STRING));
    if (isActive && !_isEmpty(activeSectionId)) {
      playSound(AgentSounds.EXIT_DICTATION);
      transmitEvent({
        type: ClientEmitEventTypes.SPEECH_CONFIG,
        data: {
          sectionId: EMPTY_STRING
        }
      });
    }
  }
};

export { handleSectionBlur };
