import _find from "lodash/find";
import _isEmpty from "lodash/isEmpty";
import { ClientEmitEventTypes } from "@suki-web/suki-business";

import { sectionReader } from "../../../readers";
import { noteActions } from "../../../redux/note";
import { NoteActionHandlerArguments, NoteSection } from "../../../types";

const handleHTMLSectionFocus = ({ payload, dispatch, transmitEvent }: NoteActionHandlerArguments) => {
  const { isAgentActive, isReadOnlyNote, sectionIndex, sections } = payload;

  if (isReadOnlyNote) {
    return;
  }

  const nextEditableSection = _find(
    sections,
    (section: NoteSection) => !_isEmpty(sectionReader.dictationTag(section)),
    sectionIndex
  );

  if (nextEditableSection) {
    const nextEditableSectionId = sectionReader.sectionId(nextEditableSection);
    dispatch(noteActions.setActiveSectionId(nextEditableSectionId));
    if (isAgentActive) {
      transmitEvent({
        type: ClientEmitEventTypes.CHANGE_SECTION,
        data: {
          sectionId: nextEditableSectionId
        }
      });
    }
  }
};

export { handleHTMLSectionFocus };
