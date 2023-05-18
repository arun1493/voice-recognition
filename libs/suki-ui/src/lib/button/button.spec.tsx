import { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import { cleanup, fireEvent, render } from "@testing-library/react";

import { Button } from "./Button";
import { lightTheme } from "../theme";

afterEach(() => {
  cleanup();
});

describe("Button", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <Button />
      </ThemeProvider>
    );

    expect(baseElement).toBeTruthy();
  });

  it("should contain correct text if passed", () => {
    const { container, getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Button>test string</Button>
      </ThemeProvider>
    );
    expect(getByText("test string")).toBeInTheDocument();
  });

  it("should increment counter", () => {
    const TestComponent = () => {
      const [count, setCounter] = useState(0);

      return (
        <ThemeProvider theme={lightTheme}>
          <Button onClick={() => setCounter((count) => count + 1)}>
            Click to increase: <span id="countValue">{count}</span>
          </Button>
        </ThemeProvider>
      );
    };

    const { container, getByText } = render(<TestComponent />);

    const getCountValue = () => container.querySelector("#countValue")?.innerHTML;

    expect(getCountValue()).toBe("0");

    fireEvent.click(getByText(/Click to increase/));

    expect(getCountValue()).toBe("1");
  });

  it("should not increment counter if disabled", () => {
    const TestComponent = () => {
      const [count, setCounter] = useState(0);

      return (
        <ThemeProvider theme={lightTheme}>
          <Button isDisabled={true} onClick={() => setCounter((count) => count + 1)}>
            Click to increase: <span id="countValue">{count}</span>
          </Button>
        </ThemeProvider>
      );
    };

    const { container, getByText } = render(<TestComponent />);

    const getCountValue = () => container.querySelector("#countValue")?.innerHTML;

    expect(getCountValue()).toBe("0");

    fireEvent.click(getByText(/Click to increase/));

    expect(getCountValue()).toBe("0");
  });
});
