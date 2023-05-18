import _noop from "lodash/noop";
import { cleanup, RenderResult } from "@testing-library/react";

import { ICD10List } from ".";
import { configureI18n } from "../../../../../helpers";
import { componentSetupWithStore } from "../../../../../hocs";
import { shouldMatchSnapshot } from "../../../../../helpers/snapshot.spec";

const props = {
  data: [
    {
      item: [
        {
          children: [],
          diagnoses: []
        }
      ],
      searchQuery: "test"
    }
  ],
  isSubLevel: false,
  onItemClick: _noop,
  searchQuery: "test",
  title: "Test title"
};

const setup = componentSetupWithStore((newProps) => <ICD10List {...newProps} />);

describe("ICD10List", () => {
  let component: RenderResult;

  beforeEach(() => {
    configureI18n();
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    component = setup(props);
    const { baseElement } = component;
    expect(baseElement).toBeTruthy();
  });

  it("should have title 'Test title'", () => {
    component = setup(props);
    const { baseElement } = component;
    const element = baseElement.querySelector("h6");
    expect(element?.innerHTML).toContain("Test title");
  });

  it("should have no title if it is sub level", () => {
    component = setup({ ...props, isSubLevel: true });
    const { baseElement } = component;
    const element = baseElement.querySelector("h6");
    expect(element).toBeFalsy();
  });

  it("should have 1 item", () => {
    component = setup(props);
    const { baseElement } = component;
    const element = baseElement.getElementsByTagName("li");
    expect(element?.length).toEqual(1);
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(ICD10List, props);
  });
});
