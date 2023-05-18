import ReactDOM from "react-dom";
import { ReactPortal } from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import { SignNoteModal } from "./SignNoteModal";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <SignNoteModal />);

describe("SignNoteModal modal", () => {
  let baseElement: Element;
  let element: Element | null;

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

  it("should match snapshot", () => {
    shouldMatchSnapshot(SignNoteModal);
  });
});
