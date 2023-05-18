import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { Cards } from ".";
import { CardType } from "../../../constants";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";

const cardsData = {
  content: "Allergies: \npeanut (seizure)\npollen extracts (dizziness)",
  error: "",
  jsonContent:
    '[{"allergen_name":"peanut","code_set":"RXNORM","code":"891658","categories":["food","medication"],"reactions":[{"reaction_name":"seizure","severity":"severe","code_set":"SNOMED","code":"91175000"}],"onset_date":"2022-01-10T00:00:00Z","updated_time":"2022-05-11T00:00:00Z"},{"allergen_name":"pollen extracts","code_set":"RXNORM","categories":["environment"],"reactions":[{"reaction_name":"dizziness","severity":"mild","code_set":"SNOMED","code":"404640003"}],"onset_date":"2022-03-07T00:00:00Z","updated_time":"2022-05-11T00:00:00Z"}]',
  recordedDate: null,
  type: CardType.ALLERGIES
} as any;

const setup = componentSetupWithStore(() => <Cards cardsByType={{ ALLERGIES: cardsData }} isCardsVisible={true} />);

describe("Cards", () => {
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
