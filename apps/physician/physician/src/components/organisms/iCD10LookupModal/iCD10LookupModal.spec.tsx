import ReactDOM from "react-dom";
import { ReactPortal } from "react";
import { cleanup, RenderResult } from "@testing-library/react";

import { ICD10LookupModal } from ".";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <ICD10LookupModal />);

describe("iCD10LookupModal", () => {
  let component: RenderResult;

  ReactDOM.createPortal = jest.fn<ReactPortal, any>((element, node) => element);

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

  it("should have title 'ICD-10 Code Lookup'", () => {
    const { baseElement } = component;
    const element = baseElement.getElementsByTagName("p")[0];
    expect(element?.innerHTML).toContain("ICD-10 Code Lookup");
  });

  it("should have text if empty", () => {
    const { baseElement } = component;
    const element = baseElement.getElementsByTagName("p")[1];
    expect(element.innerHTML).toEqual("Your search<strong>  </strong>did not match any results.");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(ICD10LookupModal);
  });
});
