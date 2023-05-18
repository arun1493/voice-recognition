import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalContent, ModalHeader, ScreenSize, Text, useBreakpoint } from "@suki-web/suki-ui";

import { selectEmrData } from "../../../redux/emr";
import { modalsActions } from "../../../redux/modals";
import { handleEmrRedirection } from "../../../helpers";
import { EmrModalContent, StyledEmrLink, StyledLinksContainer } from "./emrSignIn.styled";

const EmrSignIn: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const breakPoint = useBreakpoint();
  const isXXSScreen = breakPoint === ScreenSize.XXS;
  const emrIntegrationDetails = useSelector(selectEmrData);

  const handleClose = () => {
    dispatch(modalsActions.hideEmrSignInModal());
  };

  const handleRedirectToEpic = () => {
    handleEmrRedirection(emrIntegrationDetails);
    dispatch(modalsActions.hideEmrSignInModal());
  };

  return (
    <Modal onClose={handleClose} position="mc">
      <ModalHeader height={52} title={t("modals.emrSignIn.title")} verticalAlignment="center" />
      <ModalContent>
        <EmrModalContent>
          <Text>{t("modals.emrSignIn.message")}</Text>
          <StyledLinksContainer>
            <StyledEmrLink isXXSScreen={isXXSScreen} onClick={handleClose}>
              {t("modals.emrSignIn.skip")}
            </StyledEmrLink>
            <StyledEmrLink isXXSScreen={isXXSScreen} onClick={handleRedirectToEpic}>
              {t("modals.emrSignIn.ok")}
            </StyledEmrLink>
          </StyledLinksContainer>
        </EmrModalContent>
      </ModalContent>
    </Modal>
  );
};

export { EmrSignIn };

export default EmrSignIn;
