import _noop from "lodash/noop";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { PatientsMenu } from "./PatientsMenu";
import { configureI18n } from "../../../../helpers";
import { componentSetupWithStore } from "../../../../hocs";

const props = {
  isOpen: true,
  onClose: _noop
};

const setup = componentSetupWithStore(() => <PatientsMenu {...props} />);

describe("PatientsMenu", () => {
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

  it("should contain Print'", () => {
    const { baseElement } = component;
    const element = baseElement.querySelector("[data-cy='patients-menu-item-0']");
    expect(element?.innerHTML).toContain("Print notes");
  });

  it("should contain 'Import Schedule'", () => {
    const { baseElement } = component;
    const element = baseElement.querySelector("[data-cy='patients-menu-item-1']");
    expect(element?.innerHTML).toContain("Import Schedule");
  });
  it("should contain 'Help'", () => {
    const { baseElement } = component;
    const element = baseElement.querySelector("[data-cy='patients-menu-item-2']");
    expect(element?.innerHTML).toContain("Help");
  });
});
