import _get from "lodash/get";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { FunctionComponent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Icon, ScreenSize, Text, useBreakpointIncludes } from "@suki-web/suki-ui";
import { GrpcErrorCodes, VerificationEmailPayload } from "@suki-web/suki-business";

import {
  StyledContainer,
  StyledHeader,
  StyledRegistrationEmail,
  StyledReRequestEmail,
  StyledText,
  StyledTextQuestion,
  StyledTitle
} from "./paymentSuccess.styled";
import { getRoute } from "../../helpers";
import { toastsActions } from "../../redux/toast";
import { sendVerificationEmail } from "../../api";
import { SukiLogoR } from "../../components/atoms";
import { Pages, TOAST_TYPES } from "../../constants";

const PaymentSuccess: FunctionComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isXXSmallScreen = useBreakpointIncludes(ScreenSize.XXS);
  const { registrationId = "" } = useParams<{ registrationId: string }>();
  const verificationEmailPayload: VerificationEmailPayload = {
    registrationId
  };

  useEffect(() => {
    sendVerificationEmail(verificationEmailPayload);
  }, []);

  const requestVerificationEmail = async () => {
    try {
      await sendVerificationEmail(verificationEmailPayload);
      const title = t("pages.signUp.registrationEmail.successTip");
      dispatch(toastsActions.add({ title, type: TOAST_TYPES.SECONDARY_CONFIRMATION }));
    } catch (error: any) {
      const errorCode = _get(error, "response.data.details.code");
      if (errorCode === GrpcErrorCodes.ALREADY_REGISTERED_USER) {
        const title = t("pages.signUp.registrationEmail.alreadyRegistered");
        dispatch(toastsActions.add({ title, type: TOAST_TYPES.ERROR }));
        const loginRoute = getRoute(Pages.Login);
        if (loginRoute) {
          navigate(loginRoute);
        }
      }
      console.log(error);
    }
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <SukiLogoR />
      </StyledHeader>
      <StyledRegistrationEmail>
        <Icon height="54" icon="email" width="64" />
        <StyledTitle level={isXXSmallScreen ? "h4" : "h3"}>
          {t("pages.signUp.registrationEmail.almostDone")}
        </StyledTitle>
        <Text size={isXXSmallScreen ? "md" : "lg"}>{t("pages.signUp.registrationEmail.checkEmail")}</Text>
        <StyledTextQuestion size="md">{t("pages.signUp.registrationEmail.didn'tGetEmail")}</StyledTextQuestion>
        <StyledText size="sm">{t("pages.signUp.registrationEmail.checkSpam")}</StyledText>
        <StyledReRequestEmail onClick={requestVerificationEmail}>
          {t("pages.signUp.registrationEmail.requestLink")}
        </StyledReRequestEmail>
      </StyledRegistrationEmail>
    </StyledContainer>
  );
};

export { PaymentSuccess };
export default PaymentSuccess;
