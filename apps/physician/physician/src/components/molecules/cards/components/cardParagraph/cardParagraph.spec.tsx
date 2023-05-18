import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { CardParagraph } from ".";
import { configureI18n } from "../../../../../helpers";
import { componentSetupWithStore } from "../../../../../hocs";

const setup = componentSetupWithStore(() => <CardParagraph data={[{ content: "CASE REQUEST" }]} />);

describe("CardParagraph", () => {
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

  it("should render correct text", () => {
    const { baseElement } = component;
    expect(baseElement).toHaveTextContent("CASE REQUEST");
  });
});
