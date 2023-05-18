import { cleanup, RenderResult } from "@testing-library/react";

import { NewNoteButton } from ".";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <NewNoteButton />);

describe("NewNoteButton", () => {
  configureI18n();
  let component: RenderResult;

  beforeEach(() => {
    component = setup();
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const { baseElement } = component;
    expect(baseElement).toBeTruthy();
  });

  it("should have 'New Note' text and a svg", () => {
    const { baseElement } = component;
    expect(baseElement.textContent).toEqual("New Note");
    const svg = baseElement.getElementsByTagName("svg");
    expect(svg.length).toEqual(1);
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(NewNoteButton);
  });
});
