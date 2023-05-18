import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";

import Header from "./Header";
import { lightTheme } from "../theme";

describe("Header component", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Header>Hello World</Header>
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });

  it("should render h1 by default", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Header>Hello World</Header>
      </ThemeProvider>
    );

    const expectedTagName = baseElement.lastChild?.lastChild?.tagName;

    expect(baseElement).toHaveTextContent("Hello World");
    expect(expectedTagName).toEqual("H1");
  });

  it("should render h1 element at 40px with correct theme styling", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Header level="h1">Hello World</Header>
      </ThemeProvider>
    );

    const expectedTagName = baseElement.lastChild?.lastChild?.tagName;
    const computedStyles = getComputedStyle(baseElement.lastChild?.lastChild as Element);
    const fontSize = computedStyles.getPropertyValue("font-size");
    const fontWeight = computedStyles.getPropertyValue("font-weight");
    const fontFamily = computedStyles.getPropertyValue("font-family");
    const fontColor = computedStyles.getPropertyValue("color");

    expect(baseElement).toHaveTextContent("Hello World");
    expect(expectedTagName).toEqual("H1");
    expect(fontSize).toEqual("40px");
    expect(fontWeight).toEqual("600");
    expect(fontFamily).toEqual("'Open Sans',sans-serif");
    expect(fontColor).toEqual("rgb(0, 0, 0)");
  });

  it("should render h2 element at 32px with correct theme styling", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Header level="h2">Hello World</Header>
      </ThemeProvider>
    );

    const expectedTagName = baseElement.lastChild?.lastChild?.tagName;
    const computedStyles = getComputedStyle(baseElement.lastChild?.lastChild as Element);
    const fontSize = computedStyles.getPropertyValue("font-size");
    const fontWeight = computedStyles.getPropertyValue("font-weight");
    const fontFamily = computedStyles.getPropertyValue("font-family");
    const fontColor = computedStyles.getPropertyValue("color");

    expect(baseElement).toHaveTextContent("Hello World");
    expect(expectedTagName).toEqual("H2");
    expect(fontSize).toEqual("32px");
    expect(fontWeight).toEqual("600");
    expect(fontFamily).toEqual("'Open Sans',sans-serif");
    expect(fontColor).toEqual("rgb(0, 0, 0)");
  });

  it("should render h3 element at 28px with correct theme styling", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Header level="h3">Hello World</Header>
      </ThemeProvider>
    );

    const expectedTagName = baseElement.lastChild?.lastChild?.tagName;
    const computedStyles = getComputedStyle(baseElement.lastChild?.lastChild as Element);
    const fontSize = computedStyles.getPropertyValue("font-size");
    const fontWeight = computedStyles.getPropertyValue("font-weight");
    const fontFamily = computedStyles.getPropertyValue("font-family");
    const fontColor = computedStyles.getPropertyValue("color");

    expect(baseElement).toHaveTextContent("Hello World");
    expect(expectedTagName).toEqual("H3");
    expect(fontSize).toEqual("28px");
    expect(fontWeight).toEqual("600");
    expect(fontFamily).toEqual("'Open Sans',sans-serif");
    expect(fontColor).toEqual("rgb(0, 0, 0)");
  });

  it("should render h4 element at 24px with correct theme styling", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Header level="h4">Hello World</Header>
      </ThemeProvider>
    );

    const expectedTagName = baseElement.lastChild?.lastChild?.tagName;
    const computedStyles = getComputedStyle(baseElement.lastChild?.lastChild as Element);
    const fontSize = computedStyles.getPropertyValue("font-size");
    const fontWeight = computedStyles.getPropertyValue("font-weight");
    const fontFamily = computedStyles.getPropertyValue("font-family");
    const fontColor = computedStyles.getPropertyValue("color");

    expect(baseElement).toHaveTextContent("Hello World");
    expect(expectedTagName).toEqual("H4");
    expect(fontSize).toEqual("24px");
    expect(fontWeight).toEqual("600");
    expect(fontFamily).toEqual("'Open Sans',sans-serif");
    expect(fontColor).toEqual("rgb(0, 0, 0)");
  });

  it("should render h5 element at 20px with correct theme styling", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Header level="h5">Hello World</Header>
      </ThemeProvider>
    );

    const expectedTagName = baseElement.lastChild?.lastChild?.tagName;
    const computedStyles = getComputedStyle(baseElement.lastChild?.lastChild as Element);
    const fontSize = computedStyles.getPropertyValue("font-size");
    const fontWeight = computedStyles.getPropertyValue("font-weight");
    const fontFamily = computedStyles.getPropertyValue("font-family");
    const fontColor = computedStyles.getPropertyValue("color");

    expect(baseElement).toHaveTextContent("Hello World");
    expect(expectedTagName).toEqual("H5");
    expect(fontSize).toEqual("20px");
    expect(fontWeight).toEqual("600");
    expect(fontFamily).toEqual("'Open Sans',sans-serif");
    expect(fontColor).toEqual("rgb(0, 0, 0)");
  });

  it("should render h6 element at 18px with correct theme styling", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Header level="h6">Hello World</Header>
      </ThemeProvider>
    );

    const expectedTagName = baseElement.lastChild?.lastChild?.tagName;
    const computedStyles = getComputedStyle(baseElement.lastChild?.lastChild as Element);
    const fontSize = computedStyles.getPropertyValue("font-size");
    const fontWeight = computedStyles.getPropertyValue("font-weight");
    const fontFamily = computedStyles.getPropertyValue("font-family");
    const fontColor = computedStyles.getPropertyValue("color");

    expect(baseElement).toHaveTextContent("Hello World");
    expect(expectedTagName).toEqual("H6");
    expect(fontSize).toEqual("18px");
    expect(fontWeight).toEqual("600");
    expect(fontFamily).toEqual("'Open Sans',sans-serif");
    expect(fontColor).toEqual("rgb(0, 0, 0)");
  });
});
