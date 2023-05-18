import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { componentSetup } from "../../../hocs";
import { UnfinishedNotesBadge, UnfinishedNotesBadgeProps } from "./";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const props: UnfinishedNotesBadgeProps = {
  unfinishedNotesCount: 42
};

const setup = componentSetup(UnfinishedNotesBadge, props);

describe("UnfinishedNotesBadge", () => {
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

  it("should render correct number of unfinished notes", () => {
    const { baseElement } = component;
    expect(baseElement).toHaveTextContent("42");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(UnfinishedNotesBadge, props);
  });
});
