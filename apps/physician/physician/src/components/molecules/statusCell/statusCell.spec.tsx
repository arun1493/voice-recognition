import { NoteStatus } from "@suki-web/suki-ui";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { PAGES } from "../../../constants";
import { StatusCell, StatusCellProps } from ".";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const props: StatusCellProps = {
  status: NoteStatus.USER_IS_DONE
};

const setup = componentSetupWithStore(() => <StatusCell {...props} />);

describe("Patient Status", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = setup();
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const { baseElement } = component;
    expect(baseElement).toBeTruthy();
  });

  it("should render correct status", () => {
    const { baseElement } = component;
    const svg = baseElement.getElementsByTagName("svg");
    expect(svg).toHaveLength(1);
  });

  it("should match snapshot - selectedClose icon", () => {
    const props: StatusCellProps = {
      hasDeleteButton: true,
      onDelete: jest.fn
    };
    shouldMatchSnapshot(StatusCell, props);
  });

  it("should match snapshot - listArrow icon", () => {
    const props: StatusCellProps = {
      type: PAGES.SETTINGS
    };
    shouldMatchSnapshot(StatusCell, props);
  });

  it("should match snapshot - check icon", () => {
    const props: StatusCellProps = {
      type: PAGES.UNFINISHED_NOTES,
      status: NoteStatus.USER_IS_DONE
    };
    shouldMatchSnapshot(StatusCell, props);
  });

  it("should match snapshot - dot icon", () => {
    const props: StatusCellProps = {
      type: PAGES.UNFINISHED_NOTES,
      status: NoteStatus.SUBMITTED_TO_EMR
    };
    shouldMatchSnapshot(StatusCell, props);
  });

  it("should match snapshot - listUnfinishedNote icon", () => {
    const props: StatusCellProps = {
      type: PAGES.UNFINISHED_NOTES,
      status: NoteStatus.INCOMPLETE
    };
    shouldMatchSnapshot(StatusCell, props);
  });

  it("should match snapshot - listSignNote icon", () => {
    const props: StatusCellProps = {
      type: PAGES.UNFINISHED_NOTES,
      status: NoteStatus.NEED_DOCTOR_SIGN_OFF
    };
    shouldMatchSnapshot(StatusCell, props);
  });

  it("should match snapshot - clock icon", () => {
    const props: StatusCellProps = {
      status: NoteStatus.USER_IS_DONE
    };
    shouldMatchSnapshot(StatusCell, props);
  });

  it("should match snapshot - exclamation icon", () => {
    const props: StatusCellProps = {
      status: NoteStatus.INCOMPLETE
    };
    shouldMatchSnapshot(StatusCell, props);
  });

  it("should match snapshot - check icon", () => {
    const props: StatusCellProps = {
      status: NoteStatus.SUBMITTED_TO_EMR
    };
    shouldMatchSnapshot(StatusCell, props);
  });

  it("should match snapshot - chart icon", () => {
    const props: StatusCellProps = {
      isChart: true
    };
    shouldMatchSnapshot(StatusCell, props);
  });

  it("should match snapshot - empty cell", () => {
    shouldMatchSnapshot(StatusCell);
  });
});
