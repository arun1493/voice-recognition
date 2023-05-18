import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";

import { lightTheme } from "../theme";
import { DropDownMenu } from "./dropDownMenu";

describe("DropDownMenu", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <DropDownMenu />
      </ThemeProvider>
    );

    expect(baseElement).toBeTruthy();
  });
});
