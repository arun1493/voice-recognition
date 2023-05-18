import _get from "lodash/get";
import _filter from "lodash/filter";
import _isEmpty from "lodash/isEmpty";
import { EMPTY_OBJECT } from "@suki-web/suki-business";

import { noteActions } from "../../../redux/note";
import { checkIfSectionHasScripts, createModules } from "../helpers";
import { NoteActionHandlerArguments, NoteSection } from "../../../types";
import { compositionReader, metadataReader, sectionReader } from "../../../readers";

const handleUpdateScriptModule = ({ dispatch, getState, payload }: NoteActionHandlerArguments) => {
  const { allScripts, handleInsertScript, sections } = payload;

  const composition = _get(getState(), "note.composition", EMPTY_OBJECT);
  const metadata = compositionReader.metadata(composition);
  const isPartialDictationComposition = metadataReader.partialDictationComposition(metadata);

  if (!_isEmpty(allScripts)) {
    sections.forEach((section: NoteSection) => {
      const sectionName = sectionReader.sectionName(section);
      const sectionId = sectionReader.sectionId(section);
      const scriptsForSection = isPartialDictationComposition
        ? allScripts
        : _filter(allScripts, checkIfSectionHasScripts(section));
      const scriptModuleForSection = createModules(scriptsForSection, sectionName, sectionId, handleInsertScript);
      dispatch(noteActions.updateScriptModules({ sectionId, scriptModuleForSection }));
    });
  }
};

export { handleUpdateScriptModule };
