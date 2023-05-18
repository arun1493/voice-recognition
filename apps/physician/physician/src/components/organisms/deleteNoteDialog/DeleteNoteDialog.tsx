import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, Text } from "@suki-web/suki-ui";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { queryClient } from "../../../app";
import { deleteComposition } from "../../../api";
import { useNavigatorOnline } from "../../../hooks";
import { toastsActions } from "../../../redux/toast";
import { modalsActions } from "../../../redux/modals";
import { QUERY_NAMES, TOAST_TYPES } from "../../../constants";
import { selectCurrentComposition } from "../../../redux/note";
import { compositionReader, metadataReader } from "../../../readers";
import { handleNavigateBackFromNote as navigateOnDelete } from "../../../helpers";

const DeleteNoteDialog: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { isOffline } = useNavigatorOnline();

  const composition = useSelector(selectCurrentComposition);
  const compositionId = compositionReader.compositionId(composition);
  const metadata = compositionReader.metadata(composition);
  const patient = metadataReader.patient(metadata);

  const mutation = useMutation(deleteComposition, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_NAMES.UNFINISHED_NOTES]);
      navigateOnDelete(location, navigate, patient);
    }
  });

  const handleCloseDialog = () => {
    dispatch(modalsActions.hideDeleteNoteModal());
  };

  const handleDeleteNote = () => {
    if (isOffline) {
      dispatch(toastsActions.add({ message: t("errors.s2.deleteNote"), type: TOAST_TYPES.ERROR }));
    } else {
      mutation.mutate(compositionId);
      handleCloseDialog();
    }
  };

  const buttonProps = {
    end: { onClick: handleDeleteNote, text: t("modals.deleteModal.button.delete") },
    start: { onClick: handleCloseDialog, text: t("modals.deleteModal.button.cancel") }
  };

  return (
    <Dialog buttonProps={buttonProps} isOpen={true} key="delete-notes-modal" onClose={handleCloseDialog}>
      <Text>{t("modals.deleteModal.deleteNoteTitle")}</Text>
    </Dialog>
  );
};

export { DeleteNoteDialog };

export default DeleteNoteDialog;
