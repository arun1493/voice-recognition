import { cleanup, RenderResult } from "@testing-library/react";

import { NoteTypeDetails } from ".";
import { configureI18n } from "../../../../helpers";
import { componentSetupWithStore } from "../../../../hocs";

const setup = componentSetupWithStore(() => <NoteTypeDetails />);

describe("Note Type Details", () => {
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
});
