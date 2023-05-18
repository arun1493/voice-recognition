import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import { SignUp } from "./SignUp";
import { configureI18n } from "../../helpers";
import { componentSetupWithStore } from "../../hocs";

const setup = componentSetupWithStore(() => <SignUp />);

describe("SignUp", () => {
  let baseElement: Element;

  beforeEach(() => {
    configureI18n();
    baseElement = setup().baseElement;
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    expect(baseElement).toBeTruthy();
  });

  it("should render the correct headings", () => {
    expect(baseElement.getElementsByTagName("h6")[0].innerHTML).toEqual("Create a Suki Account");
  });
});
