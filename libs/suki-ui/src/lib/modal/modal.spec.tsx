import { ThemeProvider } from "styled-components";
import { cleanup, render } from "@testing-library/react";

import { Modal } from "./Modal";
import { lightTheme } from "../theme";

describe("Modal", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Modal onClose={jest.fn()} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });

  it("should have close icon", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Modal onClose={jest.fn()} />
      </ThemeProvider>
    );
    const closeIcon = baseElement.querySelector("svg");
    expect(closeIcon).toBeTruthy();
  });

  it("should not have close icon", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Modal hasCloseButton={false} onClose={jest.fn()} />
      </ThemeProvider>
    );
    const closeIcon = baseElement.querySelector("svg");
    expect(closeIcon).toBeFalsy();
  });
});
