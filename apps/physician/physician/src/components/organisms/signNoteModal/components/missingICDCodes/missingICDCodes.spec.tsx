import _noop from "lodash/noop";
import ReactDOM from "react-dom";
import { ReactPortal } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import { MissingICDCodes } from ".";
import { configureI18n } from "../../../../../helpers";
import { componentSetupWithStore } from "../../../../../hocs";
import { shouldMatchSnapshot } from "../../../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => (
  <MissingICDCodes closeModal={_noop} setInitialStepAndIgnoreMissingICDCodes={_noop} showConfirmCodesModal={_noop} />
));

describe("MissingICDCodes modal", () => {
  let baseElement: Element;

  beforeEach(() => {
    configureI18n();
    baseElement = setup().baseElement;
    ReactDOM.createPortal = jest.fn<ReactPortal, any>((element, node) => element);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    expect(baseElement).toBeTruthy();
  });

  it("should contain correct title", () => {
    expect(baseElement?.innerHTML).toContain("Some problems do not");
    expect(baseElement?.innerHTML).toContain("have ICD-10 codes");
  });

  it("should contain correct buttons text", () => {
    expect(baseElement?.innerHTML).toContain("Submit with missing codes");
    expect(baseElement?.innerHTML).toContain("Add more codes");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(MissingICDCodes);
  });
});
