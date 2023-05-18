import { cleanup, RenderResult } from "@testing-library/react";

import { MainMenuNavigation } from ".";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <MainMenuNavigation />);

describe("MainMenuNavigation", () => {
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
    const svg = baseElement.getElementsByTagName("svg");
    expect(svg).toHaveLength(1);
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(MainMenuNavigation);
  });
});
