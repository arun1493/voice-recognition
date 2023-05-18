import _noop from "lodash/noop";
import ReactDOM from "react-dom";
import { ReactPortal } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import { ConfirmICDCodes } from ".";
import { configureI18n } from "../../../../../helpers";
import { componentSetupWithStore } from "../../../../../hocs";
import { shouldMatchSnapshot } from "../../../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => (
  <ConfirmICDCodes closeModal={_noop} setInitialStep={_noop} showMissingCodesModal={_noop} />
));

describe("ConfirmICDCodes modal", () => {
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
    expect(baseElement?.innerHTML).toContain("Confirm codes");
  });

  it("should contain correct text", () => {
    expect(baseElement?.innerHTML).toContain("Choose or change diagnoses codes for this note.");
  });

  it("should contain correct button text", () => {
    expect(baseElement?.innerHTML).toContain("Continue");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(ConfirmICDCodes);
  });
});
