import store from "store2";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Icon, Text, TextField } from "@suki-web/suki-ui";
import { FunctionComponent, useEffect, useState } from "react";
import { EMPTY_OBJECT, isEmailValid, Paths } from "@suki-web/suki-business";

import {
  StyledForgotPasswordContainer,
  StyledForgotPasswordLink,
  StyledLoginButtons,
  StyledLoginContent,
  StyledSukiButton
} from "./minimalLogin.styled";
import { logger, login as loginApi } from "../../../api";
import { passwordActions } from "../../../redux/password";
import { KeyboardKeys, LOCAL_STORE } from "../../../constants";

const MinimalLogin: FunctionComponent = () => {
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
    window.addEventListener(KeyboardKeys.Keyup, handleEnterKeyup);
    return () => window.removeEventListener(KeyboardKeys.Keyup, handleEnterKeyup);
  });

  const handleEnterKeyup = (e: KeyboardEvent): void => {
    const isValid = password.length > 1 && isEmailValid(email) && e.key === KeyboardKeys.Enter;
    if (isValid) {
      onLoginClick();
    }
  };

  const renderLoadingIcon = () => {
    return <Icon data-cy="loader-icon" icon="loader" size="md" />;
  };

  return (
    <StyledLoginContent>
      <StyledLoginButtons>
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
      </StyledLoginButtons>

      <StyledForgotPasswordContainer>
        <StyledForgotPasswordLink
          data-cy="login-form-link-forgot-password"
          onClick={setUserEmail}
          to={Paths.ForgotPassword}
        >
          <Text size="sm">{t("pages.login.forgotPassword")}</Text>
        </StyledForgotPasswordLink>
      </StyledForgotPasswordContainer>
      <StyledSukiButton
        className="button"
        onClick={onLoginClick}
        size="lg"
        {...(isLoginInProgress ? { startIcon: renderLoadingIcon() } : EMPTY_OBJECT)}
        variant="contained"
      >
        {isLoginInProgress ? t("pages.login.loginInProgressText") : t("pages.login.button")}
      </StyledSukiButton>
    </StyledLoginContent>
  );
};

export default MinimalLogin;

export { MinimalLogin };
