import ReactDOM from "react-dom";
import { ReactPortal } from "react";
import { cleanup, RenderResult } from "@testing-library/react";

import { NoteRefresh } from ".";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <NoteRefresh />);

describe("NoteRefresh", () => {
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

  it("should contain text", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[1].innerHTML).toContain(
      "This can take up to 30 seconds. Please edit and submit the note from Suki before making more edits in EMR."
    );
  });

  it("should contain title", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[0].innerHTML).toContain("Refreshing from EMR");
  });

  it("should contain loader", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("svg")).toBeTruthy();
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(NoteRefresh);
  });
});
