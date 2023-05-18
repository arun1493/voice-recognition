import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { ControlMenu } from ".";
import { configureI18n } from "../../../../helpers";
import { componentSetupWithStore } from "../../../../hocs";

const setup = componentSetupWithStore(() => <ControlMenu />);

describe("ControlMenu", () => {
  let component: RenderResult;
  configureI18n();

  beforeEach(() => {
    component = setup();
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const { baseElement } = component;
    expect(baseElement).toBeTruthy();
  });
});
