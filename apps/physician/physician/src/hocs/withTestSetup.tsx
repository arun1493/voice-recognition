import { Provider } from "react-redux";
import { lightTheme } from "@suki-web/suki-ui";
import { render } from "@suki-web/suki-business";
import { ThemeProvider } from "styled-components";
import { FunctionComponent, ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { setupStore } from "../redux/store";

const queryClient = new QueryClient();

const componentSetup =
  (Component: FunctionComponent<any>, defaultProps = {}) =>
  (overriddenProps = {}) =>
    render(
      <Router>
        <ThemeProvider theme={lightTheme}>
          <QueryClientProvider client={queryClient}>
            <Component {...defaultProps} {...overriddenProps} />
          </QueryClientProvider>
        </ThemeProvider>
      </Router>
    );

const componentSetupWithStore =
  (getJSX: (defaultProps: any) => ReactNode) =>
  (overriddenProps = {}, preloadedState = {}) =>
    render(
      <Provider store={setupStore(preloadedState)}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <ThemeProvider theme={lightTheme}>{getJSX(overriddenProps)}</ThemeProvider>
          </Router>
        </QueryClientProvider>
      </Provider>
    );

const componentWithTheme = (Component: FunctionComponent<any>, props = {}) => (
  <ThemeProvider theme={lightTheme}>
    <Component {...props} />
  </ThemeProvider>
);

const componentWithThemeAndStore = (Component: FunctionComponent<any>, props = {}, preloadedState = {}) => (
  <Provider store={setupStore(preloadedState)}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider theme={lightTheme}>
          <Component {...props} />
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  </Provider>
);

export { componentSetup, componentSetupWithStore, componentWithTheme, componentWithThemeAndStore };
