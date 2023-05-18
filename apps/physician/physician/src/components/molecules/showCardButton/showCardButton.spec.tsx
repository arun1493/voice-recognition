import _noop from "lodash/noop";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { ShowCardButton } from ".";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";

const setup = componentSetupWithStore(() => <ShowCardButton isCardsVisible={false} onClick={_noop} readOnly={false} />);

describe("ShowCardButton", () => {
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

  it("should include svg", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("svg")[0]).toBeTruthy();
  });
});
