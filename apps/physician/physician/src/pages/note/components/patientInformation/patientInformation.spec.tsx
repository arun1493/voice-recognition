import "@testing-library/jest-dom/extend-expect";
import { EMPTY_OBJECT } from "@suki-web/suki-business";
import { cleanup, RenderResult } from "@testing-library/react";

import { configureI18n } from "../../../../helpers";
import PatientInformation from "./PatientInformation";
import { componentSetupWithStore } from "../../../../hocs";

const setup = componentSetupWithStore(() => (
  <PatientInformation
    composition={EMPTY_OBJECT}
    compositionId={""}
    isAddPatientEnabled={false}
    isDOSEditable={false}
    noteTypeId={""}
    patient={{
      emrId: "",
      emrIdType: "",
      fhirId: "",
      id: "",
      mrn: "",
      person: {
        age: undefined,
        dateOfBirth: undefined,
        firstName: undefined,
        gender: undefined,
        id: undefined,
        lastName: undefined,
        middleName: undefined,
        mrn: undefined,
        prefix: undefined,
        suffix: undefined,
        __typename: undefined
      },
      noteStatus: undefined,
      __typename: undefined
    }}
    readOnly={false}
  />
));

describe("NotePatientInformation", () => {
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
});
