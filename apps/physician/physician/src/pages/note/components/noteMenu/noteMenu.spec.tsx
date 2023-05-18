import _noop from "lodash/noop";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { NoteMenu } from "./NoteMenu";
import { configureI18n } from "../../../../helpers";
import { componentSetupWithStore } from "../../../../hocs";
import { shouldMatchSnapshot } from "../../../../helpers/snapshot.spec";

const props = {
  isReadOnlyMode: true,
  onClose: _noop
};

const setup = componentSetupWithStore(() => <NoteMenu {...props} />);

describe("NoteMenu", () => {
  let component: RenderResult;

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

  it("should contain Print'", () => {
    const { baseElement } = component;
    const element = baseElement.querySelector("[data-cy='note-menu-item-0']");
    expect(element?.innerHTML).toContain("Print");
  });

  it("should contain Delete'", () => {
    const { baseElement } = component;
    const element = baseElement.querySelector("[data-cy='note-menu-item-1']");
    expect(element?.innerHTML).toContain("Delete");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(NoteMenu, props);
  });
});
