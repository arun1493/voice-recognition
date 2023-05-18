import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { BusinessAssociateAgreement } from ".";
import { componentSetupWithStore } from "../../hocs";
import { shouldMatchSnapshot } from "../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <BusinessAssociateAgreement />);

describe("BusinessAssociateAgreement component", () => {
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
    shouldMatchSnapshot(BusinessAssociateAgreement);
  });
});
