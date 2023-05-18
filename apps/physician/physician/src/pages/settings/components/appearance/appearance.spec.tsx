import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import Appearance from "./Appearance";
import { configureI18n } from "../../../../helpers";
import { componentSetupWithStore } from "../../../../hocs";

const setup = componentSetupWithStore(() => <Appearance />);

describe("Appearance", () => {
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

  it("should have exactly one back button", () => {
    const { baseElement } = component;
    expect(baseElement.querySelectorAll("[data-cy=header-back-button]").length).toBe(1);
  });

  it("should have appropriate header text", () => {
    const { baseElement } = component;
    expect(baseElement.querySelector("header")).toHaveTextContent("Appearance");
  });
});
