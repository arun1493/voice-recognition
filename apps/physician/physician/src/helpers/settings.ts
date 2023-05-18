import { darkTheme, lightTheme, ThemeProvider } from "@suki-web/suki-ui";

import { Theme } from "../constants";

const getTheme = (theme: Theme, isSystemDarkTheme: boolean): ThemeProvider => {
  if (theme === Theme.AUTO) {
    return isSystemDarkTheme ? darkTheme : lightTheme;
  }

  return theme === Theme.DARK ? darkTheme : lightTheme;
};

export { getTheme };
