import _map from "lodash/map";

import { sectionReader } from "../../../readers";
import { getProblemSections } from "../../../helpers";
import { Composition, NoteSection } from "../../../types";

const getSectionIdNameString = (section: NoteSection) =>
  `${sectionReader.sectionId(section)}:${sectionReader.sectionName(section)}`;

const getProblemSectionsIdNameMap = (composition: Composition) => {
  const problemSections = getProblemSections(composition);
  return _map(problemSections, getSectionIdNameString);
};

export { getProblemSectionsIdNameMap };
