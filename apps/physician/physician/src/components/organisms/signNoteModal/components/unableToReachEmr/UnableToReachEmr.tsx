import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { ScreenSize, Text, useBreakpoint } from "@suki-web/suki-ui";

import { StyledSignNoteHeader } from "../../signNoteModal.styled";
import { StyledButtonWrapper, StyledModal, StyledOkButton } from "./unableToReachEmr.styled";

type UnableToReachEmrProps = {
  closeModal: VoidFunction;
};

const UnableToReachEmr: FunctionComponent<UnableToReachEmrProps> = ({ closeModal }) => {
  const { t } = useTranslation();
  const breakpoint = useBreakpoint();
  const isXXSScreen = breakpoint === ScreenSize.XXS;
  const headerLevel = isXXSScreen ? "h6" : "h5";
  const width = isXXSScreen ? 344 : 416;

  const buttonProps = {
    end: { text: t("modals.signNoteModal.unableToReachEmr.okButton"), onClick: closeModal },
    hasCloseBtn: true
  };

  return (
    <StyledModal hasCloseButton={false} height="auto" onClose={closeModal} position="mc" width={width}>
      <StyledSignNoteHeader level={headerLevel}>
        {t("modals.signNoteModal.unableToReachEmr.title")}
      </StyledSignNoteHeader>
      <Text size="md">{t("modals.signNoteModal.unableToReachEmr.text")}</Text>
      <StyledButtonWrapper>
        <StyledOkButton {...buttonProps.end} />
      </StyledButtonWrapper>
    </StyledModal>
  );
};

export default UnableToReachEmr;

export { UnableToReachEmr };
