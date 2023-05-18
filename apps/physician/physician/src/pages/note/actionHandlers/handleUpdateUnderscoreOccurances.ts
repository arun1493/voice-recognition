import { sectionReader } from "../../../readers";
import { noteActions } from "../../../redux/note";
import { NoteActionHandlerArguments } from "../../../types";
import { getAllUnderScoreOccuranceIndexes } from "../helpers";

const handleUpdateUnderscoreOccurances = ({ dispatch, payload }: NoteActionHandlerArguments) => {
  const { sectionData } = payload;
  const sectionId = sectionReader.sectionId(sectionData);

  const underScoreOccurances = getAllUnderScoreOccuranceIndexes(sectionData.plainText);
  sectionId && dispatch(noteActions.updateUnderScoreOccurance({ sectionId, underScoreOccurances }));
};

export { handleUpdateUnderscoreOccurances };
