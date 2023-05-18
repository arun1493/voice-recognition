import _noop from "lodash/noop";
import ReactDOM from "react-dom";
import { ReactPortal } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import { SearchPatientsByName } from ".";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <SearchPatientsByName onAddPatient={_noop} />);

describe("Search Patients By Name", () => {
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

  it("should have input field", () => {
    const input = baseElement.getElementsByTagName("input");
    expect(input.length).toEqual(1);
  });

  it("should have appropriate header", () => {
    const header = baseElement.getElementsByTagName("p");
    expect(header[0].textContent).toEqual("Search by Name");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(SearchPatientsByName);
  });
});
