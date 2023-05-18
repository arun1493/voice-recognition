import { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import { cleanup, fireEvent, render } from "@testing-library/react";

import { lightTheme } from "../theme";
import { FormInput } from "./FormInput";

afterEach(() => {
  cleanup();
});

describe("FormInput", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <FormInput />
      </ThemeProvider>
    );

    expect(baseElement).toBeTruthy();
  });

  it("should render successfully with attributes", () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={lightTheme}>
        <FormInput placeholder={"placeholder"} width="150px" height="30px" hasError isDisabled />
      </ThemeProvider>
    );

    expect(getByPlaceholderText("placeholder")).toBeInTheDocument();
  });

  it("should render successfully with value", () => {
    const { getByDisplayValue } = render(
      <ThemeProvider theme={lightTheme}>
        <FormInput value={"input value"} />
      </ThemeProvider>
    );

    expect(getByDisplayValue("input value")).toBeInTheDocument();
  });

  it("should render successfully on value change", () => {
    const TestComponent = () => {
      const [inputValue, setInputValue] = useState("default value");

      return (
        <ThemeProvider theme={lightTheme}>
          <FormInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </ThemeProvider>
      );
    };

    const { container } = render(<TestComponent />);
    const input = container.firstChild as HTMLInputElement;
    fireEvent.change(input, { target: { value: "new value" } });

    expect(input.value).toBe("new value");
  });
});
