import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { IntroScreen1 } from ".";
import { componentSetup } from "../../../../../hocs";
import { configureI18n } from "../../../../../helpers";
import { shouldMatchSnapshot } from "../../../../../helpers/snapshot.spec";

const setup = componentSetup(IntroScreen1);

describe("Intro Screen1", () => {
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

  it("should render the correct header", () => {
    const { baseElement } = component;
    expect(
      baseElement.getElementsByTagName("h1")?.[0]?.innerHTML ||
        baseElement.getElementsByTagName("h3")?.[0]?.innerHTML ||
        baseElement.getElementsByTagName("h4")?.[0]?.innerHTML
    ).toEqual("Tap here to wake Suki");
  });

  it("should render the correct description", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[0].innerHTML).toEqual("Suki only listens when awake.");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(IntroScreen1);
  });
});
