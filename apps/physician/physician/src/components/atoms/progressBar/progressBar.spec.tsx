import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { componentSetup } from "../../../hocs";
import { ProgressBar, ProgressBarProps } from "./";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const props: ProgressBarProps = {
  tasksCompleted: 3,
  tasksToBeCompleted: 5
};

const setup = componentSetup(ProgressBar, props);

describe("ProgressBar component", () => {
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

  it("should match snapshot", () => {
    shouldMatchSnapshot(ProgressBar, props);
  });
});
