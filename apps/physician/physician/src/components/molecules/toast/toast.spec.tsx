import _noop from "lodash/noop";
import { Icon } from "@suki-web/suki-ui";
import { cleanup, RenderResult } from "@testing-library/react";

import { Toast, ToastProps } from ".";
import { componentSetupWithStore } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const props: ToastProps = {
  hasCloseOnClick: true,
  icon: <Icon icon="hamburgerMenu" size="md" />,
  id: "id",
  message: "message",
  title: "Severe error",
  type: "severe"
};

const setup = componentSetupWithStore(() => <Toast {...props} />);

describe("Toast", () => {
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

  it("should have h6 header", () => {
    const { baseElement } = component;
    const h6 = baseElement.getElementsByTagName("h6");
    expect(h6).toHaveLength(1);
  });

  it("should have icon", () => {
    const { baseElement } = component;
    const svg = baseElement.getElementsByTagName("svg");
    expect(svg).toHaveLength(1);
  });

  it("should have close button", () => {
    const { baseElement } = component;
    const button = baseElement.getElementsByTagName("button");
    expect(button).toHaveLength(1);
  });

  it("should match snapshot - listArrow icon", () => {
    shouldMatchSnapshot(Toast, props);
  });
});
