import { cleanup, RenderResult } from "@testing-library/react";

import { configureI18n } from "../../helpers";
import { componentSetupWithStore } from "../../hocs";
import { UnSupportedDeviceOrBrowser } from "./UnSupportedDeviceOrBrowser";

const setup = componentSetupWithStore(() => <UnSupportedDeviceOrBrowser />);

describe("UnSupportedDeviceOrBrowser Page", () => {
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
