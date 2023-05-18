import { cleanup, RenderResult } from "@testing-library/react";

import { Task, TaskProps } from ".";
import { componentSetup } from "../../../hocs";
import { shouldMatchSnapshot } from "../../../helpers/snapshot.spec";

const props: TaskProps = {
  id: "id",
  status: "PENDING",
  title: "Task title"
};

const setup = componentSetup(Task, props);

describe("Task", () => {
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

  it("should render icon", () => {
    const { baseElement } = component;
    expect(baseElement.getElementsByTagName("svg").length).toEqual(1);
  });

  it("should match snapshot", () => {
    shouldMatchSnapshot(Task, props);
  });

  it("should match snapshot with additional props", () => {
    const propsWithAdditional = {
      ...props,
      additional: {
        progress: {
          tasksCompleted: 5,
          totalTasks: 10
        }
      }
    };
    shouldMatchSnapshot(Task, propsWithAdditional);
  });
});
