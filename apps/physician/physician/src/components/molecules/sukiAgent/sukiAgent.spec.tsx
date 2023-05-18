import { cleanup, RenderResult } from "@testing-library/react";

import SukiAgent from "./SukiAgent";
import { componentSetupWithStore } from "../../../hocs";

const setup = componentSetupWithStore(() => <SukiAgent />);

describe("SukiAgent", () => {
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
});
