import i18n from "i18next";
import store from "store2";
import _get from "lodash/get";
import _isNil from "lodash/isNil";
import { AxiosError } from "axios";
import _isEmpty from "lodash/isEmpty";

import { NoteSection } from "../../../types";
import { toastsActions } from "../../../redux/toast";
import { LOCAL_STORE, ScriptNoteTypeErrorCode, SUKI_E2E_ID, TOAST_DURATION, TOAST_TYPES } from "../../../constants";

const MAXIMUM_SCRIPT_CONTENT_LENGTH = 64000;

const MAXIMUM_SECTION_CONTENT_LENGTH = 100000;

const REGEX_STRING_CONTAIN_AT_LEAST_ONE_CHAR = /^(?=[^A-Za-z]*[A-Za-z])[ -~]*$/;

const isInvalidNoteTypeSectionContent = (section: NoteSection) => {
  const contentLength = _get(section, "content.length");
  return contentLength > MAXIMUM_SECTION_CONTENT_LENGTH;
};

const isInvalidNoteTypeContent = (sections: NoteSection[]) =>
  sections.find((section) => isInvalidNoteTypeSectionContent(section));

const isInvalidRule = (
  t: any,
  dispatch: any,
  name: string,
  sections: NoteSection[],
  isNewSectionBeingCreated: boolean,
  isScriptType?: boolean
) => {
  if (_isNil(name) || name === "") {
    return dispatch(
      toastsActions.add({
        message: isScriptType
          ? t("modals.scriptDetails.rules.nameScript")
          : t("modals.noteTypeDetails.rules.nameNoteType"),
        type: TOAST_TYPES.ERROR,
        duration: TOAST_DURATION.MEDIUM
      })
    );
  }

  if (isScriptType) {
    const contentLength = _get(sections, "0.content.length");
    if (contentLength > MAXIMUM_SCRIPT_CONTENT_LENGTH) {
      const message = t("modals.scriptDetails.mutationResponse.errors.longScriptContent");
      dispatch(toastsActions.add({ message, type: TOAST_TYPES.ERROR }));
      return true;
    }

    const isNameContainOneChar = REGEX_STRING_CONTAIN_AT_LEAST_ONE_CHAR.test(name);
    if (!isNameContainOneChar) {
      const message = t("modals.scriptDetails.mutationResponse.errors.incorrectName");
      dispatch(toastsActions.add({ message, type: TOAST_TYPES.ERROR }));
      return true;
    }

    if (_isEmpty(sections[0].sectionId)) {
      const message = t("modals.scriptDetails.rules.noSectionSelected");
      dispatch(toastsActions.add({ message, type: TOAST_TYPES.ERROR }));
      return true;
    }
  }

  if (_isEmpty(sections)) {
    return dispatch(
      toastsActions.add({
        message: t("modals.noteTypeDetails.rules.addSections"),
        type: TOAST_TYPES.ERROR,
        duration: TOAST_DURATION.MEDIUM
      })
    );
  }

  if (isNewSectionBeingCreated) {
    return dispatch(
      toastsActions.add({
        message: t("modals.noteTypeDetails.rules.newSectionBeingCreated"),
        type: TOAST_TYPES.ERROR,
        duration: TOAST_DURATION.MEDIUM
      })
    );
  }

  return false;
};

// Function to help us with reordering the result
const reorder = (list: NoteSection[], startIndex: number, targetIndex: number): NoteSection[] => {
  const sectionList = Array.from(list);
  const [draggedSection] = sectionList.splice(startIndex, 1);
  sectionList.splice(targetIndex, 0, draggedSection);

  return sectionList;
};

/**
 * Checks if the organization of the logged in user has any EMR integration
 * Or If it is a End to End test Organization
 * @returns {Boolean} Returns True if EMR integrated, else false.
 */
const isOrgEmrIntegrated = () => {
  const organizationId = store.get(LOCAL_STORE.ORGANIZATION_ID);
  const isEmrUser = store.get(LOCAL_STORE.IS_EMR_USER);
  return isEmrUser || organizationId === SUKI_E2E_ID;
};

const getErrorMessage = (error: AxiosError, isScriptType = false) => {
  const code = _get(error, "response.data.error.code", null);
  let message = null;

  if (code === ScriptNoteTypeErrorCode.INCORRECT_NAME) {
    message = isScriptType
      ? i18n.t("modals.scriptDetails.mutationResponse.errors.incorrectName")
      : i18n.t("modals.noteTypeDetails.mutationResponse.errors.incorrectName");
  }
  if (code === ScriptNoteTypeErrorCode.DUPLICATED_NAME) {
    message = isScriptType
      ? i18n.t("modals.scriptDetails.mutationResponse.errors.duplicatedName")
      : i18n.t("modals.noteTypeDetails.mutationResponse.errors.duplicatedName");
  }
  if (code === ScriptNoteTypeErrorCode.LONG_CONTENT && isScriptType) {
    message = i18n.t("modals.scriptDetails.mutationResponse.errors.longScriptContent");
  }

  return message;
};

export { getErrorMessage, isInvalidRule, isInvalidNoteTypeContent, isOrgEmrIntegrated, reorder };
