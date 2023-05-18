import { NoteStatus } from "@suki-web/suki-ui";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { componentSetup } from "../../../hocs";
import { PatientCell, PatientCellProps } from "./index";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const props: PatientCellProps = {
  age: "29",
  fullName: "John Snow",
  gender: "M",
  status: NoteStatus.USER_IS_DONE
};

const setup = componentSetup(PatientCell, props);

describe("Patient Cell", () => {
  let component: RenderResult;

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    component = setup();
    const { baseElement } = component;
    expect(baseElement).toBeTruthy();
  });

  it("should render correct text", () => {
    component = setup();
    const { baseElement } = component;
    const patientName = baseElement.querySelector(`[data-cy="patient-name"]`)?.textContent || "";
    const patientAge = baseElement.querySelector(`[data-cy="patient-age"]`)?.textContent || "";
    const patientGender = baseElement.querySelector(`[data-cy="patient-gender"]`)?.textContent || "";

    expect(baseElement).toHaveTextContent(patientName);
    expect(baseElement).toHaveTextContent(patientAge);
    expect(baseElement).toHaveTextContent(patientGender);
  });

  it("should have no age", () => {
    component = setup({ ...props, age: null });
    const { baseElement } = component;
    expect(baseElement.querySelector(`[data-cy="patient-age"]`)?.textContent).toEqual("__");
  });

  it("should have no gender", () => {
    component = setup({ ...props, gender: null });
    const { baseElement } = component;
    expect(baseElement.querySelector(`[data-cy="patient-gender"]`)?.textContent).toEqual("__");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(PatientCell, props);
  });
});
