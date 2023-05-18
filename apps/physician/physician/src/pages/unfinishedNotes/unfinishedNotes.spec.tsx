import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { configureI18n } from "../../helpers";
import { UnfinishedNotes } from "./UnfinishedNotes";
import { componentSetupWithStore } from "../../hocs";

const setup = componentSetupWithStore(() => <UnfinishedNotes />);

describe("Unfinished Notes", () => {
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

  it("should has icons", () => {
    component = setup({ isLoading: false });
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("svg").length).toEqual(2);
  });

  it("should include loader", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("svg").length).toEqual(1);
  });

  it("should have appropriate header", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[0].innerHTML).toEqual("Unfinished Notes");
  });
});
