import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";

import DialogButton from "./DialogButton";
import { lightTheme } from "../../../theme";

const buttonProps = { text: "Save", onClick: () => null };

describe("DialogButton component", () => {
  it("should render successfully with correct text", () => {
    const { baseElement } = render(
      <ThemeProvider theme={lightTheme}>
        <DialogButton {...buttonProps} />
      </ThemeProvider>
    );

    expect(baseElement).toBeTruthy();
    expect(baseElement).toHaveTextContent("Save");
  });
});
