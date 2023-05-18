import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Icon, ICON_COLORS, Modal, ScreenSize, Text, useBreakpoint } from "@suki-web/suki-ui";

import { TermsCaption } from "../termsCaption";
import { StyledModal, StyledSignNoteHeader } from "../../signNoteModal.styled";
import { StyledButton, StyledOrText, StyledSecondaryButton } from "./initialOrSubmitModal.styled";

type InitialOrSubmitModalProps = {
  closeModal: VoidFunction;
  hasEnhancedReview: boolean;
  isInitial: boolean;
  isSendNoteToEmrAvailable: boolean;
  isSubmittingInProgress: boolean;
  saveToEnhancedReview: VoidFunction;
  submitNote: VoidFunction;
};

const InitialOrSubmitModal: FunctionComponent<InitialOrSubmitModalProps> = ({
  closeModal,
  hasEnhancedReview,
  isInitial,
  isSendNoteToEmrAvailable,
  isSubmittingInProgress,
  saveToEnhancedReview,
  submitNote
}) => {
  const { t } = useTranslation();
  const breakpoint = useBreakpoint();
  const isXXSScreen = breakpoint === ScreenSize.XXS;

  const getTitleText = () => {
    if (isSendNoteToEmrAvailable) return t("modals.signNoteModal.initialAthena.title");
    if (isInitial) {
      return hasEnhancedReview
        ? t("modals.signNoteModal.initial.titleWithEnhancedReview")
        : t("modals.signNoteModal.initial.title");
    }
    return hasEnhancedReview
      ? t("modals.signNoteModal.submit.titleWithEnhancedReview")
      : t("modals.signNoteModal.submit.title");
  };

  const getButtonText = () => {
    if (isSendNoteToEmrAvailable) return t("modals.signNoteModal.initialAthena.buttonText");
    if (isInitial) return t("modals.signNoteModal.initial.buttonText");
    return t("modals.signNoteModal.submit.buttonText");
  };

  const modalWidth = isXXSScreen ? 328 : 384;
  const buttonWidth = `${isXXSScreen ? 296 : 320}px`;

  return (
    <Modal onClose={closeModal} position="mc" testId="initial-or-submit-modal" width={modalWidth}>
      <StyledModal>
        <StyledSignNoteHeader level="h5">{getTitleText()}</StyledSignNoteHeader>
        <StyledButton
          isDisabled={isSubmittingInProgress}
          isInitial={isInitial}
          isPrimary={true}
          isXXSScreen={isXXSScreen}
          onClick={submitNote}
          width={buttonWidth}
        >
          {isSubmittingInProgress && <Icon color={ICON_COLORS.white} icon="loader" size="md" />}
          {!isSubmittingInProgress && (
            <Icon color={ICON_COLORS.white} icon={isInitial ? "listSignNote" : "listSignNoteRight"} size="xs" />
          )}
          <Text color="white" size="xl">
            {getButtonText()}
          </Text>
        </StyledButton>
        {hasEnhancedReview && isInitial && (
          <>
            <StyledOrText>{t("modals.signNoteModal.initial.orText")}</StyledOrText>
            <StyledSecondaryButton isXXSScreen={isXXSScreen} onClick={saveToEnhancedReview} width={buttonWidth}>
              <Text color="inherit" size="xl">
                {t("modals.signNoteModal.initial.enhancedReview")}
              </Text>
            </StyledSecondaryButton>
          </>
        )}
        {!isSendNoteToEmrAvailable && <TermsCaption />}
      </StyledModal>
    </Modal>
  );
};

export default InitialOrSubmitModal;

export { InitialOrSubmitModal };
