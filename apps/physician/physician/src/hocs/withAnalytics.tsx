import { useLocation } from "react-router-dom";
import { FunctionComponent, useEffect } from "react";
import ReactGA, { FieldsObject, InitializeOptions } from "react-ga";

import { isDevelopmentEnvironment } from "../helpers/environment";

const ANALYTICS_TRACKING_ID = "UA-100205469-2";

const initializeAnalytics = (options: InitializeOptions = {}) => {
  ReactGA.initialize(ANALYTICS_TRACKING_ID, {
    debug: isDevelopmentEnvironment(),
    ...options
  });
};

function withAnalytics(WrappedComponent: FunctionComponent, options: FieldsObject = {}): FunctionComponent {
  return () => {
    const location = useLocation();

    const trackPage = () => {
      ReactGA.set({
        page: location.pathname,
        // TODO: Get userId from Redux
        userId: undefined,
        ...options
      });

      ReactGA.pageview(location.pathname);
    };

    useEffect(() => {
      trackPage();
    }, [location.pathname]);

    return <WrappedComponent />;
  };
}

export { initializeAnalytics, withAnalytics };
