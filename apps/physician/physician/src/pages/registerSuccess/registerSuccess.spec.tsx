import { cleanup, RenderResult } from "@testing-library/react";

import { configureI18n } from "../../helpers";
import { RegisterSuccess } from "./RegisterSuccess";
import { componentSetupWithStore } from "../../hocs";

const setup = componentSetupWithStore(() => <RegisterSuccess />);

describe("RegisterSuccess", () => {
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
});
