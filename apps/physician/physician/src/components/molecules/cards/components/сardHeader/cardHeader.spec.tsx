import _noop from "lodash/noop";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { CardHeader } from ".";
import { configureI18n } from "../../../../../helpers";
import { componentSetupWithStore } from "../../../../../hocs";

const setup = componentSetupWithStore(() => (
  <CardHeader
    handleNavigation={_noop}
    isCardsVisible={true}
    isLeftNavigationDisabled={true}
    isRightNavigationDisabled={true}
    title="Allergies"
  />
));

describe("CardTable", () => {
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

  it("should include svg", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("svg")).toBeTruthy();
  });

  it("should include text", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[0]).toHaveTextContent("Allergies");
  });
});
