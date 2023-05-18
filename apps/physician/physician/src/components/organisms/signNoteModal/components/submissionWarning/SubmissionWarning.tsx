import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Header, Modal } from "@suki-web/suki-ui";

import { SUBMISSION_WARNING } from "../../../../../constants";
import { StyledButton, StyledModal } from "./submissionWarning.styled";

type SubmissionWarningProps = {
  closeModal: VoidFunction;
  saveUnfinishedNote: VoidFunction;
  warningType: string;
};

const SubmissionWarning: FunctionComponent<SubmissionWarningProps> = ({
  closeModal,
  saveUnfinishedNote,
  warningType
}) => {
  const { t } = useTranslation();
  let title;

  if (warningType === SUBMISSION_WARNING.NO_LAB_RESULTS) {
    title = t("modals.signNoteModal.noLabResults.title");
  }
  if (warningType === SUBMISSION_WARNING.NO_VALID_OB_EPISODE) {
    title = t("modals.signNoteModal.noValidObEpisode.title");
  }

  const buttonProps = {
    end: { text: t("modals.signNoteModal.submissionWarning.saveToUnfinishedButton"), onClick: saveUnfinishedNote },
    hasCloseBtn: true,
    start: { text: t("modals.signNoteModal.submissionWarning.cancelButton"), onClick: closeModal }
  };

  return (
    <StyledModal
      data-cy="no-encounter-modal"
      hasCloseButton={false}
      height="auto"
      onClose={closeModal}
      position="mc"
      width="auto"
    >
      <Header level="h6">{title}</Header>
      <div>
        <StyledButton {...buttonProps.start} />
        <StyledButton {...buttonProps.end} />
      </div>
    </StyledModal>
  );
};

export default SubmissionWarning;

export { SubmissionWarning };
