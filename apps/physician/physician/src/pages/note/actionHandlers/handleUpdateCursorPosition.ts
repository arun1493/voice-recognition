import _find from "lodash/find";
import { ClientEmitEventTypes, EMPTY_ARRAY } from "@suki-web/suki-business";

import { saveComposition } from "../helpers";
import { NoteSection } from "../../../types";
import { noteActions } from "../../../redux/note";
import { NoteActionHandlerArguments } from "../../../types";
import { compositionReader, metadataReader, sectionReader } from "../../../readers";

const isSectionIdEqual = (sectionId: string) => (section: NoteSection) =>
  sectionReader.sectionId(section) === sectionId;

const handleUpdateCursorPosition = ({ transmitEvent, getState, dispatch, payload }: NoteActionHandlerArguments) => {
  const { cursorLength, cursorPosition, sectionId } = payload;

  const { note } = getState();
  const { composition } = note;
  const sections = compositionReader.sections(composition) || EMPTY_ARRAY;
  const section = _find(sections, isSectionIdEqual(sectionId));
  const sectionData = { ...section, cursorPosition } as NoteSection;

  const compositionId = compositionReader.compositionId(composition);
  const metadata = compositionReader.metadata(composition);
  const noteTypeId = metadataReader.noteTypeId(metadata);

  if (cursorLength > 0) {
    dispatch(noteActions.setContentSelection([cursorPosition, cursorPosition + cursorLength]));
    transmitEvent({
      type: ClientEmitEventTypes.CURSOR_POSITION,
      data: { ...payload }
    });
  } else {
    dispatch(noteActions.setContentSelection(EMPTY_ARRAY));
  }

  dispatch(noteActions.updateSection({ sectionData }));

  saveComposition(sectionData, compositionId, noteTypeId, transmitEvent);
};

export { handleUpdateCursorPosition };
