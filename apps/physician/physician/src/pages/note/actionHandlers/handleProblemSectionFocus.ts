import { ClientEmitEventTypes } from "@suki-web/suki-business";

import { noteActions } from "../../../redux/note";
import { getProblemSections } from "../../../helpers";
import { NoteActionHandlerArguments, NoteSection } from "../../../types";
import { compositionReader, metadataReader, patientReader, sectionReader } from "../../../readers";

const handleProblemSectionFocus = ({ getState, payload, dispatch, transmitEvent }: NoteActionHandlerArguments) => {
  const { sectionData } = payload;
  const sectionId = sectionReader.sectionId(sectionData);

  const { composition } = getState().note;

  const compositionId = compositionReader.compositionId(composition);
  const metadata = compositionReader.metadata(composition);
  const patient = metadataReader.patient(metadata);
  const noteTypeId = metadataReader.noteTypeId(metadata);
  const patientId = patientReader.id(patient);
  const problemSections = getProblemSections(composition);
  const problemSectionIdsAndNamesMap = problemSections?.map(
    (section: NoteSection) => `${sectionReader.sectionId(section)}:${sectionReader.sectionName(section)}`
  );

  dispatch(noteActions.setActiveSectionId(sectionId));
  transmitEvent({
    type: ClientEmitEventTypes.SPEECH_CONFIG,
    data: {
      compositionId,
      noteTypeId,
      patientId,
      problemBasedSections: problemSectionIdsAndNamesMap,
      sectionId
    }
  });
};

export { handleProblemSectionFocus };
