import _isEmpty from "lodash/isEmpty";
import _isUndefined from "lodash/isUndefined";

import { noteActions } from "../../../redux/note";
import { autoPopulateIcdCodes, saveComposition } from "../helpers";
import { handleInsertScript } from "../actionHandlers/handleInsertScript";
import { compositionReader, metadataReader, sectionReader } from "../../../readers";
import { handleUpdateScriptModule } from "../actionHandlers/handleUpdateScriptModule";

async function handleAddSectionResponse(payload: any, { getReduxStoreState, dispatch, transmitEvent }: any) {
  const { sections: sectionsResponse } = payload;

  const { note, scripts } = getReduxStoreState();

  const { composition } = note;
  const compositionId = compositionReader.compositionId(composition);
  const metadata = compositionReader.metadata(composition);
  const noteTypeId = metadataReader.noteTypeId(metadata);
  const sections = compositionReader.sections(composition);
  const sectionIndex = sectionReader.sectionIndex(sectionsResponse[0]);

  const sectionsCopy = [...sections];
  sectionsCopy.splice(sectionIndex, 0, sectionsResponse[0]);

  dispatch(noteActions.addCachedProblemToComposition({ section: sectionsResponse[0] }));
  dispatch(noteActions.setActiveSectionId(sectionReader.sectionId(sectionsResponse[0])));

  // Update Scripts Module for newly added sections
  const handleScriptInsert = (scriptId: string, activeSectionId: string) => {
    handleInsertScript({
      getState: getReduxStoreState,
      payload: { activeSectionId, scriptId },
      dispatch,
      transmitEvent
    });
  };

  handleUpdateScriptModule({
    getState: getReduxStoreState,
    payload: { allScripts: scripts?.scripts, handleInsertScript: handleScriptInsert, sections: sectionsCopy },
    dispatch,
    transmitEvent
  });

  // Auto populate icd codes
  const updatedSectionWithIcdCode = await autoPopulateIcdCodes(sectionsResponse[0]);
  if (!_isUndefined(updatedSectionWithIcdCode) && !_isEmpty(updatedSectionWithIcdCode)) {
    dispatch(noteActions.updateSection({ sectionData: updatedSectionWithIcdCode }));
    saveComposition(updatedSectionWithIcdCode, compositionId, noteTypeId, transmitEvent);
  }
}

export { handleAddSectionResponse };
