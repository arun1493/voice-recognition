import { cleanup, RenderResult } from "@testing-library/react";

import { configureI18n } from "../../helpers";
import { WindowsDownload } from "./WindowsDownload";
import { componentSetupWithStore } from "../../hocs";

const setup = componentSetupWithStore(() => <WindowsDownload />);

describe("WindowsDownload", () => {
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

  it("should render the correct text in button", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("a")[0].innerHTML).toEqual("Download");
  });
});
