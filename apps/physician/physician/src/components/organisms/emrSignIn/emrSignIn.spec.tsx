import ReactDOM from "react-dom";
import { ReactPortal } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { EmrSignIn } from ".";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <EmrSignIn />);

describe("EmrSignIn modal", () => {
  let component: RenderResult;
  let modalEl: HTMLDivElement;

  ReactDOM.createPortal = jest.fn<ReactPortal, any>((element, node) => element);

  beforeEach(() => {
    configureI18n();
    component = setup();
    const { baseElement } = component;
    modalEl = baseElement.querySelector("[class=modal]") || document.createElement("div");
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    expect(modalEl).toBeTruthy();
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(EmrSignIn);
  });
});
