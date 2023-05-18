import _noop from "lodash/noop";
import ReactDOM from "react-dom";
import { ReactPortal } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import { configureI18n } from "../../../../../helpers";
import { MultipleEncounters } from "./MultipleEncounters";
import { componentSetupWithStore } from "../../../../../hocs";
import { shouldMatchSnapshot } from "../../../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => (
  <MultipleEncounters closeModal={_noop} saveUnfinishedNote={_noop} sendToEMR={_noop} sendToEMRChart={_noop} />
));

describe("MultipleEncounters modal", () => {
  let baseElement: Element;
  let element: Element | null;

  beforeEach(() => {
    configureI18n();
    baseElement = setup().baseElement;
    element = baseElement.querySelector("[data-cy='multiple-encounters-modal']");
    ReactDOM.createPortal = jest.fn<ReactPortal, any>((element, node) => element);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    expect(baseElement).toBeTruthy();
  });

  it("should contain correct title", () => {
    expect(element?.innerHTML).toContain("Select the visit for this note");
  });

  it("should contain correct buttons text", () => {
    expect(element?.innerHTML).toContain("Submit to EMR chart");
    expect(element?.innerHTML).toContain("Save to unfinished notes");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(MultipleEncounters);
  });
});
