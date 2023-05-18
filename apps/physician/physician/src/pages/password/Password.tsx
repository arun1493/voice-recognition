import _get from "lodash/get";
import {
  EMPTY_OBJECT,
  PasswordRegistrationPayload,
  RegistrationDetail,
  RegistrationVerificationTokenPayload
} from "@suki-web/suki-business";
import _isEmpty from "lodash/isEmpty";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useIntercom } from "react-use-intercom";
import { FunctionComponent, useEffect, useState } from "react";
import { Icon, ScreenSize, Text, useBreakpointIncludes } from "@suki-web/suki-ui";

import {
  StyledButton,
  StyledContainer,
  StyledContent,
  StyledFormInput,
  StyledHeader,
  StyledIcon,
  StyledPage,
  StyledPageCenter,
  StyledSeparator,
  StyledText,
  StyledTitle,
  StyledToastIcon
} from "./password.styled";
import { getRoute } from "../../helpers";
import { toastsActions } from "../../redux/toast";
import { SukiLogoR } from "../../components/atoms";
import { registrationReader } from "../../readers";
import { isPasswordContainsPartOfEmail, PASSWORD_REGEX } from "./password.helpers";
import { EMPTY_STRING, Pages, SignUpBackEndErrorCodes, TOAST_TYPES } from "../../constants";
import { createPassword, getRegistrationDetails, validateRegistrationVerificationToken } from "../../api";

const Password: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { show: showIntercom } = useIntercom();
  const isXXSScreen = useBreakpointIncludes(ScreenSize.XXS);
  const isLargeScreen = useBreakpointIncludes(ScreenSize.SM, ScreenSize.MD, ScreenSize.XL);
  const [registrationDetail, setRegistrationDetail] = useState<RegistrationDetail>(EMPTY_OBJECT);
  const [password, setPassword] = useState<string>(EMPTY_STRING);
  const [hasAttemptToSubmit, setHasAttemptToSubmit] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPasswordCreationInProgress, setIsPasswordCreationInProgress] = useState<boolean>(false);
  const [duplicatePassword, setDuplicatePassword] = useState<string>(EMPTY_STRING);

  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email") || EMPTY_STRING;
  const token = urlParams.get("token") || EMPTY_STRING;

  const passwordError = !password.match(PASSWORD_REGEX) || isPasswordContainsPartOfEmail(email, password);

  const isPasswordsEqual = password === duplicatePassword;

  useEffect(() => {
    showIntercom();

    const tokenVerificationPayload: RegistrationVerificationTokenPayload = {
      email,
      token
    };
    Promise.all([getRegistrationDetails(email), validateRegistrationVerificationToken(tokenVerificationPayload)])
      .then(([registrationDetails]) => {
        const registrationDetail = _get(registrationDetails, "data.registrations.0");
        if (!_isEmpty(registrationDetails)) {
          setRegistrationDetail(registrationDetail);
        }
      })
      .catch((error) => {
        const code = _get(error, "response.data.error.code");
        if (code === SignUpBackEndErrorCodes.EMAIL) {
          const errorTip = t("pages.password.error.alreadyExists");
          dispatch(toastsActions.add({ title: errorTip, type: TOAST_TYPES.ERROR }));
          const loginRoute = getRoute(Pages.Login);
          if (loginRoute) {
            navigate(loginRoute);
          }
        } else {
          const errorTip = t("pages.password.error.linkExpired");
          dispatch(toastsActions.add({ title: errorTip, type: TOAST_TYPES.ERROR }));
          const registerRoute = getRoute(Pages.Register);
          if (registerRoute) {
            navigate(registerRoute);
          }
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleCreatePassword = () => {
    setHasAttemptToSubmit(true);

    if (passwordError || !isPasswordsEqual) {
      const title = passwordError
        ? t("pages.password.tipPasswordMessage")
        : t("pages.password.tipDuplicatePasswordMessage");
      dispatch(
        toastsActions.add({
          icon: <StyledToastIcon color="black" icon="exclamation" size="sm" />,
          title,
          type: TOAST_TYPES.ERROR
        })
      );
      return;
    }

    const user = registrationReader.user(registrationDetail);
    const sku = registrationReader.sku(registrationDetail);

    if (user) {
      setIsPasswordCreationInProgress(true);
      const passwordCreationPayload: PasswordRegistrationPayload = {
        password,
        token,
        user
      };
      createPassword(passwordCreationPayload)
        .then(() => {
          const registerSuccessRoute = getRoute(Pages.RegisterSuccess, { sku });
          if (registerSuccessRoute) {
            navigate(registerSuccessRoute);
          }
        })
        .catch(() => {
          dispatch(
            toastsActions.add({
              icon: <StyledToastIcon color="black" icon="exclamation" size="sm" />,
              title: t("pages.password.tipPasswordMessage"),
              type: TOAST_TYPES.ERROR
            })
          );
        })
        .finally(() => setIsPasswordCreationInProgress(false));
    }
  };

  const renderLoadingIcon = () => {
    return <Icon icon="loader" size="md" />;
  };

  if (isLoading) {
    return (
      <StyledPageCenter>
        <Icon icon="loader" size="md" />
      </StyledPageCenter>
    );
  }

  return (
    <StyledPage>
      <StyledHeader>
        <SukiLogoR color={isXXSScreen ? "black" : "white"} />
      </StyledHeader>
      <StyledContainer>
        <StyledTitle level={isLargeScreen ? "h5" : "h6"}>{t("pages.password.title")}</StyledTitle>
        <StyledContent>
          <StyledIcon icon="password" size="md" />
          <div>
            <StyledFormInput
              hasError={passwordError && hasAttemptToSubmit}
              height="40px"
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("pages.password.placeholder1")}
              type="password"
              value={password}
            />
            <StyledText isBold={true}>{t("pages.password.requirements")}</StyledText>
            <ul>
              <li>{t("pages.password.requirement1")}</li>
              <li>{t("pages.password.requirement2")}</li>
              <li>{t("pages.password.requirement3")}</li>
              <li>{t("pages.password.requirement4")}</li>
              <li>{t("pages.password.requirement5")}</li>
            </ul>
            <StyledFormInput
              hasError={!isPasswordsEqual && hasAttemptToSubmit}
              height="40px"
              onChange={(e) => setDuplicatePassword(e.target.value)}
              placeholder={t("pages.password.placeholder2")}
              type="password"
              value={duplicatePassword}
            />
          </div>
        </StyledContent>
        <StyledSeparator />
        <StyledButton
          height={isXXSScreen ? "48px" : "56px"}
          onClick={handleCreatePassword}
          {...(isPasswordCreationInProgress ? { startIcon: renderLoadingIcon() } : EMPTY_OBJECT)}
        >
          <Text size={isXXSScreen ? "lg" : "xl"}>
            {isPasswordCreationInProgress ? t("pages.password.activating") : t("pages.password.submit")}
          </Text>
        </StyledButton>
      </StyledContainer>
    </StyledPage>
  );
};

export { Password };

export default Password;
