import _noop from "lodash/noop";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import Sections from "./Sections";
import { configureI18n } from "../../../../helpers";
import { componentSetupWithStore } from "../../../../hocs";

const setup = componentSetupWithStore(() => <Sections onAction={_noop} />);

describe("ControlMenu", () => {
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
