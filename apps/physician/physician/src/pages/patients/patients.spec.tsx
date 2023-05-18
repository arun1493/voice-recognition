import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import Patients from "./Patients";
import { configureI18n } from "../../helpers";
import { componentSetupWithStore } from "../../hocs";

const setup = () => componentSetupWithStore(() => <Patients />);

describe("Patients Component", () => {
  let component: RenderResult;

  beforeEach(() => {
    configureI18n();
    component = setup()();
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const { baseElement } = component;
    expect(baseElement).toBeTruthy();
  });
});
