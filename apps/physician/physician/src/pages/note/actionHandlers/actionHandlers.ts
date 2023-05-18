import { handleUndo } from "./handleUndo";
import { NoteActionType } from "../../../constants";
import { handleSectionBlur } from "./handleSectionBlur";
import { handleSectionFocus } from "./handleSectionFocus";
import { handleInsertScript } from "./handleInsertScript";
import { handleUpdateSection } from "./handleUpdateSection";
import { handleTabNavigation } from "./handleTabNavigation";
import { handleAddNewProblem } from "./handleAddNewProblem";
import { handleDeleteProblem } from "./handleDeleteProblem";
import { handleHTMLSectionFocus } from "./handleHTMLSectionFocus";
import { handleUpdateScriptModule } from "./handleUpdateScriptModule";
import { handleProblemSectionFocus } from "./handleProblemSectionFocus";
import { handleProblemSectionDelete } from "./handleProblemSectionDelete";
import { handleUpdateCursorPosition } from "./handleUpdateCursorPosition";
import { handleUpdateProblemSection } from "./handleUpdateProblemSection";
import { handleSaveToUnfinishedNotes } from "./handleSaveToUnfinishedNotes";
import { handleUpdateUnderscoreOccurances } from "./handleUpdateUnderscoreOccurances";

const ACTION_HANDLERS = {
  [NoteActionType.ADD_NEW_PROBLEM]: handleAddNewProblem,
  [NoteActionType.DELETE_PROBLEM_SECTION]: handleDeleteProblem,
  [NoteActionType.INSERT_SCRIPT]: handleInsertScript,
  [NoteActionType.SAVE_TO_UNFINISHED_NOTES]: handleSaveToUnfinishedNotes,
  [NoteActionType.SECTION_BLUR]: handleSectionBlur,
  [NoteActionType.PROBLEM_SECTION_DELETE]: handleProblemSectionDelete,
  [NoteActionType.PROBLEM_SECTION_FOCUS]: handleProblemSectionFocus,
  [NoteActionType.HTML_SECTION_FOCUS]: handleHTMLSectionFocus,
  [NoteActionType.UPDATE_PROBLEM_SECTION]: handleUpdateProblemSection,
  [NoteActionType.SECTION_FOCUS]: handleSectionFocus,
  [NoteActionType.TAB_NAVIGATION]: handleTabNavigation,
  [NoteActionType.UNDO]: handleUndo,
  [NoteActionType.UPDATE_CURSOR_POSITION]: handleUpdateCursorPosition,
  [NoteActionType.UPDATE_SCRIPT_MODULE]: handleUpdateScriptModule,
  [NoteActionType.UPDATE_SECTION]: handleUpdateSection,
  [NoteActionType.UPDATE_UNDERSCORE_OCCURANCES]: handleUpdateUnderscoreOccurances
};

export { ACTION_HANDLERS };
