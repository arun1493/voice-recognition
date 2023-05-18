import { EMPTY_ARRAY } from "@suki-web/suki-business";

import { noteActions } from "../../../redux/note";

function handleUpdateSection(payload: any, { dispatch }: any): void {
  const { sections } = payload;

  const sectionData = sections[0];

  // Remove any highlighted text from editor after dictated text
  dispatch(noteActions.setContentSelection(EMPTY_ARRAY));
  dispatch(noteActions.updateSection({ sectionData }));
}

export { handleUpdateSection };
