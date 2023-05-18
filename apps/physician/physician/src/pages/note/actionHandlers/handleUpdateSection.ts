import _find from "lodash/find";
import { batch } from "react-redux";
import _isEmpty from "lodash/isEmpty";
import { UpdateTypes } from "@suki-web/suki-editor";
import { ClientEmitEventTypes, EMPTY_ARRAY } from "@suki-web/suki-business";

import { saveComposition } from "../helpers";
import { noteActions } from "../../../redux/note";
import { agentActions } from "../../../redux/agent";
import { SukiAgentState } from "../../../constants";
import { NoteActionHandlerArguments, NoteSection } from "../../../types";
import { compositionReader, metadataReader, sectionReader } from "../../../readers";
import { handleUpdateUnderscoreOccurances } from "./handleUpdateUnderscoreOccurances";

const isSectionIdEqual = (sectionId: string) => (section: NoteSection) =>
  sectionReader.sectionId(section) === sectionId;

const handleUpdateSection = ({ dispatch, getState, payload, transmitEvent }: NoteActionHandlerArguments) => {
  const { contentSelection, sectionData, updateType } = payload;

  if (updateType === UpdateTypes.SILENT) {
    return;
  }

  const { note, agent } = getState();

  if (agent.isActive) {
    batch(() => {
      dispatch(agentActions.setActiveStatus(false));
      dispatch(agentActions.setAgentState(SukiAgentState.MUTED));
    });
    transmitEvent({ type: ClientEmitEventTypes.SPEECH_END });
  }

  const { composition } = note;

  const compositionId = compositionReader.compositionId(composition);
  const metadata = compositionReader.metadata(composition);
  const noteTypeId = metadataReader.noteTypeId(metadata);
  const sections = compositionReader.sections(composition);

  // Found that sectionData coming from handleOnChange did not had updated data,
  // so whatever previous data was attached to it, will be attaching here from redux
  const currentSection = _find(sections, isSectionIdEqual(sectionData?.id));
  const updatedSectionData = { ...currentSection, ...sectionData };

  handleUpdateUnderscoreOccurances({ payload, dispatch, transmitEvent });

  batch(() => {
    dispatch(noteActions.updateSection({ sectionData: updatedSectionData }));
    !_isEmpty(contentSelection) && dispatch(noteActions.setContentSelection(EMPTY_ARRAY));
  });

  saveComposition(updatedSectionData, compositionId, noteTypeId, transmitEvent);
};

export { handleUpdateSection };
