import { format } from "date-fns";
import "@testing-library/jest-dom/extend-expect";
import { NoteStatus, PatientModes } from "@suki-web/suki-ui";
import { cleanup, RenderResult } from "@testing-library/react";

import { configureI18n } from "../../../helpers";
import { ListPanel, ListPanelProps } from "./index";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const props: ListPanelProps = {
  age: "29",
  fullName: "John Snow",
  gender: "M",
  status: NoteStatus.USER_IS_DONE,
  startsAt: "Tue Jul 12 2022 14:07:39",
  type: PatientModes.SCHEDULE
};

const setup = componentSetupWithStore(() => <ListPanel {...props} />);

describe("Patient List Panel", () => {
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

  it("should render schedule type details properly", () => {
    const { baseElement } = component;
    const patientName = baseElement.querySelector(`[data-cy="patient-name"]`)?.textContent;
    const patientAge = baseElement.querySelector(`[data-cy="patient-age"]`)?.textContent;
    const patientGender = baseElement.querySelector(`[data-cy="patient-gender"]`)?.textContent;
    const patientStartsAt = baseElement.querySelector(`[data-cy="patient-appointment-time"]`)?.textContent;

    expect(props.fullName).toEqual(patientName);
    expect(props.age).toEqual(patientAge);
    expect(props.gender).toEqual(patientGender);
    expect(format(new Date(props.startsAt as string), "p")).toEqual(patientStartsAt);
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(ListPanel, props);
  });
});
