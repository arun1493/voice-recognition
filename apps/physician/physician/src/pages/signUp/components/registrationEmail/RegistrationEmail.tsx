import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Icon, ScreenSize, Text, useBreakpointIncludes } from "@suki-web/suki-ui";

import {
  StyledHeader,
  StyledRegistrationEmail,
  StyledReRequestEmail,
  StyledText,
  StyledTextQuestion
} from "./registrationEmail.styled";
import { TOAST_TYPES } from "../../../../constants";
import { toastsActions } from "../../../../redux/toast";

type RegistrationEmailProps = {
  email: string;
  onRequestAnotherEmail: () => void;
};

const RegistrationEmail: FunctionComponent<RegistrationEmailProps> = ({ email, onRequestAnotherEmail }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isXXSmallScreen = useBreakpointIncludes(ScreenSize.XXS);

  const requestAnotherEmail = () => {
    const title = t("pages.signUp.registrationEmail.successTip") + " " + email;
    dispatch(toastsActions.add({ title, type: TOAST_TYPES.SECONDARY_CONFIRMATION }));
    onRequestAnotherEmail();
  };

  return (
    <StyledRegistrationEmail>
      <Icon height="54" icon="email" width="64" />
      <StyledHeader level={isXXSmallScreen ? "h4" : "h3"}>
        {t("pages.signUp.registrationEmail.almostDone")}
      </StyledHeader>
      <Text size={isXXSmallScreen ? "md" : "lg"}>{t("pages.signUp.registrationEmail.checkEmail")}</Text>
      <StyledTextQuestion size="md">{t("pages.signUp.registrationEmail.didn'tGetEmail")}</StyledTextQuestion>
      <StyledText size="sm">{t("pages.signUp.registrationEmail.checkSpam")}</StyledText>
      <StyledReRequestEmail onClick={requestAnotherEmail}>
        {t("pages.signUp.registrationEmail.requestLink")}
      </StyledReRequestEmail>
    </StyledRegistrationEmail>
  );
};

export default RegistrationEmail;

export { RegistrationEmail };
