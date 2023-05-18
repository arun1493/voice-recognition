import { Paths } from "@suki-web/suki-business";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { SukiLogo } from "./";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <SukiLogo />);

describe("SukiLogo component", () => {
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
    shouldMatchSnapshot(SukiLogo);
  });

  it("should have correct link", () => {
    const { baseElement } = component;
    expect(baseElement.querySelector(`a[href='${Paths.Home}']`)).toBeTruthy();
  });
});
