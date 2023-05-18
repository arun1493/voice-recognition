import { cleanup, RenderResult } from "@testing-library/react";

import Help from "./Help";
import { configureI18n } from "../../helpers";
import { componentSetupWithStore, withIntercom } from "../../hocs";

const withIntercomSetup = withIntercom(Help);

const setup = componentSetupWithStore(withIntercomSetup);

describe("Help", () => {
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

  it("should has a header with title Help", () => {
    const { baseElement } = component;
    const header = baseElement.getElementsByTagName("header")[0];
    expect(header).toBeTruthy();
    expect(header.getElementsByTagName("p")[0].textContent).toEqual("Help");
  });

  it("should has a close icon within header", () => {
    const { baseElement } = component;
    const header = baseElement.getElementsByTagName("header")[0];
    expect(header.getElementsByTagName("svg").length).toEqual(1);
  });
});
