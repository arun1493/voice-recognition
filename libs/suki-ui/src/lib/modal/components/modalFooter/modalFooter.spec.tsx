import { ThemeProvider } from "styled-components";
import { cleanup, render } from "@testing-library/react";

import { ModalFooter } from "./ModalFooter";
import { lightTheme } from "../../../theme";

describe("ModalFooter", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <ModalFooter>Modal Footer</ModalFooter>
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
