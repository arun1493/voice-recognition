import _find from "lodash/find";
import _reduce from "lodash/reduce";
import _isEmpty from "lodash/isEmpty";
import _isUndefined from "lodash/isUndefined";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "@suki-web/suki-business";

import { CardType } from "../../../constants";
import { Composition, NoteSection } from "../../../types";
import { compositionReader, sectionReader } from "../../../readers";

const addCurrentSectionCursorPosition = (
  cursorPositionsBySectionId: Record<string, CardType>,
  section: NoteSection
) => {
  const position = sectionReader.cursorPosition(section);
  const sectionId = sectionReader.sectionId(section);
  return {
    ...cursorPositionsBySectionId,
    [sectionId]: position
  };
};

const getCursorPositionsBySection = (composition: Composition) => {
  const sections = compositionReader.sections(composition) || EMPTY_ARRAY;
  return _reduce(sections, addCurrentSectionCursorPosition, EMPTY_OBJECT);
};

const isProblemSection = (section: NoteSection): boolean => {
  return sectionReader.pbcSectionFlag(section) || !_isEmpty(sectionReader.diagnosisEntry(section));
};

const getPbcSectionId = (sections: NoteSection[]): string => {
  const pbcSection = _find(sections, (section: NoteSection) => sectionReader.pbcSectionFlag(section));
  if (!_isUndefined(pbcSection) && !_isEmpty(pbcSection)) {
    return sectionReader.sectionId(pbcSection);
  }
  return "";
};

export { getCursorPositionsBySection, getPbcSectionId, isProblemSection };
