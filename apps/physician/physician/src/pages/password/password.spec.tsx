import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { Password } from ".";
import { componentSetupWithStore } from "../../hocs";
import { shouldMatchSnapshot } from "../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <Password />);

describe("Password component", () => {
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
    shouldMatchSnapshot(Password);
  });
});
