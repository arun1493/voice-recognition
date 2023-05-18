import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { Settings } from "./Settings";
import { configureI18n } from "../../helpers";
import { componentSetupWithStore } from "../../hocs";

const setup = componentSetupWithStore(() => <Settings />);

describe("Settings modal", () => {
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

  it("should has close & arrows icons", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("svg").length).toEqual(3);
  });
});
