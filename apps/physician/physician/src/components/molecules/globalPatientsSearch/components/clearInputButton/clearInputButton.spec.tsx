import _noop from "lodash/noop";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";

import { ClearInputButton } from ".";
import { configureI18n } from "../../../../../helpers";
import { componentSetup, componentWithTheme } from "../../../../../hocs";

const props = {
  hasCloseInInput: false,
  onClearSearchValue: _noop
};

const setup = componentSetup(() => <ClearInputButton hasCloseInInput={false} onClearSearchValue={_noop} />);

describe("ClearInputButton", () => {
  let baseElement: Element;

  beforeEach(() => {
    configureI18n();
    baseElement = setup().baseElement;
  });

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    expect(baseElement).toBeTruthy();
  });

  it("should render correct text", () => {
    expect(baseElement.getElementsByTagName("p")[0].textContent).toEqual("Clear");
  });

  it("should match snapshot", () => {
    const tree = renderer.create(componentWithTheme(ClearInputButton, props)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
