import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import { cleanup, render } from "@testing-library/react";

import { lightTheme } from "../theme";
import { CapturingIndicator } from "./CapturingIndicator";

describe("CapturingIndicator", () => {
  let baseElement: Element;

  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    baseElement = render(
      <ThemeProvider theme={lightTheme}>
        <CapturingIndicator />
      </ThemeProvider>
    ).baseElement;
  });

  it("should render successfully", () => {
    expect(baseElement).toBeTruthy();
  });

  it("should render three dots", () => {
    expect(baseElement.getElementsByTagName("div")[0].children[0].children).toHaveLength(3);
  });
});
