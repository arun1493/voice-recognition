import { cleanup, RenderResult } from "@testing-library/react";

import Login from "./Login";
import { configureI18n } from "../../helpers";
import { componentSetupWithStore } from "../../hocs";

const setup = componentSetupWithStore(() => <Login />);

describe("Login", () => {
  let component: RenderResult;

  beforeEach(() => {
    configureI18n();
    component = setup();
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const { baseElement } = component;
    expect(baseElement).toBeTruthy();
  });

  it("should have inputs and button", () => {
    const { baseElement } = component;

    const inputs = baseElement.getElementsByTagName("input");
    expect(inputs[0].placeholder).toBe("Enter email address");
    expect(inputs[1].placeholder).toBe("Enter password");

    const elements = baseElement.getElementsByClassName("button");
    expect(elements[0].innerHTML).toContain("Log in");
  });
});
