import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { CardMedication } from ".";
import { configureI18n } from "../../../../../helpers";
import { componentSetupWithStore } from "../../../../../hocs";

const setup = componentSetupWithStore(() => (
  <CardMedication data={[{ medication_name: "Name", description: "Description", start_date: "" }]} />
));

describe("CardMedication", () => {
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

  it("should include text elements", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")).toBeTruthy();
  });
});
