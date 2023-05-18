import { noteActions } from "../../../redux/note";

function handleScriptChangeSection(payload: any, { socket, dispatch }: any): void {
  dispatch(noteActions.updateSection({ sectionData: payload.sections[0] }));
}

export { handleScriptChangeSection };
