import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Icon, Modal, ModalContent, ModalHeader, Text } from "@suki-web/suki-ui";

import { modalsActions } from "../../../redux/modals";
import { ContentContainer, LoaderContainer, MessageContainer } from "./noteRefresh.styled";

const NoteRefresh: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleClose = () => {
    dispatch(modalsActions.hideNoteRefreshModal());
  };

  return (
    <Modal height="auto" onClose={handleClose} position="mc">
      <ModalHeader height={52} title={t("modals.noteRefresh.title")} verticalAlignment="top" />
      <ModalContent height="auto">
        <ContentContainer>
          <MessageContainer>
            <Text>{t("modals.noteRefresh.message")}</Text>
          </MessageContainer>
          <LoaderContainer>
            <Icon icon="loader" size="lg" />
          </LoaderContainer>
        </ContentContainer>
      </ModalContent>
    </Modal>
  );
};

export { NoteRefresh };

export default NoteRefresh;
