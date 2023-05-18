import { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react";

import { NoteSubmissionButton } from "./";
import { configureI18n } from "../../../helpers";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";
import { componentSetupWithStore, componentWithTheme } from "../../../hocs";

const setup = componentSetupWithStore(() => <NoteSubmissionButton onClick={() => null} size="sm" />);

describe("NoteSubmissionButton", () => {
  configureI18n();
  let baseElement: Element;

  beforeEach(() => {
    baseElement = setup().baseElement;
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    expect(baseElement).toBeTruthy();
  });

  it("should have I'm done text and svg", () => {
    expect(baseElement).toHaveTextContent("I'm done");
    const svg = baseElement.getElementsByTagName("svg");
    expect(svg).toHaveLength(1);
  });

  it("should match snapshot", () => {
    const props = {
      size: "sm",
      onClick: () => null
    };

    shouldMatchSnapshot(NoteSubmissionButton, props);
  });

  it("should respond to clicks", () => {
    // changing size of component on click
    const TestComponent = () => {
      const [size, setSize] = useState("xs");

      return componentWithTheme(NoteSubmissionButton, {
        size,
        onClick: () => {
          setSize("sm");
        }
      });
    };

    const { container, baseElement } = render(<TestComponent />);

    const getHeight = (element: Element) => getComputedStyle(element).getPropertyValue("height");

    const element = baseElement?.lastChild?.lastChild as Element;

    expect(getHeight(element)).toBe("40px");

    fireEvent.click(container.getElementsByTagName("button")[0]);
    // size became "sm"
    expect(getHeight(element)).toBe("40px");
  });

  it("should not respond to clicks if disabled", () => {
    // trying to change size of component on click when disabled flag passed
    const TestComponent = () => {
      const [size, setSize] = useState("xs");

      return componentWithTheme(NoteSubmissionButton, {
        size,
        disabled: true,
        onClick: () => {
          setSize("sm");
        }
      });
    };

    const { container, baseElement } = render(<TestComponent />);

    const getHeight = (element: Element) => getComputedStyle(element).getPropertyValue("height");

    const element = baseElement?.lastChild?.lastChild as Element;

    expect(getHeight(element)).toBe("40px");

    fireEvent.click(container.getElementsByTagName("button")[0]);
    // nothing changed
    expect(getHeight(element)).toBe("40px");
  });
});
