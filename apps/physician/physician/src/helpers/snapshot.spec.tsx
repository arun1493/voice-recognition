import { FunctionComponent } from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";

import { componentWithThemeAndStore } from "../hocs";

const shouldMatchSnapshot = (component: FunctionComponent<any>, props: any = {}, state: any = {}) => {
  const tree = renderer.create(componentWithThemeAndStore(component, props, state)).toJSON();
  expect(tree).toMatchSnapshot();
};

describe("shouldMatchSnapshot", () => {
  it("should create snapshot and compare with reference", () => {
    // shouldMatchSnapshot(() => <div></div>);
  });
});

export { shouldMatchSnapshot };
