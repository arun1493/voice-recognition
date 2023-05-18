import { cleanup, RenderResult } from "@testing-library/react";

import { DeleteNoteDialog } from ".";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <DeleteNoteDialog />);

describe("DeleteNoteDialog", () => {
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

  it("should have title 'Delete note?'", () => {
    const { baseElement } = component;
    const element = baseElement.querySelector("p");
    expect(element?.innerHTML).toContain("Delete note?");
  });

  it("should have 'Delete' button", () => {
    const { baseElement } = component;
    const element = baseElement.getElementsByTagName("button")[1];
    expect(element.innerHTML).toContain("Delete");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(DeleteNoteDialog);
  });
});
