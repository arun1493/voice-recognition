import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { StorybookPage, ThemeToggle } from "./components";
import { Card, CardContent, CardHeader } from "../src/lib/card";
import { darkTheme, GlobalStyle, lightTheme } from "../src/lib/theme";

const StyledCardContent = styled.div`
  padding: 28px;
`;

const ThemeDecorator = (storyFn) => {
  const [theme, setTheme] = useState("light");

  const handleThemeToggle = (theme) => {
    setTheme(theme);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StorybookPage>
        <Card>
          <CardHeader actionPrimary={<ThemeToggle onChange={handleThemeToggle} />} />
          <CardContent>
            <StyledCardContent>{storyFn()}</StyledCardContent>
          </CardContent>
        </Card>
      </StorybookPage>
    </ThemeProvider>
  );
};

export default ThemeDecorator;
