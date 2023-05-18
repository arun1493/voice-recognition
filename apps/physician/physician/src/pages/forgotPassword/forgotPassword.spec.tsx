import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { configureI18n } from "../../helpers";
import ForgotPassword from "./ForgotPassword";
import { componentSetupWithStore } from "../../hocs";

const setup = componentSetupWithStore(() => <ForgotPassword />);

describe("ForgotPassword", () => {
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

  it("should render the correct heading", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("h5")[0].innerHTML).toEqual("Forgot Password");
  });

  it("should render the correct message", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[0].innerHTML).toEqual(
      "Please enter your Suki account email address, then check your email to finish resetting your password."
    );
  });
});
