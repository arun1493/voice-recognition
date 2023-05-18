import store from "store2";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { FunctionComponent, useEffect, useState } from "react";
import { Icon, Page, SukiLogoWithText, Text, TextField } from "@suki-web/suki-ui";
import { EMPTY_OBJECT, isEmailValid, Paths, TRY_SUKI_AI_URL } from "@suki-web/suki-business";

import {
  StyledAnchorTag,
  StyledForgotPasswordLink,
  StyledLoginButtonWrapper,
  StyledLoginContent,
  StyledLoginForm,
  StyledSukiButton,
  StyledSukiLogo,
  StyledSukiTextFields
} from "./login.styled";
import { getLegacyBaseUrl } from "../../helpers";
import { toastsActions } from "../../redux/toast";
import { logger, login as loginApi } from "../../api";
import { passwordActions } from "../../redux/password";
import { LOCAL_STORE, TOAST_TYPES } from "../../constants";

const Login: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [hasErrors, setHasErrors] = useState<boolean>(false);
  const [isLoginInProgress, setLoginInProgress] = useState<boolean>(false);

  const onLoginClick = async () => {
    if (isLoginInProgress) {
      return;
    }
    try {
      setLoginInProgress(true);
      await loginApi(password, email);
    } catch (error) {
      logger.error({ message: "Login failed", payload: error });
      setHasErrors(true);
    } finally {
      setLoginInProgress(false);
      store.set(LOCAL_STORE.SCHEDULE_DATE, new Date().getTime());
    }
  };

  const setUserEmail = () => {
    if (isEmailValid(email)) {
      dispatch(passwordActions.add(email));
    }
  };

  useEffect(() => {
    const isOktaTokenExpired = store.get(LOCAL_STORE.OKTA_TOKEN_EXPIRED);

    if (isOktaTokenExpired) {
      store.remove(LOCAL_STORE.OKTA_TOKEN_EXPIRED);
      dispatch(
        toastsActions.add({ hasCloseOnClick: true, message: t("messages.tokenExpired"), type: TOAST_TYPES.INFO })
      );
    }

    const isLegacyRedirect = store.get(LOCAL_STORE.LEGACY_REDIRECT);
    if (isLegacyRedirect) {
      store.remove(LOCAL_STORE.LEGACY_REDIRECT);
      const legacyBaseUrl = getLegacyBaseUrl();
      window.location.href = `${legacyBaseUrl}/logout`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keyup", handleEnterKeyup);
    return () => window.removeEventListener("keyup", handleEnterKeyup);
  });

  const handleEnterKeyup = (e: KeyboardEvent): void => {
    const isValid = password.length > 1 && isEmailValid(email) && e.key === "Enter";
    if (isValid) {
      onLoginClick();
    }
  };

  const renderLoadingIcon = () => {
    return <Icon data-cy="loader-icon" icon="loader" size="md" />;
  };

  return (
    <Page>
      <StyledLoginContent>
        <StyledSukiLogo>
          <SukiLogoWithText />
        </StyledSukiLogo>
        <StyledLoginForm>
          <StyledSukiTextFields>
            <TextField
              autoFocus={true}
              data-cy="login-form-email"
              hasErrors={hasErrors}
              isFullWidth={true}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("pages.login.input.email.placeholder")}
              type="email"
              value={email}
            />
            <TextField
              hasErrors={hasErrors}
              isFullWidth={true}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("pages.login.input.password.placeholder")}
              type="password"
              value={password}
            />
          </StyledSukiTextFields>
          <StyledLoginButtonWrapper>
            <StyledForgotPasswordLink
              data-cy="login-form-link-forgot-password"
              onClick={setUserEmail}
              to={Paths.ForgotPassword}
            >
              <Text cursor="pointer" size="sm">
                {t("pages.login.forgotPassword")}
              </Text>
            </StyledForgotPasswordLink>
            <StyledSukiButton
              className="button"
              onClick={onLoginClick}
              size="lg"
              {...(isLoginInProgress ? { startIcon: renderLoadingIcon() } : EMPTY_OBJECT)}
              variant="contained"
            >
              {isLoginInProgress ? t("pages.login.loginInProgressText") : t("pages.login.button")}
            </StyledSukiButton>
            <Text color="blackGray">
              {t("pages.login.accountText")}
              <StyledAnchorTag href={TRY_SUKI_AI_URL}>{t("pages.login.register")}</StyledAnchorTag>
            </Text>
          </StyledLoginButtonWrapper>
        </StyledLoginForm>
      </StyledLoginContent>
    </Page>
  );
};

export default Login;

export { Login };
