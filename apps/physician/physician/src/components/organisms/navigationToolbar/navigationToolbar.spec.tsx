import { cleanup, RenderResult } from "@testing-library/react";

import { NavigationToolbar } from ".";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <NavigationToolbar />);
const NAV_ITEMS_LENGTH = 3;

describe("NavigationToolbar", () => {
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

  it("should have svg", () => {
    const { baseElement } = component;
    const img = baseElement.getElementsByTagName("svg");
    expect(img).toHaveLength(NAV_ITEMS_LENGTH);
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(NavigationToolbar);
  });
});
