import { useEffect, useState } from "react";

const useSystemDarkThemeDetector = () => {
  const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
  const mqListener = (event: MediaQueryListEvent) => {
    setIsDarkTheme(event.matches);
  };

  useEffect(() => {
    const darkThemeMq: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mqListener);

    return function cleanup() {
      darkThemeMq.removeEventListener("change", mqListener);
    };
  }, []);
  return isDarkTheme;
};

export { useSystemDarkThemeDetector };
