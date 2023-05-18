import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { SukiLogoR } from ".";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <SukiLogoR />);

describe("SukiLogoR component", () => {
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
    shouldMatchSnapshot(SukiLogoR);
  });

  it("should have correct link", () => {
    const { baseElement } = component;
    expect(baseElement.querySelector(`a[href='/https://suki.ai']`)).toBeTruthy();
  });
});
