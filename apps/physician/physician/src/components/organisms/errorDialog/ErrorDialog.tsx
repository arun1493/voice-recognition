import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Dialog, Text } from "@suki-web/suki-ui";
import { useDispatch, useSelector } from "react-redux";

import { ErrorDialogs } from "../../../constants";
import { settingsActions } from "../../../redux/settings";
import { getModalsState, modalsActions } from "../../../redux/modals";

const ErrorDialog: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { errorDialog } = useSelector(getModalsState);

  const handleCloseDialog = () => {
    dispatch(modalsActions.hideNoteTypeErrorModal());
  };

  const handleNavigateBack = () => {
    handleCloseDialog();
    if (errorDialog.isAddNew) {
      navigate(-1);
      return;
    }
    dispatch(settingsActions.setEditMode(false));
  };

  if (errorDialog.type === ErrorDialogs.INVALID_NAME) {
    const buttonProps = {
      hasCloseBtn: false,
      start: { onClick: handleCloseDialog, text: t("modals.noteTypeDetails.ok") }
    };

    let title = t("modals.noteTypeDetails.mutationResponse.errors.invalidName");
    if (errorDialog.isScriptType) {
      title = t("modals.scriptDetails.mutationResponse.errors.invalidName");
    }

    return (
      <Dialog buttonProps={buttonProps} isOpen={true} key="error-dialog-note-type-name" onClose={handleCloseDialog}>
        <Text>{title}</Text>
      </Dialog>
    );
  }

  if (errorDialog.type === ErrorDialogs.UNSAVED_CHANGES) {
    const buttonProps = {
      end: { onClick: handleNavigateBack, text: t("modals.noteTypeDetails.yes") },
      hasCloseBtn: false,
      start: { onClick: handleCloseDialog, text: t("modals.noteTypeDetails.no") }
    };

    return (
      <Dialog
        buttonProps={buttonProps}
        isOpen={true}
        key="error-dialog-note-type-unsaved-changes"
        onClose={handleCloseDialog}
      >
        <Text>{t("modals.noteTypeDetails.mutationResponse.errors.unsavedChanges")}</Text>
      </Dialog>
    );
  }

  return null;
};

export { ErrorDialog };

export default ErrorDialog;
