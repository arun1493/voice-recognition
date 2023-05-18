import ReactDOM from "react-dom";
import { ReactPortal } from "react";
import { cleanup, RenderResult } from "@testing-library/react";

import { ScriptDetailsModal } from "./";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <ScriptDetailsModal scriptId="test" />);

describe("Script Details Modal", () => {
  let component: RenderResult;

  beforeEach(() => {
    configureI18n();
    component = setup();
    ReactDOM.createPortal = jest.fn<ReactPortal, any>((element, node) => element);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const { baseElement } = component;
    expect(baseElement).toBeTruthy();
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(ScriptDetailsModal, { scriptId: "scriptId" });
  });
});
