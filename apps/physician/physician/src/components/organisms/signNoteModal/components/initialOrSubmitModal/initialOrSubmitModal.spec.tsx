import _noop from "lodash/noop";
import ReactDOM from "react-dom";
import { ReactPortal } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import { InitialOrSubmitModal } from ".";
import { configureI18n } from "../../../../../helpers";
import { componentSetupWithStore } from "../../../../../hocs";
import { shouldMatchSnapshot } from "../../../../../helpers/snapshot.spec";

const setup = componentSetupWithStore((isInitial) => (
  <InitialOrSubmitModal
    closeModal={_noop}
    hasEnhancedReview={true}
    isAthena={false}
    isInitial={isInitial}
    saveToEnhancedReview={_noop}
    submitNote={_noop}
  />
));

describe("InitialOrSubmitModal initial step modal", () => {
  let baseElement: Element;
  let element: Element | null;

  beforeEach(() => {
    configureI18n();
    baseElement = setup(true).baseElement;
    element = baseElement.querySelector("[data-cy='initial-or-submit-modal']");
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    expect(baseElement).toBeTruthy();
  });

  it("should contain correct title", () => {
    expect(element?.innerHTML).toContain("Sign note");
  });

  it("should contain correct text", () => {
    expect(element?.innerHTML).toContain("or");
    expect(element?.innerHTML).toContain("By e-signing, you accept Suki AI’s");
    expect(element?.innerHTML).toContain("terms.");
  });

  it("should contain correct buttons text", () => {
    expect(element?.innerHTML).toContain("Sign note");
    expect(element?.innerHTML).toContain("Enhanced review");
  });
});

describe("InitialOrSubmitModal submit step", () => {
  let baseElement: Element;
  let element: Element | null;

  beforeEach(() => {
    configureI18n();
    baseElement = setup(false).baseElement;
    element = baseElement.querySelector("[data-cy='initial-or-submit-modal']");
    ReactDOM.createPortal = jest.fn<ReactPortal, any>((element, node) => element);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    expect(baseElement).toBeTruthy();
  });

  it("should contain correct title", () => {
    expect(element?.innerHTML).toContain("Sign note");
  });

  it("should contain correct text", () => {
    expect(element?.innerHTML).toContain("By e-signing, you accept Suki AI’s");
    expect(element?.innerHTML).toContain("terms.");
  });

  it("should contain correct buttons text", () => {
    expect(element?.innerHTML).toContain("Confirm");
    expect(element?.innerHTML).not.toContain("Enhanced review");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(InitialOrSubmitModal);
  });
});
