import _noop from "lodash/noop";
import ReactDOM from "react-dom";
import { ReactPortal } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";
import { SearchPatientsInHeader } from "./SearchPatientsInHeader";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <SearchPatientsInHeader />);

describe("Search Patients in header", () => {
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

  it("should have one input field", () => {
    const input = baseElement.getElementsByTagName("input");
    expect(input.length).toEqual(1);
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(SearchPatientsInHeader);
  });
});
