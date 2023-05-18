import _some from "lodash/some";
import { UAParser } from "ua-parser-js";
import { Paths } from "@suki-web/suki-business";
import { FunctionComponent, useEffect, useState } from "react";

import { getRoute } from "../helpers";
import { DEVICE_TYPES, Pages, SUPPORTED_BROWSERS } from "../constants";

function isSupportedBrowser(browserName: string, version: number | string): boolean {
  if (!(browserName in SUPPORTED_BROWSERS)) return false;
  if (typeof version === "string") {
    version = Number.parseInt(version);
  }

  return version >= SUPPORTED_BROWSERS[browserName];
}

function redirectUnsupportedBrowser(): void {
  const redirectRoute = getRoute(Pages.UnSupportedDeviceOrBrowser);
  if (redirectRoute) {
    window.location.href = redirectRoute;
  }
}

function getDeviceType() {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return DEVICE_TYPES.tablet;
  }
  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return DEVICE_TYPES.mobile;
  }
  return DEVICE_TYPES.desktop;
}

function isDesktop() {
  return getDeviceType() === DEVICE_TYPES.desktop;
}

function withBrowserSupport(WrappedComponent: FunctionComponent) {
  return () => {
    const [isBrowserSupported, setIsBrowserSupported] = useState<boolean>(false);

    const UNSUPPORTED_ROUTES: string[] = [
      Paths.AltaisEntry,
      Paths.Authentication,
      Paths.Embed,
      Paths.ForgotPassword,
      Paths.Help,
      Paths.Home,
      Paths.ImplicitCallback,
      Paths.IntroPage,
      Paths.Login,
      Paths.Patients,
      Paths.ScheduleImport,
      Paths.Settings,
      Paths.Settings,
      Paths.UnfinishedNotes,
      Paths.WindowsUpdate
    ];

    const isCurrentRouteUnSupported = (route: string) => {
      return window.location.pathname.includes(route);
    };

    const isUnsupportedRoute = _some(UNSUPPORTED_ROUTES, isCurrentRouteUnSupported);

    useEffect(() => {
      const parser = new UAParser();
      const browserInformation = parser.getBrowser();

      if (
        !isSupportedBrowser(browserInformation.name as string, browserInformation.version as string) ||
        (!isDesktop() && (isUnsupportedRoute || window.location.pathname === Paths.Root))
      ) {
        return redirectUnsupportedBrowser();
      }

      setIsBrowserSupported(true);
    }, []);

    return isBrowserSupported ? <WrappedComponent /> : null;
  };
}

export { withBrowserSupport };
