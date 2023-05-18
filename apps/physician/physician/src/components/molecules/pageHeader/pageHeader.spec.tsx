import "@testing-library/jest-dom/extend-expect";
import { NavigationIcon } from "@suki-web/suki-ui";
import { cleanup, RenderResult } from "@testing-library/react";

import { PageHeader, PageHeaderProps } from ".";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const props: PageHeaderProps = {
  title: "Page title",
  renderActions: () => {
    return (
      <NavigationIcon
        icon="close"
        onClick={() => {
          console.log("");
        }}
        size="xs"
        testId="header-close-button"
      />
    );
  }
};

const setup = componentSetupWithStore((props) => <PageHeader {...props} />);

describe("Page Header component", () => {
  let component: RenderResult;

  afterEach(() => {
    cleanup();
  });

  it("should render successfully", () => {
    component = setup(props);
    const { baseElement } = component;
    expect(baseElement).toBeTruthy();
  });

  it("should have back button", () => {
    component = setup(props);
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("svg")[0]).toBeTruthy();
  });

  it("should have no add button", () => {
    component = setup({ title: "Page title", hasBackButton: false });
    const { baseElement } = component;
    expect(baseElement.querySelector("button")).toBeFalsy();
  });

  it("should have add button", () => {
    component = setup({ ...props, hasBackButton: false, hasAddButton: true });
    const { baseElement } = component;
    expect(baseElement.querySelector("button")).toBeTruthy();
  });

  it("should have add button with title 'Add button'", () => {
    const newProps = {
      ...props,
      hasAddButton: true,
      renderActions: () => <p>Add button</p>
    };
    component = setup(newProps);
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("p")[0].innerHTML).toEqual("Add button");
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(PageHeader, props);
  });
});
