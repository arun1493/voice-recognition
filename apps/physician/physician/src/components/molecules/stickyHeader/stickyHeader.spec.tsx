import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { componentSetup } from "../../../hocs";
import { StickyHeader, StickyHeaderProps } from ".";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const props: StickyHeaderProps = { title: "Personal" };

const setup = componentSetup(StickyHeader, props);

describe("Sticky Header", () => {
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

  it("should render correct title", () => {
    const { baseElement } = component;
    const p = baseElement.getElementsByTagName("p")[0];
    expect(p.innerHTML).toEqual("Personal");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(StickyHeader, props);
  });
});
