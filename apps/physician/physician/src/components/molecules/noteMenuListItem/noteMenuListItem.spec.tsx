import _noop from "lodash/noop";
import { IconType } from "@suki-web/suki-ui";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, RenderResult } from "@testing-library/react";

import { NoteMenuListItem } from ".";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const props = {
  children: "Settings",
  icon: "settings" as IconType,
  isActive: "true",
  onClick: _noop,
  testId: "test"
};

const setup = componentSetupWithStore((props) => <NoteMenuListItem {...props} />);

describe("NoteMenuListItems", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = setup(props);
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    const { baseElement } = component;
    expect(baseElement).toBeTruthy();
  });

  it("should render correct text", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("div")[0].textContent).toEqual("Settings");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(NoteMenuListItem, props);
  });
});
