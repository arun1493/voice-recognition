import store from "store2";
import { Icon, Text } from "@suki-web/suki-ui";
import { useTranslation } from "react-i18next";
import { FunctionComponent, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { login } from "../../api";
import { getRoute } from "../../helpers";
import { LOCAL_STORE, Pages } from "../../constants";
import { StyledContainer, StyledContent } from "./auth.styled";

const AUTH_TOKEN_PARAMETER_KEY = "token";

type AuthCredentials = {
  username: string;
  password: string;
};

const Auth: FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = searchParams.get(AUTH_TOKEN_PARAMETER_KEY) || "";
    searchParams.delete(AUTH_TOKEN_PARAMETER_KEY);
    setSearchParams(searchParams);
    validateCredentials(authToken);
  }, []);

  const validateCredentials = async (authToken: string) => {
    try {
      const decodedAuthToken = window.atob(authToken);
      const userCredentials: AuthCredentials = JSON.parse(decodedAuthToken);
      const { username, password } = userCredentials;
      store.set(LOCAL_STORE.LEGACY_REDIRECT, true);
      await login(password, username);
    } catch (error) {
      const loginRoute = getRoute(Pages.Login);
      navigate(loginRoute);
    }
  };

  return (
    <StyledContainer>
      <StyledContent>
        <Icon data-cy="loader-icon" icon="loader" size="lg" />
        <Text size="md">{t("pages.auth.redirect.loading")}</Text>
      </StyledContent>
    </StyledContainer>
  );
};

export { Auth };
export default Auth;
