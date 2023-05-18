import _noop from "lodash/noop";
import { cleanup } from "@testing-library/react";

import { SuggestionsPanel } from ".";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const suggestions = [
  {
    diagnosis: {
      billable: true,
      hccCode: "-1",
      icdCode: "F341",
      icdDescription: "Chronic depression",
      panelRanking: 1,
      problemLabel: "Chronic depression",
      snomedCode: "192080009",
      snomedDescription: "Chronic depression",
      suggestionType: "PL",
      __typename: "Diagnosis"
    },
    suggestionType: "PL",
    __typename: "HCCSuggestion"
  },
  {
    diagnosis: {
      billable: true,
      hccCode: "-1",
      icdCode: "F419",
      icdDescription: "Anxiety disorder, unspecified",
      panelRanking: 2,
      problemLabel: "Anxiety disorder, unspecified",
      snomedCode: "197480006",
      snomedDescription: "Anxiety disorder",
      suggestionType: "PL",
      __typename: "Diagnosis"
    },
    suggestionType: "PL",
    __typename: "HCCSuggestion"
  }
];
const section = { id: "test", name: "test", navigationKeywords: [], pbcSectionFlag: false, plainText: "" };

const props = {
  ref: null,
  section,
  sections: [section],
  suggestions,
  updateSection: _noop
};

const setup = componentSetupWithStore(() => <SuggestionsPanel {...props} />);

describe("SuggestionsPanel", () => {
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

  it("should have 2 suggestions", () => {
    const element = baseElement.getElementsByTagName("li");
    expect(element.length).toEqual(2);
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(SuggestionsPanel, props);
  });
});
