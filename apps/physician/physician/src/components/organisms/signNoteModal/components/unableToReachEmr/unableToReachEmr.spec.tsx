import _noop from "lodash/noop";
import ReactDOM from "react-dom";
import { ReactPortal } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import { UnableToReachEmr } from ".";
import { configureI18n } from "../../../../../helpers";
import { componentSetupWithStore } from "../../../../../hocs";
import { shouldMatchSnapshot } from "../../../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <UnableToReachEmr closeModal={_noop} />);

describe("UnableToReachEmr modal", () => {
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
    expect(baseElement?.innerHTML).toContain("Oops! Unable to reach the EMR at the moment");
  });

  it("should contain correct text", () => {
    const text = "Suki has saved it with your Unfinished Notes, so you can try again later";
    expect(baseElement?.innerHTML).toContain(text);
  });

  it("should contain correct buttons text", () => {
    expect(baseElement?.innerHTML).toContain("ok");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(UnableToReachEmr);
  });
});
