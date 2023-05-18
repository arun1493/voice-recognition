import { ClientEmitEventTypes } from "@suki-web/suki-business";

import { noteActions } from "../../../redux/note";
import { NoteActionHandlerArguments } from "../../../types";

const handleSectionFocus = ({ getState, payload, dispatch, transmitEvent }: NoteActionHandlerArguments) => {
  const { isAgentActive, sectionId } = payload;
  const isReadOnly = getState().note.readOnly;
  const { agent, note } = getState();
  const { activeSectionId } = note;
  const { isActive } = agent;

  if (isReadOnly) {
    return;
  }

  dispatch(noteActions.setTabKey(false));

  if (activeSectionId !== sectionId) {
    dispatch(noteActions.setActiveSectionId(sectionId));
  }

  if (isAgentActive || isActive) {
    transmitEvent({
      type: ClientEmitEventTypes.CHANGE_SECTION,
      data: {
        sectionId
      }
    });
  }
};

export { handleSectionFocus };
