import i18next from "i18next";
import _find from "lodash/find";
import { batch } from "react-redux";
import _isEmpty from "lodash/isEmpty";
import _isUndefined from "lodash/isUndefined";

import { TOAST_TYPES } from "../../../constants";
import { noteActions } from "../../../redux/note";
import { toastsActions } from "../../../redux/toast";
import { autoPopulateIcdCodes, saveComposition } from "../helpers";
import { NoteActionHandlerArguments, NoteSection } from "../../../types";
import { handleProblemSectionDelete } from "./handleProblemSectionDelete";
import { compositionReader, metadataReader, sectionReader } from "../../../readers";

const isSectionIdEqual = (sectionId: string) => (section: NoteSection) =>
  sectionReader.sectionId(section) === sectionId;

const handleUpdateProblemSection = async ({
  dispatch,
  getState,
  payload,
  transmitEvent
}: NoteActionHandlerArguments) => {
  const { sectionData } = payload;

  const { note } = getState();

  const { composition } = note;
  const compositionId = compositionReader.compositionId(composition);
  const metadata = compositionReader.metadata(composition);
  const noteTypeId = metadataReader.noteTypeId(metadata);
  const sections = compositionReader.sections(composition);
  const currentSection = _find(sections, isSectionIdEqual(sectionData?.id));
  const updatedSectionData = { ...currentSection, ...sectionData };

  // if section name is duplicate, put section back into section name, and dont sent update
  const existingSectionNames = sections
    ?.filter((section) => sectionReader.sectionId(section) !== sectionReader.sectionId(sectionData))
    ?.map((section) => sectionReader.sectionName(section)?.toLowerCase());

  if (existingSectionNames.includes(sectionReader.sectionName(sectionData)?.toLowerCase())) {
    dispatch(toastsActions.add({ message: i18next.t("errors.s2.sameSectionNameAdded"), type: TOAST_TYPES.ERROR }));
    const payload = {
      sectionData,
      shouldDelete: true
    };
    handleProblemSectionDelete({ dispatch, getState, payload, transmitEvent });
    return;
  }

  // Auto populate problem section
  const updatedSectionWithIcdCode = await autoPopulateIcdCodes(updatedSectionData);

  if (!_isUndefined(updatedSectionWithIcdCode) && !_isEmpty(updatedSectionWithIcdCode)) {
    batch(() => {
      dispatch(noteActions.updateSection({ sectionData: updatedSectionWithIcdCode }));
      dispatch(noteActions.setActiveSectionId(sectionReader.sectionId(sectionData)));
    });
    saveComposition(updatedSectionWithIcdCode, compositionId, noteTypeId, transmitEvent);
    return;
  }

  batch(() => {
    dispatch(noteActions.updateSection({ sectionData: updatedSectionData }));
    dispatch(noteActions.setActiveSectionId(sectionReader.sectionId(sectionData)));
  });
  saveComposition(updatedSectionData, compositionId, noteTypeId, transmitEvent);
};

export { handleUpdateProblemSection };
