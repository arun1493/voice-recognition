import { cleanup, RenderResult } from "@testing-library/react";

import ImportSchedule from "./ImportSchedule";
import { configureI18n } from "../../helpers";
import { componentSetupWithStore, withIntercom } from "../../hocs";

const withIntercomSetup = withIntercom(ImportSchedule);

const setup = componentSetupWithStore(withIntercomSetup);

describe("ImportSchedule", () => {
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
