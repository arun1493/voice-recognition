import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { CardTable } from ".";
import { configureI18n } from "../../../../../helpers";
import { componentSetupWithStore } from "../../../../../hocs";

const setup = componentSetupWithStore(() => <CardTable data={[]} />);

describe("CardTable", () => {
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

  it("should include table", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("table")[0]).toBeTruthy();
  });
});
