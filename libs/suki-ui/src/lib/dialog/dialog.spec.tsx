import i18n from "i18next";
import { ThemeProvider } from "styled-components";
import { cleanup, render } from "@testing-library/react";

import Dialog from "./Dialog";
import { lightTheme } from "../theme";

describe("Dialog", () => {
  afterEach(() => {
    cleanup();
  });

  const buttonPropsButton = {
    end: { text: i18n.t("modals.deleteModal.button.delete"), onClick: jest.fn() },
    hasCloseBtn: true,
    start: { text: i18n.t("modals.deleteModal.button.cancel"), onClick: jest.fn() }
  };

  const buttonPropsIcon = {
    end: { text: i18n.t("modals.deleteModal.button.delete"), onClick: jest.fn() }
  };

  it("should render successfully", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Dialog buttonProps={buttonPropsButton} onClose={jest.fn()} isOpen={true} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });

  it("should have close icon", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Dialog buttonProps={buttonPropsIcon} onClose={jest.fn()} isOpen={true} />
      </ThemeProvider>
    );
    const closeIcon = baseElement.querySelector("svg");
    expect(closeIcon).toBeTruthy();
  });

  it("should not have close icon", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Dialog buttonProps={buttonPropsButton} onClose={jest.fn()} isOpen={true} />
      </ThemeProvider>
    );
    const closeIcon = baseElement.querySelector("svg");
    expect(closeIcon).toBeFalsy();
  });
});
