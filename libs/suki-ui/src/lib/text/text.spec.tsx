import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";

import { Text } from "./Text";
import { lightTheme } from "../theme";

describe("Text component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Text>Hello World</Text>
      </ThemeProvider>
    );

    expect(baseElement).toBeTruthy();
  });

  it("should render normal size styling as default", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Text>Hello World</Text>
      </ThemeProvider>
    );

    const expectedTagName = baseElement.lastChild?.lastChild?.tagName;
    const computedStyles = getComputedStyle(baseElement.lastChild?.lastChild as Element);
    const fontColor = computedStyles.getPropertyValue("color");
    const fontSize = computedStyles.getPropertyValue("font-size");
    const fontLineHeight = computedStyles.getPropertyValue("line-height");
    const textTransform = computedStyles.getPropertyValue("text-transform");

    expect(baseElement).toHaveTextContent("Hello World");
    expect(expectedTagName).toEqual("P");
    expect(fontColor).toEqual("rgb(0, 0, 0)");
    expect(fontSize).toEqual("16px");
    expect(fontLineHeight).toEqual("24px");
    expect(textTransform).toEqual("none");
  });

  it("should render normal size styling", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Text size="md">Hello World</Text>
      </ThemeProvider>
    );

    const expectedTagName = baseElement.lastChild?.lastChild?.tagName;
    const computedStyles = getComputedStyle(baseElement.lastChild?.lastChild as Element);
    const fontColor = computedStyles.getPropertyValue("color");
    const fontSize = computedStyles.getPropertyValue("font-size");
    const fontLineHeight = computedStyles.getPropertyValue("line-height");
    const textTransform = computedStyles.getPropertyValue("text-transform");

    expect(baseElement).toHaveTextContent("Hello World");
    expect(expectedTagName).toEqual("P");
    expect(fontColor).toEqual("rgb(0, 0, 0)");
    expect(fontSize).toEqual("16px");
    expect(fontLineHeight).toEqual("24px");
    expect(textTransform).toEqual("none");
  });

  it("should render small size styling", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Text size="sm">Hello World</Text>
      </ThemeProvider>
    );

    const expectedTagName = baseElement.lastChild?.lastChild?.tagName;
    const computedStyles = getComputedStyle(baseElement.lastChild?.lastChild as Element);
    const fontColor = computedStyles.getPropertyValue("color");
    const fontSize = computedStyles.getPropertyValue("font-size");
    const fontLineHeight = computedStyles.getPropertyValue("line-height");
    const textTransform = computedStyles.getPropertyValue("text-transform");

    expect(baseElement).toHaveTextContent("Hello World");
    expect(expectedTagName).toEqual("P");
    expect(fontColor).toEqual("rgb(0, 0, 0)");
    expect(fontSize).toEqual("14px");
    expect(fontLineHeight).toEqual("20px");
    expect(textTransform).toEqual("none");
  });

  it("should render xsmall size styling", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Text size="xs">Hello World</Text>
      </ThemeProvider>
    );

    const expectedTagName = baseElement.lastChild?.lastChild?.tagName;
    const computedStyles = getComputedStyle(baseElement.lastChild?.lastChild as Element);
    const fontColor = computedStyles.getPropertyValue("color");
    const fontSize = computedStyles.getPropertyValue("font-size");
    const fontLineHeight = computedStyles.getPropertyValue("line-height");
    const textTransform = computedStyles.getPropertyValue("text-transform");

    expect(baseElement).toHaveTextContent("Hello World");
    expect(expectedTagName).toEqual("P");
    expect(fontColor).toEqual("rgb(0, 0, 0)");
    expect(fontSize).toEqual("12px");
    expect(fontLineHeight).toEqual("16px");
    expect(textTransform).toEqual("none");
  });

  it("should render xxsmall size in all caps by default with styling", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Text size="2xs">Hello World</Text>
      </ThemeProvider>
    );

    const expectedTagName = baseElement.lastChild?.lastChild?.tagName;
    const computedStyles = getComputedStyle(baseElement.lastChild?.lastChild as Element);
    const fontColor = computedStyles.getPropertyValue("color");
    const fontSize = computedStyles.getPropertyValue("font-size");
    const fontLineHeight = computedStyles.getPropertyValue("line-height");
    const textTransform = computedStyles.getPropertyValue("text-transform");

    expect(baseElement).toHaveTextContent("Hello World");
    expect(expectedTagName).toEqual("P");
    expect(fontColor).toEqual("rgb(0, 0, 0)");
    expect(fontSize).toEqual("11px");
    expect(fontLineHeight).toEqual("15px");
    expect(textTransform).toEqual("uppercase");
  });

  it("should render xxsmall size in all caps by passing the prop with styling", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Text size="2xs" isXXSmallAllUppercase={true}>
          Hello World
        </Text>
      </ThemeProvider>
    );

    const expectedTagName = baseElement.lastChild?.lastChild?.tagName;
    const computedStyles = getComputedStyle(baseElement.lastChild?.lastChild as Element);
    const fontColor = computedStyles.getPropertyValue("color");
    const fontSize = computedStyles.getPropertyValue("font-size");
    const fontLineHeight = computedStyles.getPropertyValue("line-height");
    const textTransform = computedStyles.getPropertyValue("text-transform");

    expect(baseElement).toHaveTextContent("Hello World");
    expect(expectedTagName).toEqual("P");
    expect(fontColor).toEqual("rgb(0, 0, 0)");
    expect(fontSize).toEqual("11px");
    expect(fontLineHeight).toEqual("15px");
    expect(textTransform).toEqual("uppercase");
  });

  it("should not render xxsmall size in all caps by passing the prop with styling", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Text isXXSmallAllUppercase={false} size="2xs">
          Hello World
        </Text>
      </ThemeProvider>
    );

    const expectedTagName = baseElement.lastChild?.lastChild?.tagName;
    const computedStyles = getComputedStyle(baseElement.lastChild?.lastChild as Element);
    const fontColor = computedStyles.getPropertyValue("color");
    const fontSize = computedStyles.getPropertyValue("font-size");
    const fontLineHeight = computedStyles.getPropertyValue("line-height");
    const textTransform = computedStyles.getPropertyValue("text-transform");

    expect(baseElement).toHaveTextContent("Hello World");
    expect(expectedTagName).toEqual("P");
    expect(fontColor).toEqual("rgb(0, 0, 0)");
    expect(fontSize).toEqual("11px");
    expect(fontLineHeight).toEqual("15px");
    expect(textTransform).toEqual("none");
  });
});
