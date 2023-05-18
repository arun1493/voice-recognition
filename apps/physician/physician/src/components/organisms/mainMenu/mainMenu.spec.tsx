import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { MainMenu } from "./MainMenu";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";

const setup = componentSetupWithStore(() => <MainMenu isOpen={true} onClose={() => null} />);

describe("MainMenu", () => {
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

  it("should contain 'Unfinished Notes'", () => {
    const { baseElement } = component;
    const element = baseElement.querySelector("[data-cy='main-menu-item-0']");
    expect(element?.innerHTML).toContain("Unfinished Notes");
  });

  it("should contain 'Settings'", () => {
    const { baseElement } = component;
    const element = baseElement.querySelector("[data-cy='main-menu-item-1']");
    expect(element?.innerHTML).toContain("Settings");
  });

  it("should contain 'Settings'", () => {
    const { baseElement } = component;
    const element = baseElement.querySelector("[data-cy='main-menu-item-2']");
    expect(element?.innerHTML).toContain("Help");
  });

  // [TODO:] Reinstate this test after we have found a solution to the problem that we cannot
  // add data-cy attributes to styled components
  // it("should contain 'Log Out'", () => {
  //   const { baseElement } = component;
  //   const element = baseElement.querySelector("[data-cy='main-menu-item-3']");
  //   expect(element?.innerHTML).toContain("Log Out");
  // });

  it("should have an href that contains '/unfinished-notes'", () => {
    const { baseElement } = component;
    const element = baseElement.querySelector("[data-cy='main-menu-item-0']");
    expect(element).toHaveAttribute("href", "/unfinished-notes");
  });

  it("should have an href that contains '/settings'", () => {
    const { baseElement } = component;
    const element = baseElement.querySelector("[data-cy='main-menu-item-1']");
    expect(element).toHaveAttribute("href", "/settings");
  });

  it("should have an href that contains '/help'", () => {
    const { baseElement } = component;
    const element = baseElement.querySelector("[data-cy='main-menu-item-2']");
    expect(element).toHaveAttribute("href", "/help");
  });
});
