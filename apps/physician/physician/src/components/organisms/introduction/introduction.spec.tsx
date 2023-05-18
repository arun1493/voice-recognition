import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { Introduction } from ".";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <Introduction />);

describe("Introduction", () => {
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

  it("should match snapshot for given screen", () => {
    const state = {
      introduction: {
        activeScreen: "screen1"
      }
    };
    shouldMatchSnapshot(Introduction, {}, state);
  });
});
