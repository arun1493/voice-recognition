import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import PageNotFound from "./PageNotFound";
import { configureI18n } from "../../helpers";
import { componentSetupWithStore } from "../../hocs";

const setup = componentSetupWithStore(() => <PageNotFound />);

describe("PageNotFound", () => {
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

    expect(baseElement.getElementsByTagName("h1")[0].innerHTML).toEqual("Sorry");
  });

  it("should render the correct message", () => {
    const { baseElement } = component;

    expect(baseElement.getElementsByTagName("h6")[0].innerHTML).toEqual("We couldn’t find that page.");
  });
});
