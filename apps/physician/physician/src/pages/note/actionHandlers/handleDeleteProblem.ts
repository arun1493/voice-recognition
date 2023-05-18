import { ClientEmitEventTypes, EMPTY_ARRAY } from "@suki-web/suki-business";

import { noteActions } from "../../../redux/note";
import { USER_REQUEST_TYPE } from "../../../constants";
import { NoteActionHandlerArguments, NoteSection } from "../../../types";
import { compositionReader, metadataReader, sectionReader } from "../../../readers";

const getProblemSectionId = (sections: NoteSection[]) =>
  sections?.find((section: NoteSection) => sectionReader.pbcSectionFlag(section))?.id;

const handleDeleteProblem = ({ dispatch, getState, payload, transmitEvent }: NoteActionHandlerArguments) => {
  const { sectionData } = payload;

  const { note } = getState();
  const { composition } = note;

  const compositionId = compositionReader.compositionId(composition);
  const sections = compositionReader.sections(composition) || EMPTY_ARRAY;
  const metadata = compositionReader.metadata(composition);
  const noteTypeId = metadataReader.noteTypeId(metadata);

  transmitEvent({
    type: ClientEmitEventTypes.USER_REQUEST,
    data: {
      compositionId,
      noteTypeId,
      requestType: USER_REQUEST_TYPE.DELETE_SECTION,
      sectionData,
      sectionId: getProblemSectionId(sections)
    }
  });
  dispatch(noteActions.deleteProblemSection(sectionData.id));
};

export { handleDeleteProblem };
