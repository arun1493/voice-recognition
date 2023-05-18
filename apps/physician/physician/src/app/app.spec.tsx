import { cleanup, RenderResult } from "@testing-library/react";

import App from "./index";
import { configureI18n } from "../helpers";
import { componentSetupWithStore } from "../hocs";

/* Recommended workaround from jest (https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom)*/
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
/* End jest workaround for unsupported methods */

const setup = componentSetupWithStore(() => <App />);

describe("App", () => {
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
