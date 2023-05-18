import _noop from "lodash/noop";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { AddProblemButton } from ".";
import { configureI18n } from "../../../../helpers";
import { componentSetupWithStore } from "../../../../hocs";

const setup = componentSetupWithStore(() => <AddProblemButton onClick={_noop} />);

describe("AddProblemButton", () => {
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

  it("should include text element", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[0]).toBeTruthy();
  });
});
