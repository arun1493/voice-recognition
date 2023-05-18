import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { Note } from "./Note";
import { configureI18n } from "../../helpers";
import { componentSetupWithStore } from "../../hocs";

const setup = componentSetupWithStore(() => <Note />);

describe("Note Page", () => {
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
