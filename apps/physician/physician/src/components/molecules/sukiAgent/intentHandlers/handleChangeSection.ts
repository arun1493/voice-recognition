import _get from "lodash/get";
import { batch } from "react-redux";
import { ClientEmitEventTypes, EMPTY_ARRAY, IntentResponse } from "@suki-web/suki-business";

import { playSound } from "../helpers";
import { AgentSounds } from "../constants";
import { noteActions } from "../../../../redux/note";
import { agentActions } from "../../../../redux/agent";
import { getProblemSections } from "../../../../helpers";
import { Dispatch, NoteSection } from "../../../../types";
import handleAgentCancelled from "./handleAgentCancelled";
import { EMPTY_STRING, SukiAgentState } from "../../../../constants";
import { compositionReader, metadataReader, patientReader, sectionReader } from "../../../../readers";
import { handleUpdateCursorPosition } from "../../../../pages/note/actionHandlers/handleUpdateCursorPosition";

function handleChangeSection(dispatch: Dispatch, getState: any, transmitEvent: any, intentResponse: IntentResponse) {
  const isReadOnly = getState().note.readOnly;
  if (isReadOnly) {
    return handleAgentCancelled(dispatch);
  }
  playSound(AgentSounds.END_OF_UTTERANCE);
  const newSectionId = _get(intentResponse, "slots[0].values[0].section.id", EMPTY_STRING);

  const { composition } = getState().note;
  const sections = compositionReader.sections(composition) || EMPTY_ARRAY;
  const nextSection = sections?.find((section) => sectionReader.sectionId(section) === newSectionId);

  let textLength = 0;
  if (nextSection) textLength = sectionReader.plainTextLength(nextSection);

  if (newSectionId) {
    const compositionId = compositionReader.compositionId(composition);
    const metadata = compositionReader.metadata(composition);
    const patient = metadataReader.patient(metadata);
    const noteTypeId = metadataReader.noteTypeId(metadata);
    const patientId = patientReader.id(patient);
    const problemSections = getProblemSections(composition);
    const problemSectionIdsAndNamesMap = problemSections?.map(
      (section: NoteSection) => `${sectionReader.sectionId(section)}:${sectionReader.sectionName(section)}`
    );

    batch(() => {
      dispatch(noteActions.setActiveSectionId(newSectionId));
      dispatch(agentActions.setAgentState(SukiAgentState.READY));
    });

    handleUpdateCursorPosition({
      dispatch,
      getState,
      payload: { sectionId: newSectionId, cursorPosition: textLength },
      transmitEvent
    });

    transmitEvent({
      type: ClientEmitEventTypes.SPEECH_CONFIG,
      data: {
        compositionId,
        noteTypeId,
        patientId,
        problemBasedSections: problemSectionIdsAndNamesMap,
        sectionId: newSectionId
      }
    });
  }
}

export default handleChangeSection;
