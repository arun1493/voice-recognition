import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Modal, ScreenSize, Text, useBreakpoint } from "@suki-web/suki-ui";

import { StyledButton, StyledMissingICDCodes, StyledTitle } from "./missingICDCodes.styled";

type MissingICDCodesProps = {
  closeModal: VoidFunction;
  showConfirmCodesModal: VoidFunction;
  setInitialStepAndIgnoreMissingICDCodes: VoidFunction;
};

const MissingICDCodes: FunctionComponent<MissingICDCodesProps> = ({
  closeModal,
  showConfirmCodesModal,
  setInitialStepAndIgnoreMissingICDCodes
}) => {
  const { t } = useTranslation();
  const breakpoint = useBreakpoint();
  const isXXSScreen = breakpoint === ScreenSize.XXS;

  const headerLevel = isXXSScreen ? "h6" : "h5";
  const modalWidth = isXXSScreen ? 328 : 384;
  const textSize = isXXSScreen ? "lg" : "xl";
  const buttonWidth = `${isXXSScreen ? 296 : 352}px`;

  return (
    <Modal onClose={closeModal} position="mc" width={modalWidth}>
      <StyledMissingICDCodes>
        <StyledTitle level={headerLevel}>{t("modals.signNoteModal.missingICDCodes.title1")}</StyledTitle>
        <StyledTitle level={headerLevel}>{t("modals.signNoteModal.missingICDCodes.title2")}</StyledTitle>
        <StyledButton height="48px" isPrimary={true} onClick={showConfirmCodesModal} width={buttonWidth}>
          <Text size={textSize}>{t("modals.signNoteModal.missingICDCodes.addMoreCodes")}</Text>
        </StyledButton>
        <StyledButton height="48px" onClick={setInitialStepAndIgnoreMissingICDCodes} width={buttonWidth}>
          <Text size={textSize}>{t("modals.signNoteModal.missingICDCodes.skip")}</Text>
        </StyledButton>
      </StyledMissingICDCodes>
    </Modal>
  );
};

export default MissingICDCodes;

export { MissingICDCodes };
