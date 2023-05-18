import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";

import { TermsCaption } from "./TermsCaption";
import { configureI18n } from "../../../../../helpers";
import { componentSetupWithStore } from "../../../../../hocs";
import { shouldMatchSnapshot } from "../../../../../helpers/snapshot.spec";

const setup = componentSetupWithStore(() => <TermsCaption />);

describe("TermsCaption modal", () => {
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

  it("should contain correct text", () => {
    expect(baseElement?.innerHTML).toContain("By e-signing, you accept Suki AI’s");
    expect(baseElement?.innerHTML).toContain("terms.");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(TermsCaption);
  });
});
