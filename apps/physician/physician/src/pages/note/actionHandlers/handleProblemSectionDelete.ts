import { sectionReader } from "../../../readers";

import { NoteActionHandlerArguments } from "../../../types";
import { handleDeleteProblem } from "./handleDeleteProblem";

const handleProblemSectionDelete = ({ getState, payload, dispatch, transmitEvent }: NoteActionHandlerArguments) => {
  const { sectionData, shouldDelete } = payload;

  if (sectionReader.sectionName(sectionData) === "" || shouldDelete) {
    handleDeleteProblem({ getState, payload: { sectionData }, dispatch, transmitEvent });
  }
};

export { handleProblemSectionDelete };
