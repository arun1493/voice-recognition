import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render, RenderResult } from "@testing-library/react";

import { KebabMenu, KebabMenuProps } from ".";
import { componentSetup, componentWithTheme } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const title = "Remove";
const props: KebabMenuProps = {
  menuItems: [
    {
      onClick: jest.fn(),
      title
    }
  ]
};

const setup = componentSetup(KebabMenu, props);

describe("Kebab Menu component", () => {
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

  it("should render correct text", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")).toHaveLength(0);
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(KebabMenu, props);
  });

  it("should respond to clicks - show KebabMenuItem on moreOutline icon click", () => {
    cleanup();
    const TestComponent = () => componentWithTheme(KebabMenu, props);

    const { container, getByTestId } = render(<TestComponent />);

    const getKebabMenuItemValue = () => container.querySelector("p")?.innerHTML;

    expect(getKebabMenuItemValue()).toBeUndefined();

    fireEvent.click(getByTestId("moreOutlineButton"));

    expect(getKebabMenuItemValue()).toBe(title);
  });
});
