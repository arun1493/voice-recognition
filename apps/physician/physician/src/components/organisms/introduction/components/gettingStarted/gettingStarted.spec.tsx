import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { GettingStarted } from ".";
import { configureI18n } from "../../../../../helpers";
import { componentSetupWithStore } from "../../../../../hocs";
import { shouldMatchSnapshot } from "../../../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <GettingStarted />);

describe("Getting Started", () => {
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

  it("should render the correct heading", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("h1")[0].innerHTML).toEqual("Getting Started");
  });

  it("should render the correct desription", () => {
    const { baseElement } = component;
    expect(baseElement.querySelector("[role=doc-subtitle]")?.innerHTML).toEqual("Try these actions or voice commands");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(GettingStarted);
  });
});
