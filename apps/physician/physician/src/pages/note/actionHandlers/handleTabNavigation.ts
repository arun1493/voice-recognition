import _find from "lodash/find";
import _last from "lodash/last";
import _first from "lodash/first";
import _isEmpty from "lodash/isEmpty";
import _findLast from "lodash/findLast";
import _findIndex from "lodash/findIndex";
import { EMPTY_ARRAY, Process } from "@suki-web/suki-business";

import { noteActions } from "../../../redux/note";
import { NoteActionHandlerArguments } from "../../../types";
import { compositionReader, sectionReader } from "../../../readers";
import { AllUnderScoreOccurances, NoteSection } from "../../../types";
import { handleUpdateCursorPosition } from "./handleUpdateCursorPosition";

const isNextUnderscorePosition =
  (currentCursorPosition: number) =>
  ([underScoreStartposition, underScoreEndPosition]: number[]) =>
    currentCursorPosition < underScoreStartposition;

const isPreviousUnderscorePosition =
  (currentCursorPosition: number) =>
  ([underScoreStartposition, underScoreEndPosition]: number[]) =>
    currentCursorPosition > underScoreStartposition;

const getNextUnderScorePositionInSection = (
  sectionId: string,
  allUnderScoreOccurances: AllUnderScoreOccurances,
  currentCursorPosition: number,
  isBackwards: boolean
) => {
  const currentSectionUnderScorePositions = allUnderScoreOccurances[sectionId];
  if (_isEmpty(currentSectionUnderScorePositions)) {
    return;
  }

  if (isBackwards) {
    return _findLast(currentSectionUnderScorePositions, isPreviousUnderscorePosition(currentCursorPosition));
  } else {
    return _find(currentSectionUnderScorePositions, isNextUnderscorePosition(currentCursorPosition));
  }
};

const isNextUnderScorePositionInCurrentSection = (next: any, params: any) => {
  const { allUnderScoreOccurances, currentCursorPosition, currentSectionIndex, dispatch, isShiftTab, sections } =
    params;

  const currentSection = sections[currentSectionIndex];
  const currentSectionId = sectionReader.sectionId(currentSection);
  const nextUnderscorePosition = getNextUnderScorePositionInSection(
    currentSectionId,
    allUnderScoreOccurances,
    currentCursorPosition,
    isShiftTab
  );

  if (!_isEmpty(nextUnderscorePosition)) {
    dispatch(noteActions.setContentSelection(nextUnderscorePosition));
    return;
  }

  return next(params);
};

const isNextUnderScorePositionInNextSection = (next: any, params: any) => {
  const { allUnderScoreOccurances, currentSectionIndex, dispatch, isShiftTab, sections } = params;

  if (isShiftTab) {
    return next(params);
  }

  const nextSectionIndex = currentSectionIndex + 1;
  const nextSection = sections[nextSectionIndex];

  if (!_isEmpty(nextSection)) {
    const nextSectionId = sectionReader.sectionId(nextSection);
    dispatch(noteActions.setActiveSectionId(nextSectionId));

    const nextSectionUnderScorePositions = allUnderScoreOccurances[nextSectionId];
    const nextUnderscorePosition = _first(nextSectionUnderScorePositions);
    if (!_isEmpty(nextUnderscorePosition)) {
      dispatch(noteActions.setContentSelection(nextUnderscorePosition));
      return;
    }
  } else {
    handleNoNextUnderScoreOccurances(next, params);
    return;
  }
};

const isNextUnderScorePositionInPreviousSection = (next: any, params: any) => {
  const { allUnderScoreOccurances, currentSectionIndex, dispatch, isShiftTab, sections } = params;

  if (!isShiftTab) {
    return next(params);
  }

  const previousSectionIndex = currentSectionIndex - 1;
  const previousSection = sections[previousSectionIndex];

  if (!_isEmpty(previousSection)) {
    const previousSectionId = sectionReader.sectionId(previousSection);
    dispatch(noteActions.setActiveSectionId(previousSectionId));

    const previousSectionUnderScorePositions = allUnderScoreOccurances[previousSectionId];
    const previousUnderscorePosition = _last(previousSectionUnderScorePositions);
    if (!_isEmpty(previousUnderscorePosition)) {
      dispatch(noteActions.setContentSelection(previousUnderscorePosition));
      return;
    }
  }
  return next(params);
};

const handleNoNextUnderScoreOccurances = (next: any, params: any) => {
  const { currentSectionIndex, dispatch, isShiftTab, sections } = params;

  const nextActiveSectionIndex = isShiftTab ? currentSectionIndex - 1 : currentSectionIndex + 1;
  const nextActiveSection = sections[nextActiveSectionIndex];

  if (!_isEmpty(nextActiveSection)) {
    dispatch(noteActions.setContentSelection(EMPTY_ARRAY));
    return;
  }
};

const isNextOrPreviousSectionExists = (next: any, params: any) => {
  const { actionHandlerArguments, currentSectionIndex, dispatch, isShiftTab, sections } = params;
  const totalSections = sections.length;
  const lastSectionIndex = totalSections - 1;
  if (currentSectionIndex > 0 && isShiftTab) {
    return next(params);
  }

  if (currentSectionIndex < lastSectionIndex && !isShiftTab) {
    return next(params);
  }

  const currentSection = sections[currentSectionIndex];
  const position = sectionReader.plainTextLength(currentSection);
  const activeSectionId = sectionReader.sectionId(currentSection);

  dispatch(noteActions.setContentSelection(EMPTY_ARRAY));

  handleUpdateCursorPosition({
    ...actionHandlerArguments,
    payload: { sectionId: activeSectionId, cursorPosition: position }
  });
  return;
};

const HANDLING_TAB_NAVIGATION_PROCESS = new Process()
  .addHandler(isNextUnderScorePositionInCurrentSection)
  .addHandler(isNextOrPreviousSectionExists)
  .addHandler(isNextUnderScorePositionInNextSection)
  .addHandler(isNextUnderScorePositionInPreviousSection)
  .addHandler(handleNoNextUnderScoreOccurances);

const handleTabNavigation = (actionHandlerArguments: NoteActionHandlerArguments) => {
  const { getState, dispatch, payload } = actionHandlerArguments;
  const { currentCursorPosition, isShiftTab, sectionId } = payload;

  const { note } = getState();
  const { composition, underScoreOccurances: allUnderScoreOccurances } = note;
  const sections = compositionReader.sections(composition) || EMPTY_ARRAY;

  const activeSectionIndex = _findIndex(
    sections,
    (section: NoteSection) => sectionReader.sectionId(section) === sectionId
  );

  HANDLING_TAB_NAVIGATION_PROCESS.run({
    allUnderScoreOccurances,
    actionHandlerArguments,
    currentCursorPosition,
    currentSectionIndex: activeSectionIndex,
    dispatch,
    isShiftTab,
    sections
  });
};

export { handleTabNavigation };
