import { ThemeProvider } from "styled-components";
import { cleanup, render, RenderResult } from "@testing-library/react";

import { ModalHeader } from "./ModalHeader";
import { lightTheme } from "../../../theme";

describe("ModalHeader", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <ThemeProvider theme={lightTheme}>
        <ModalHeader title="Modal Header title" subtitle="Modal Header subtitle" />
      </ThemeProvider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const { baseElement } = component;
    expect(baseElement).toBeTruthy();
  });

  it("should have appropriate title", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[0].textContent).toEqual("Modal Header title");
  });

  it("should have appropriate subtitle", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[1].textContent).toEqual("Modal Header subtitle");
  });

  it("should render right styling as default", () => {
    const { baseElement } = component;

    const containerComputedStyles = getComputedStyle(baseElement.getElementsByTagName("div")[1] as Element); // header container
    const titlesContainerComputedStyles = getComputedStyle(baseElement.getElementsByTagName("div")[2] as Element); // titles container

    const titleComputedStyles = getComputedStyle(baseElement.getElementsByTagName("p")[0] as Element);
    const subtitleComputedStyles = getComputedStyle(baseElement.getElementsByTagName("p")[1] as Element);

    const containerAlign = containerComputedStyles.getPropertyValue("align-items");
    const containerJustify = containerComputedStyles.getPropertyValue("justify-content");

    const titlesContainerAlign = titlesContainerComputedStyles.getPropertyValue("align-items");

    const titleFontSize = titleComputedStyles.getPropertyValue("font-size");
    const subTitleFontSize = subtitleComputedStyles.getPropertyValue("font-size");

    expect(containerAlign).toEqual("center");
    expect(containerJustify).toEqual("center");

    expect(titlesContainerAlign).toEqual("center");

    expect(titleFontSize).toEqual("24px");
    expect(subTitleFontSize).toEqual("14px");
  });
});
