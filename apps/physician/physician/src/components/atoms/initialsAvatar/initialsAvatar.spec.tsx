import { useState } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render, RenderResult } from "@testing-library/react";

import { InitialsAvatar, InitialsAvatarProps } from "./";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";
import { componentSetupWithStore, componentWithTheme } from "../../../hocs";

const props: InitialsAvatarProps = { firstName: "D", lastName: "J" };
const setup = componentSetupWithStore(() => <InitialsAvatar {...props} />);

describe("InitialsAvatar", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = setup();
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const { baseElement } = setup();
    expect(baseElement).toBeTruthy();
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(InitialsAvatar, props);
  });

  it("should respond to clicks", () => {
    // changing properties "firstName" and "lastName" of component on click
    const data = [
      { firstName: "a", lastName: "b" },
      { firstName: "c", lastName: "d" }
    ];
    const TestComponent = () => {
      const [names, setNames] = useState(data[0]);

      return componentWithTheme(InitialsAvatar, {
        firstName: names.firstName,
        lastName: names.lastName,
        onClick: () => {
          setNames(data[1]);
        }
      });
    };

    const { container, getByText } = render(<TestComponent />);

    const getCountValue = () => container.querySelector("div")?.innerHTML;

    expect(getCountValue()).toBe("AB");

    fireEvent.click(getByText("AB"));

    expect(getCountValue()).toBe("CD");
  });
});
