import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { ProfileMinimal } from ".";
import { configureI18n } from "../../../helpers";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const profile = {
  emrId: "111",
  emrIdType: "test",
  fhirId: "test",
  id: "111",
  mrn: "111",
  person: { firstName: "Test", lastName: "Test" },
  __typename: "test"
};

const props = {
  profile,
  isMinimized: false
};

const setup = componentSetupWithStore((props) => <ProfileMinimal {...props} />);

describe("ProfileMinimal", () => {
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

  it("should have full name 'Test Test'", () => {
    component = setup(props);
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[0].innerHTML).toEqual("Test Test");
  });

  it("should have no mrn field", () => {
    component = setup({ ...props, isMinimized: true });
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[2]).toBeFalsy();
  });

  it("should have mrn field", () => {
    component = setup(props);
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[2]).toBeTruthy();
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(ProfileMinimal, props);
  });
});
