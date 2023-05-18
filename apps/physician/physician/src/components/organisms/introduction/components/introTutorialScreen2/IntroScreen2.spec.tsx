import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { IntroScreen2 } from ".";
import { componentSetup } from "../../../../../hocs";
import { configureI18n } from "../../../../../helpers";
import { shouldMatchSnapshot } from "../../../../../helpers/snapshot.spec";

const setup = componentSetup(IntroScreen2);

describe("Intro Screen2", () => {
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

  it("should render the correct buttons", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("button")[0].innerHTML).toEqual("Play Demo");
    expect(baseElement.getElementsByTagName("button")[1].innerHTML).toEqual("Skip");
  });

  it("should render the correct header", () => {
    const { baseElement } = component;
    expect(
      baseElement.getElementsByTagName("h3")?.[0]?.innerHTML ||
        baseElement.getElementsByTagName("h4")?.[0]?.innerHTML ||
        baseElement.getElementsByTagName("h1")?.[0]?.innerHTML
    ).toEqual("Hello, I’m Suki.");
  });

  it("should render the correct description", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[0].innerHTML).toEqual(
      "To get started, here’s a brief video that shows how I can help you create a note."
    );
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(IntroScreen2);
  });
});
