import _isNil from "lodash/isNil";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Security } from "@okta/okta-react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "@suki-web/suki-ui";
import { ThemeProvider } from "styled-components";
import { toRelativeUrl } from "@okta/okta-auth-js";
import { OktaAuth } from "@okta/okta-auth-js/lib/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./app.css";
import { Routes } from "../routes";
import { oktaAuth } from "../config";
import { getTheme } from "../helpers";
import { getRoute } from "../helpers";
import { Pages, Theme } from "../constants";
import { withEmbedAuth } from "../hocs/embed"; // I had to import it seperately, as test's are failing, please read this https://stackoverflow.com/questions/51626311/hoc-import-typeerror-object-is-not-a-function
import { selectTheme } from "../redux/settings";
import { useSystemDarkThemeDetector } from "../hooks";
import { ModalManager } from "../components/templates";
import { withAnalytics, withBrowserSupport, withIntercom } from "../hocs";
import { NetworkConnectivity, SukiAgent, ToastContainer } from "../components/molecules";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 30000
    }
  }
});

declare global {
  interface Window {
    Intercom: (...args: any[]) => void;
    pendo?: any;
  }
}

const App: FunctionComponent = () => {
  const navigate = useNavigate();
  const themeState: Theme = useSelector(selectTheme);
  const isSystemDarkTheme = useSystemDarkThemeDetector();

  const theme = getTheme(themeState, isSystemDarkTheme);

  const restoreOriginalUri = async (_oktaAuth: OktaAuth, originalUri: string) => {
    navigate(toRelativeUrl(originalUri || "/", window.location.origin), { replace: true });
  };

  const onAuthRequired = () => {
    const loginRoute = getRoute(Pages.Login);
    loginRoute && navigate(loginRoute);
  };

  return (
    <Security oktaAuth={oktaAuth} onAuthRequired={onAuthRequired} restoreOriginalUri={restoreOriginalUri}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <NetworkConnectivity />
          <ModalManager />
          <ToastContainer />
          <SukiAgent />
          <Routes />
        </QueryClientProvider>
      </ThemeProvider>
    </Security>
  );
};

export { queryClient };

// const appWithBrowserSupported = !_isNil(process.env.JEST_WORKER_ID) ? App : withBrowserSupport(App);

const appWithEmbedAuth = withEmbedAuth(App);

export default withAnalytics(withIntercom(appWithEmbedAuth));
