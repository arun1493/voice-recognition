import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { isEmailValid, Paths } from "@suki-web/suki-business";
import { batch, useDispatch, useSelector } from "react-redux";
import { FunctionComponent, useEffect, useState } from "react";
import { Icon, Page, SukiButton, Text, TextField, Typography } from "@suki-web/suki-ui";

import { getRoute } from "../../helpers";
import { AppDispatch } from "../../redux/store";
import { LoadingStatus, Pages, LOADING_STATUSES as STATUSES } from "../../constants";
import { passwordActions, resetPassword, selectLoadingStatus, selectUserEmail } from "../../redux/password";
import { StyledCancelButton, StyledForgotPasswordContainer, SukiEmailFieldWrapper } from "./forgotPassword.styled";

const ForgotPassword: FunctionComponent = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const userEmail: string = useSelector(selectUserEmail);
  const loadingStatus: LoadingStatus = useSelector(selectLoadingStatus);
  const loginRoute = getRoute(Pages.Login);

  const [email, setEmail] = useState<string>(userEmail);
  const [isDisabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    const isInvalidEmail = !isEmailValid(email);
    setDisabled(isInvalidEmail);
  }, [email]);

  useEffect(() => {
    if (loadingStatus === STATUSES.LOADING) {
      setDisabled(true);
    }

    if (loadingStatus === STATUSES.ERROR || loadingStatus === STATUSES.LOADED) {
      dispatch(passwordActions.resetStatus());
      const loginRoute = getRoute(Pages.Login);
      loginRoute && navigate(loginRoute);
    }
  }, [loadingStatus]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleResetButtonClick = () => {
    loginRoute && navigate(loginRoute);
    batch(() => {
      dispatch(resetPassword(email));
      dispatch(passwordActions.remove());
    });
  };

  const handleCancelButtonClick = () => {
    loginRoute && navigate(loginRoute);
  };

  return (
    <Page>
      <StyledForgotPasswordContainer>
        <Typography variant="h5">{t("pages.forgotPassword.heading")}</Typography>
        <Typography variant="body1">{t("pages.forgotPassword.message")}</Typography>
        <SukiEmailFieldWrapper>
          <TextField
            autoFocus={true}
            isFullWidth={true}
            onChange={onChange}
            placeholder={t("pages.forgotPassword.input.placeholder")}
            type="email"
            value={email}
          />
        </SukiEmailFieldWrapper>
        <SukiButton
          disabled={isDisabled}
          isFullWidth={true}
          onClick={handleResetButtonClick}
          size="lg"
          variant="contained"
          width="312px"
        >
          {loadingStatus === STATUSES.LOADING ? (
            <Icon icon="loader" size="md" />
          ) : (
            t("pages.forgotPassword.buttons.reset")
          )}
        </SukiButton>
        <StyledCancelButton>
          <SukiButton
            disabled={false}
            isFullWidth={true}
            onClick={handleCancelButtonClick}
            size="lg"
            variant="buttonText"
            width="312px"
          >
            <Text cursor="pointer" size="md">
              {t("pages.forgotPassword.buttons.cancel")}
            </Text>
          </SukiButton>
        </StyledCancelButton>
      </StyledForgotPasswordContainer>
    </Page>
  );
};

export { ForgotPassword };

export default ForgotPassword;
