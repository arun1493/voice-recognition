import { cleanup, RenderResult } from "@testing-library/react";

import Home from "./Home";
import { configureI18n } from "../../helpers";
import { componentSetupWithStore } from "../../hocs";

const setup = componentSetupWithStore(() => <Home />);

describe("Home", () => {
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
